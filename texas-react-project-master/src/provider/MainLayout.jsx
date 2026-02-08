import { Outlet, NavLink, useNavigate } from "react-router";
import { useAuth } from "./AuthContextProvider";
import { Navigate, useLocation } from "react-router";
import NotificationBell from "../components/NotificationBell/NotificationBell";
import "./MainLayout.css";

/**
 * MainLayout - Wraps authenticated routes with header nav and footer.
 * Redirects to login if not authenticated.
 */
export default function MainLayout() {
  const { isAuthenticated, loading, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  if (loading) {
    return (
      <div className="main-layout-loading">
        <span className="loading-spinner" aria-hidden="true" />
        <span>Loading...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  const linkClass = ({ isActive }) =>
    `main-layout-nav-link ${isActive ? "active" : ""}`;

  return (
    <div className="main-layout">
      <header className="main-layout-header">
        <NavLink to="/" className="main-layout-brand">
          Digital Banking
        </NavLink>
        <nav className="main-layout-nav">
          <NavLink to="/" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/account" className={linkClass}>
            Account
          </NavLink>
          <NavLink to="/transfer" className={linkClass}>
            Transfer
          </NavLink>
          <NavLink to="/bills" className={linkClass}>
            Bills & Services
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            Profile
          </NavLink>
          <NotificationBell />
          <button
            type="button"
            className="main-layout-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>

      <main className="main-layout-main">
        <Outlet />
      </main>

      <footer className="main-layout-footer">
        <p>Digital Banking — College Project (UI Prototype, Mock Data Only)</p>
      </footer>
    </div>
  );
}
