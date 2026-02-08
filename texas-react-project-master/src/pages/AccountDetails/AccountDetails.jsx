import { useState, useEffect } from "react";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import TransactionList from "../../components/TransactionList/TransactionList";
import { MOCK_ACCOUNT, MOCK_TRANSACTIONS } from "../../data/mockData";
import "./AccountDetails.css";

/**
 * Account Details Page - Dummy account number, type, balance, transaction history with filter/search, statement download.
 */
function AccountDetails() {
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [statementMessage, setStatementMessage] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const handleDownloadStatement = () => {
    setStatementMessage("Generating statement...");
    setTimeout(() => {
      setStatementMessage("Statement for last 6 months has been sent to your registered email (demo only).");
    }, 1500);
  };

  return (
    <div className="account-details">
      <h1 className="page-title">Account Details</h1>
      <p className="page-subtitle">Your savings account information.</p>

      <section className="account-details-card">
        <h2 className="section-heading">Account Information</h2>
        <dl className="account-info-list">
          <div className="account-info-row">
            <dt>Account Number</dt>
            <dd>{MOCK_ACCOUNT.accountNumber}</dd>
          </div>
          <div className="account-info-row">
            <dt>Account Type</dt>
            <dd>{MOCK_ACCOUNT.accountType}</dd>
          </div>
          <div className="account-info-row">
            <dt>Branch</dt>
            <dd>{MOCK_ACCOUNT.branch}</dd>
          </div>
          <div className="account-info-row">
            <dt>IFSC Code</dt>
            <dd>{MOCK_ACCOUNT.ifscCode}</dd>
          </div>
        </dl>
      </section>

      <section className="account-details-section">
        <BalanceCard
          balance={MOCK_ACCOUNT.balance}
          currency={MOCK_ACCOUNT.currency}
          label="Current Balance"
          loading={loading}
        />
      </section>

      <section className="account-details-section">
        <div className="account-details-section-header">
          <h2 className="section-heading">Transaction History</h2>
          <button type="button" className="account-statement-btn" onClick={handleDownloadStatement}>
            Download Statement
          </button>
        </div>
        {statementMessage && (
          <div className={`account-statement-msg ${statementMessage.includes("sent") ? "success" : "info"}`}>
            {statementMessage}
          </div>
        )}
        <div className="transaction-filters">
          <input
            type="text"
            className="transaction-search"
            placeholder="Search by description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="transaction-filter-btns">
            {["all", "credit", "debit"].map((type) => (
              <button
                key={type}
                type="button"
                className={`filter-btn ${filterType === type ? "active" : ""}`}
                onClick={() => setFilterType(type)}
              >
                {type === "all" ? "All" : type === "credit" ? "Credit" : "Debit"}
              </button>
            ))}
          </div>
        </div>
        <TransactionList
          transactions={MOCK_TRANSACTIONS}
          loading={loading}
          emptyMessage="No transactions match your filter."
          filterType={filterType}
          searchQuery={searchQuery}
        />
      </section>
    </div>
  );
}

export default AccountDetails;
