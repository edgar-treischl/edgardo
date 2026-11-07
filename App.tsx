import { lazy, Suspense, useState } from 'react';
import './src/styles/tokens.css';
import './src/styles/global.css';
import './src/components/MinimalShell.css';
import About from './src/pages/About';
import { AppsPage } from './src/pages/AppsPage';
import { appRegistry } from './src/platform/appRegistry';
import { ErrorBoundary } from './src/components/ErrorBoundary';

interface UserProfile {
  initials: string;
  name: string;
  role: string;
}

type CurrentPage = 'about' | 'apps';

const federatedApps = appRegistry.map(entry => ({
  entry,
  Component: lazy(entry.loader),
}));

export default function App() {
  const [user] = useState<UserProfile>({
    initials: 'ET',
    name: 'Edgar Treischl',
    role: 'Data Scientist',
  });

  const [currentPage, setCurrentPage] = useState<CurrentPage>('about');
  const [activeApp, setActiveApp] = useState<(typeof federatedApps)[number] | null>(null);

  const navigateToPage = (page: CurrentPage) => {
    setActiveApp(null);
    setCurrentPage(page);
  };

  const handleLogout = () => {
    alert('Logout functionality not implemented in this mock');
  };

  const handleLoadApp = (appName: string) => {
    const app = federatedApps.find(({ entry }) => entry.name === appName);
    if (!app) {
      throw new Error(`Unknown app: ${appName}`);
    }
    setActiveApp(app);
  };

  const ActiveComponent = activeApp?.Component;

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
            <button
              className={`shell__nav-item ${currentPage === 'about' ? 'shell__nav-item--active' : ''}`}
              onClick={() => navigateToPage('about')}
            >
              About
            </button>
            <button
              className={`shell__nav-item ${currentPage === 'apps' ? 'shell__nav-item--active' : ''}`}
              onClick={() => navigateToPage('apps')}
            >
              Apps
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
        {currentPage === 'about' && <About />}
        {currentPage === 'apps' && !activeApp && (
          <AppsPage apps={appRegistry} onLoadApp={handleLoadApp} />
        )}
        {activeApp && ActiveComponent && (
          <section className="shell__remotePanel">
            <button type="button" onClick={() => navigateToPage('apps')}>
              Back to Apps
            </button>
            <ErrorBoundary
              key={activeApp.entry.name}
              fallback={error => (
                <div role="alert">
                  <h2>Unable to load {activeApp.entry.displayName}</h2>
                  <p>{error.message}</p>
                </div>
              )}
            >
              <Suspense fallback={<p role="status">Loading {activeApp.entry.displayName}...</p>}>
                <ActiveComponent />
              </Suspense>
            </ErrorBoundary>
          </section>
        )}
      </main>
    </div>
  );
}
