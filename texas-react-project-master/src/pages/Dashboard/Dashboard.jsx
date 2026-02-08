import { useState, useEffect } from "react";
import { useAuth } from "../../provider/AuthContextProvider";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import TransactionList from "../../components/TransactionList/TransactionList";
import IncomeExpenseChart from "../../components/IncomeExpenseChart/IncomeExpenseChart";
import QuickActions from "../../components/QuickActions/QuickActions";
import LoanCard from "../../components/LoanCard/LoanCard";
import { MOCK_ACCOUNT, MOCK_TRANSACTIONS, MOCK_INCOME_EXPENSE } from "../../data/mockData";
import "./Dashboard.css";

/**
 * Dashboard - Welcome message, balance card, recent transactions, chart, quick actions.
 * Uses mock data; simulates loading with setTimeout.
 */
function Dashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        Welcome, {user?.name?.split(" ")[0] || "User"}!
      </h1>
      <p className="dashboard-subtitle">Here’s an overview of your account.</p>

      <section className="dashboard-section dashboard-balance-row">
        <BalanceCard
          balance={MOCK_ACCOUNT.balance}
          currency={MOCK_ACCOUNT.currency}
          label="Account Balance"
          loading={loading}
        />
        <LoanCard />
      </section>

      <section className="dashboard-section">
        <h2 className="section-heading">Quick Actions</h2>
        <QuickActions />
      </section>

      <div className="dashboard-grid">
        <section className="dashboard-section">
          <h2 className="section-heading">Recent Transactions</h2>
          <TransactionList
            transactions={MOCK_TRANSACTIONS}
            maxItems={5}
            loading={loading}
          />
        </section>
        <section className="dashboard-section">
          <IncomeExpenseChart data={MOCK_INCOME_EXPENSE} loading={loading} />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
