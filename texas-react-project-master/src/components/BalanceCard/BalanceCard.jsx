/**
 * BalanceCard - Displays account balance in a card layout.
 * Receives balance and optional currency via props.
 */
import "./BalanceCard.css";

function BalanceCard({ balance = 0, currency = "NPR", label = "Current Balance", loading }) {
  const formatted = new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(balance);

  return (
    <div className="balance-card">
      <span className="balance-card-label">{label}</span>
      {loading ? (
        <div className="balance-card-loading">
          <span className="loading-spinner" aria-hidden="true" />
          <span>Loading...</span>
        </div>
      ) : (
        <span className="balance-card-amount">{formatted}</span>
      )}
    </div>
  );
}

export default BalanceCard;
