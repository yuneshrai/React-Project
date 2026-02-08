import { useState, useRef, useEffect } from "react";
import { MOCK_NOTIFICATIONS } from "../../data/mockData";
import "./NotificationBell.css";

/**
 * NotificationBell - Header bell icon with dropdown of mock alerts.
 */
function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <div className="notification-bell-wrap" ref={ref}>
      <button
        type="button"
        className="notification-bell-btn"
        onClick={() => setOpen(!open)}
        aria-label="Notifications"
        aria-expanded={open}
      >
        <span className="notification-bell-icon" aria-hidden="true">🔔</span>
        {unreadCount > 0 && (
          <span className="notification-bell-badge">{unreadCount}</span>
        )}
      </button>
      {open && (
        <div className="notification-bell-dropdown">
          <div className="notification-bell-header">Notifications</div>
          <ul className="notification-bell-list">
            {MOCK_NOTIFICATIONS.map((n) => (
              <li key={n.id} className={`notification-bell-item ${n.read ? "read" : ""}`}>
                <strong>{n.title}</strong>
                <p>{n.message}</p>
                <span className="notification-bell-time">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;
