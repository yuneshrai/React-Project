import { useState } from "react";
import "./BillPayment.css";

const SERVICES = [
  { id: "electricity", label: "Electricity Bill", icon: "⚡", fields: [{ name: "meterNumber", label: "Meter Number", placeholder: "Enter meter number", type: "text" }] },
  { id: "water", label: "Water Bill", icon: "💧", fields: [{ name: "customerId", label: "Customer ID", placeholder: "Enter customer ID", type: "text" }] },
  { id: "travel", label: "Travel Ticket", icon: "✈️", fields: [{ name: "from", label: "From", placeholder: "Departure city", type: "text" }, { name: "to", label: "To", placeholder: "Destination city", type: "text" }, { name: "date", label: "Travel Date", placeholder: "YYYY-MM-DD", type: "date" }, { name: "passengers", label: "Passengers", placeholder: "1", type: "number" }] },
  { id: "food", label: "Food Delivery", icon: "🍔", fields: [{ name: "restaurant", label: "Restaurant / Order", placeholder: "Restaurant name or order ID", type: "text" }, { name: "deliveryAddress", label: "Delivery Address", placeholder: "Full address", type: "text" }] },
];

/**
 * Bill Payment & Services — Electricity, Water, Travel bookings, Food delivery.
 * Mock only; no backend.
 */
function BillPayment() {
  const [activeService, setActiveService] = useState("electricity");
  const [formData, setFormData] = useState({});
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const service = SERVICES.find((s) => s.id === activeService);

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const amt = parseFloat(amount);
    if (!amount || isNaN(amt) || amt <= 0) {
      setError("Please enter a valid amount (NPR).");
      return;
    }

    const requiredFields = service.fields.map((f) => f.name);
    const missing = requiredFields.filter((f) => !String(formData[f] || "").trim());
    if (missing.length) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setLoading(false);
    setSuccess(true);
    setSuccessMessage(`${service.label} — Rs. ${amount} processed successfully (demo only).`);
    setAmount("");
    setFormData({});
  };

  return (
    <div className="bill-page">
      <header className="bill-page-header">
        <h1 className="page-title">Pay Bills & Services</h1>
        <p className="page-subtitle">Electricity, water, travel tickets, and food delivery — all in one place.</p>
      </header>

      {success && (
        <div className="bill-toast" role="alert">
          {successMessage}
        </div>
      )}

      <div className="bill-layout">
        <nav className="bill-services-nav" aria-label="Service type">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`bill-service-tab ${activeService === s.id ? "active" : ""}`}
              onClick={() => {
                setActiveService(s.id);
                setError("");
                setFormData({});
                setAmount("");
              }}
            >
              <span className="bill-service-icon">{s.icon}</span>
              <span className="bill-service-label">{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="bill-form-panel">
          <h2 className="bill-form-title">{service?.label}</h2>
          <form onSubmit={handleSubmit} className="bill-form">
            {error && (
              <div className="bill-error" role="alert">
                {error}
              </div>
            )}

            {service?.fields.map((field) => (
              <div key={field.name} className="bill-field">
                <label className="bill-label" htmlFor={field.name}>{field.label}</label>
                <input
                  id={field.name}
                  type={field.type}
                  className="bill-input"
                  placeholder={field.placeholder}
                  value={formData[field.name] ?? ""}
                  onChange={(e) => updateField(field.name, e.target.value)}
                  disabled={loading}
                />
              </div>
            ))}

            <div className="bill-field">
              <label className="bill-label" htmlFor="amount">Amount (NPR)</label>
              <input
                id="amount"
                type="number"
                className="bill-input"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={loading}
              />
            </div>

            <button type="submit" className="bill-submit" disabled={loading}>
              {loading ? "Processing…" : `Pay ${service?.label}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BillPayment;
