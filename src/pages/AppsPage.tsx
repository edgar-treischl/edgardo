import type { AppRegistryEntry } from '../platform/appRegistry';
import { AppCard } from '../components/AppCard';
import '../styles/components/ShellHome.css';

type AppsPageProps = {
  apps: AppRegistryEntry[];
  onLoadApp: (name: string) => void;
};

export function AppsPage({ apps, onLoadApp }: AppsPageProps) {
  return (
    <section className="shell__panel">
      <div className="shell__panelHeader">
        <h2 className="shell__panelTitle">Apps</h2>
        <p className="shell__panelCopy">
          Click on an app to get started!
        </p>
      </div>

      <div className="shell__appGrid">
        {apps.map(app => (
          <AppCard
            key={app.name}
            type="link"
            href={app.route}
            title={app.displayName}
            description={app.description}
            previewImage={app.previewImage}
            previewAlt={app.previewAlt}
            onClick={() => onLoadApp(app.name)}
          />
        ))}
      </div>
    </section>
  );
}

