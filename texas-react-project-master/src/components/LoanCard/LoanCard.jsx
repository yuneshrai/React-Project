import { MOCK_LOAN } from "../../data/mockData";
import "./LoanCard.css";

/**
 * LoanCard - Displays mock loan/EMI summary (outstanding, next EMI date).
 */
function LoanCard() {
  if (!MOCK_LOAN?.hasLoan) return null;

  const fmt = (n) =>
    new Intl.NumberFormat("en-NP", { style: "currency", currency: MOCK_LOAN.currency, minimumFractionDigits: 0 }).format(n);

  return (
    <div className="loan-card">
      <h3 className="loan-card-title">Active Loan</h3>
      <p className="loan-card-product">{MOCK_LOAN.productName}</p>
      <div className="loan-card-row">
        <span className="loan-card-label">Outstanding</span>
        <span className="loan-card-amount">{fmt(MOCK_LOAN.outstandingAmount)}</span>
      </div>
      <div className="loan-card-row">
        <span className="loan-card-label">Next EMI</span>
        <span className="loan-card-amount">{fmt(MOCK_LOAN.nextEmiAmount)}</span>
      </div>
      <div className="loan-card-date">
        Due on {MOCK_LOAN.nextEmiDate}
      </div>
    </div>
  );
}

export default LoanCard;
