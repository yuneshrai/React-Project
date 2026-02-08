import { useState } from "react";
import { MOCK_BENEFICIARIES } from "../../data/mockData";
import "./MoneyTransfer.css";

const NEW_BENEFICIARY_VALUE = "__new__";

/**
 * Money Transfer Page - Saved beneficiaries dropdown or new name, amount, submit.
 * Mock success message after submission (no backend).
 */
function MoneyTransfer() {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successDetails, setSuccessDetails] = useState({ amount: "", name: "" });

  const isNewBeneficiary = selectedBeneficiary === NEW_BENEFICIARY_VALUE;
  const displayName = isNewBeneficiary ? beneficiary.trim() : (MOCK_BENEFICIARIES.find((b) => b.id === selectedBeneficiary)?.name ?? beneficiary.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const name = isNewBeneficiary ? beneficiary.trim() : (MOCK_BENEFICIARIES.find((b) => b.id === selectedBeneficiary)?.name ?? beneficiary.trim());
    const amt = parseFloat(amount);

    if (!name) {
      setError("Please select a beneficiary or enter name.");
      return;
    }
    if (!amount || isNaN(amt) || amt <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSuccessDetails({ amount, name });
    setLoading(false);
    setSuccess(true);
    setAmount("");
    if (isNewBeneficiary) setBeneficiary("");
    setSelectedBeneficiary("");
  };

  return (
    <div className="money-transfer">
      <h1 className="page-title">Send Money</h1>
      <p className="page-subtitle">Transfer to a saved beneficiary or enter a new name (mock only).</p>

      {success && (
        <div className="transfer-success" role="alert">
          Transfer of Rs. {successDetails.amount} to {successDetails.name} successful (demo only).
        </div>
      )}

      <div className="transfer-card">
        <form onSubmit={handleSubmit} className="transfer-form">
          {error && (
            <div className="transfer-error" role="alert">
              {error}
            </div>
          )}

          <label className="transfer-label">Beneficiary</label>
          <select
            className="transfer-input transfer-select"
            value={selectedBeneficiary}
            onChange={(e) => {
              setSelectedBeneficiary(e.target.value);
              if (e.target.value !== NEW_BENEFICIARY_VALUE) {
                const b = MOCK_BENEFICIARIES.find((x) => x.id === e.target.value);
                setBeneficiary(b ? b.name : "");
              }
            }}
            disabled={loading}
          >
            <option value="">Select beneficiary</option>
            {MOCK_BENEFICIARIES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} — {b.accountNumber}
              </option>
            ))}
            <option value={NEW_BENEFICIARY_VALUE}>+ New beneficiary</option>
          </select>

          {isNewBeneficiary && (
            <>
              <label className="transfer-label">Beneficiary Name</label>
              <input
                type="text"
                className="transfer-input"
                placeholder="Enter full name"
                value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}
                disabled={loading}
              />
            </>
          )}

          <label className="transfer-label">Amount (NPR)</label>
          <input
            type="number"
            className="transfer-input"
            placeholder="0.00"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={loading}
          />

          <button type="submit" className="transfer-button" disabled={loading}>
            {loading ? "Processing..." : "Submit Transfer"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default MoneyTransfer;
