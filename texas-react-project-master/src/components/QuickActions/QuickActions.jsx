/**
 * QuickActions - Buttons for Send Money, View Account, etc.
 * Uses React Router Link for navigation; props: actions (array of { to, label })
 */
import { Link } from "react-router";
import "./QuickActions.css";

const DEFAULT_ACTIONS = [
  { to: "/transfer", label: "Send Money" },
  { to: "/account", label: "View Account" },
  { to: "/bills", label: "Bills & Services" },
  { to: "/profile", label: "Profile" },
];

function QuickActions({ actions = DEFAULT_ACTIONS }) {
  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <Link key={action.to} to={action.to} className="quick-action-btn">
          {action.label}
        </Link>
      ))}
    </div>
  );
}

export default QuickActions;
