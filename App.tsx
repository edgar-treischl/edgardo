import { useState } from 'react';
import './src/styles/tokens.css';
import './src/styles/global.css';
import './src/components/MinimalShell.css';
import About from './src/pages/About';

interface UserProfile {
  initials: string;
  name: string;
  role: string;
}

export default function App() {
  const [user] = useState<UserProfile>({
    initials: 'ET',
    name: 'Edgar Treischl',
    role: 'Data Scientist',
  });

  const handleLogout = () => {
    alert('Logout functionality not implemented in this mock');
  };

  return (
    <div className="shell__wrapper">
      {/* Minimal Header - inspired by reginald's ShellHeader */}
      <header className="shell__header">
        <div className="shell__header-inner">
          {/* Logo/Brand */}
          <div className="shell__brand">
            <div className="shell__brand-icon">E</div>
            <span className="shell__brand-text">edgardo</span>
          </div>

          {/* Navigation */}
          <nav className="shell__nav">
            <button className="shell__nav-item shell__nav-item--active">
              About
            </button>
          </nav>

          {/* User Menu */}
          <div className="shell__user-section">
            <div className="shell__user-menu">
              <div className="shell__user-avatar">{user.initials}</div>
              <div className="shell__user-dropdown-trigger">
                <div className="shell__user-name">{user.name}</div>
                <div className="shell__user-role">{user.role}</div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              className="shell__logout-btn"
              onClick={handleLogout}
              title="Logout"
            >
              ⎋
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="shell__content-area">
        <About />
      </main>
    </div>
  );
}
