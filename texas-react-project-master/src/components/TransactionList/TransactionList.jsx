/**
 * TransactionList - Renders a list of transactions with amount and type styling.
 * Props: transactions (array), maxItems (optional), emptyMessage, loading
 */
import "./TransactionList.css";

function TransactionList({ transactions = [], maxItems, emptyMessage = "No transactions yet.", loading, currency = "NPR", filterType = "all", searchQuery = "" }) {
  let list = transactions;
  if (filterType !== "all") {
    list = list.filter((tx) => tx.type === filterType);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter((tx) => (tx.description || "").toLowerCase().includes(q));
  }
  list = maxItems ? list.slice(0, maxItems) : list;

  if (loading) {
    return (
      <div className="transaction-list">
        <div className="transaction-list-loading">
          <span className="loading-spinner" aria-hidden="true" />
          <span>Loading transactions...</span>
        </div>
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="transaction-list">
        <div className="empty-state">
          <p>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      <ul className="transaction-list-ul">
        {list.map((tx) => (
          <li key={tx.id} className="transaction-list-item">
            <div className="transaction-list-info">
              <span className="transaction-list-desc">{tx.description}</span>
              <span className="transaction-list-date">{tx.date}</span>
            </div>
            <span className={`transaction-list-amount ${tx.type === "credit" ? "credit" : "debit"}`}>
              {tx.type === "credit" ? "+" : ""}
              {typeof tx.amount === "number"
                ? new Intl.NumberFormat("en-NP", { style: "currency", currency, minimumFractionDigits: 2 }).format(Math.abs(tx.amount))
                : tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
