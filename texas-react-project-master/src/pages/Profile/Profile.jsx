import { useState } from "react";
import { useAuth } from "../../provider/AuthContextProvider";
import { useNavigate } from "react-router";
import { MOCK_USER } from "../../data/mockData";
import "./Profile.css";

/**
 * Profile / Settings Page - User details, change password UI (mock), logout button.
 */
function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [logoutLoading, setLogoutLoading] = useState(false);

  const displayUser = user || MOCK_USER;

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordMessage("");
    if (!newPassword || newPassword.length < 6) {
      setPasswordMessage("New password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMessage("Passwords do not match.");
      return;
    }
    // Mock: show success
    setPasswordMessage("Password change requested (demo only). No changes saved.");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogout = async () => {
    setLogoutLoading(true);
    await logout();
    setLogoutLoading(false);
    navigate("/login", { replace: true });
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">Profile & Settings</h1>
      <p className="page-subtitle">Manage your account details.</p>

      <section className="profile-card">
        <h2 className="section-heading">User Details</h2>
        <dl className="profile-info-list">
          <div className="profile-info-row">
            <dt>Name</dt>
            <dd>{displayUser.name}</dd>
          </div>
          <div className="profile-info-row">
            <dt>Email</dt>
            <dd>{displayUser.email}</dd>
          </div>
          <div className="profile-info-row">
            <dt>Phone</dt>
            <dd>{displayUser.phone || "—"}</dd>
          </div>
          <div className="profile-info-row">
            <dt>Member since</dt>
            <dd>{displayUser.joinedDate || "—"}</dd>
          </div>
        </dl>
      </section>

      <section className="profile-card">
        <h2 className="section-heading">Change Password</h2>
        <p className="profile-note">This is a mock form. No password is actually changed.</p>
        <form onSubmit={handlePasswordSubmit} className="profile-form">
          <label className="profile-label">Current Password</label>
          <input
            type="password"
            className="profile-input"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <label className="profile-label">New Password</label>
          <input
            type="password"
            className="profile-input"
            placeholder="New password (min 6 characters)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label className="profile-label">Confirm New Password</label>
          <input
            type="password"
            className="profile-input"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordMessage && (
            <p className={`profile-message ${passwordMessage.includes("requested") ? "success" : "error"}`}>
              {passwordMessage}
            </p>
          )}
          <button type="submit" className="profile-button secondary">
            Update Password
          </button>
        </form>
      </section>

      <section className="profile-card">
        <button
          type="button"
          className="profile-button logout"
          onClick={handleLogout}
          disabled={logoutLoading}
        >
          {logoutLoading ? "Logging out..." : "Logout"}
        </button>
      </section>
    </div>
  );
}

export default Profile;
