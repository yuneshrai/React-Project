import { createContext, useContext, useState, useEffect } from "react";
import { MOCK_CREDENTIALS, MOCK_USERS, MOCK_USER } from "../data/mockData";

const AuthContext = createContext(undefined);

// Mock authentication using hardcoded credentials (no backend)
const authService = {
  login: async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const valid = MOCK_CREDENTIALS.find(
      (c) => c.email.toLowerCase() === email.toLowerCase() && c.password === password
    );
    if (valid) {
      const key = valid.email.toLowerCase();
      const userProfile = MOCK_USERS[key] || { ...MOCK_USER, email: key };
      return { ...userProfile, email: key };
    }
    throw new Error("Invalid email or password");
  },
  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for stored session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const userData = await authService.login(email, password);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
