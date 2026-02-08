import { Routes, Route, Navigate } from "react-router";
import MainLayout from "./provider/MainLayout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import MoneyTransfer from "./pages/MoneyTransfer/MoneyTransfer";
import BillPayment from "./pages/BillPayment/BillPayment";
import Profile from "./pages/Profile/Profile";
import "./App.css";

/**
 * Digital Banking App - Frontend-only UI prototype (mock data, no backend).
 * Routes: Login (public), Dashboard, Account, Transfer, Profile (protected).
 */
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="account" element={<AccountDetails />} />
        <Route path="transfer" element={<MoneyTransfer />} />
        <Route path="bills" element={<BillPayment />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
