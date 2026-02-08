import { useState } from "react";
import { useAuth } from "../../provider/AuthContextProvider";
import { MOCK_CARDS } from "../../data/mockData";
import "./CardDisplay.css";

/**
 * CardDisplay - Shows mock debit card (masked number, expiry, holder).
 * Optional show/hide number for privacy.
 */
function CardDisplay() {
  const { user } = useAuth();
  const [showNumber, setShowNumber] = useState(false);
  const card = MOCK_CARDS[0];
  const displayName = user?.name || card?.holderName || "Card Holder";

  if (!card) return null;

  return (
    <div className="card-display">
      <div className="card-display-inner">
        <div className="card-display-type">{card.type}</div>
        <div className="card-display-number">
          {showNumber ? card.masked : "**** **** **** ****"}
        </div>
        <div className="card-display-row">
          <span className="card-display-label">Card holder</span>
          <span className="card-display-value">{displayName}</span>
        </div>
        <div className="card-display-row">
          <span className="card-display-label">Expires</span>
          <span className="card-display-value">{card.expiry}</span>
        </div>
      </div>
      <button
        type="button"
        className="card-display-toggle"
        onClick={() => setShowNumber(!showNumber)}
      >
        {showNumber ? "Hide number" : "Show number"}
      </button>
    </div>
  );
}

export default CardDisplay;
