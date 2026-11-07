import type { ReactNode } from 'react';
import './AppCard.css';

type AppCardProps = {
  type: 'link' | 'button' | 'internal';
  title?: string;
  description?: string;
  previewImage?: string;
  previewAlt?: string;
  previewClass?: string;
  onClick?: () => void;
  href?: string;
  children?: ReactNode;
};

export function AppCard({
  type,
  title,
  description,
  previewImage,
  previewAlt,
  previewClass,
  onClick,
  href,
  children
}: AppCardProps) {
  const baseClassName = 'shell__appCard';

  if (type === 'link') {
    return (
      <a
        className={baseClassName}
        href={href}
        onClick={event => {
          event.preventDefault();
          onClick?.();
        }}
      >
        {previewImage && (
          <div className="shell__appCardPreview">
            <img
              className="shell__appCardImage"
              src={previewImage}
              alt={previewAlt}
            />
          </div>
        )}
        <div className="shell__appCardBody">
          {title && <span className="shell__appCardLabel">{title}</span>}
          {description && <p className="shell__appCardCopy">{description}</p>}
        </div>
        <div className="shell__appCardArrow">→</div>
      </a>
    );
  }

  if (type === 'internal') {
    return (
      <button
        type="button"
        className={baseClassName}
        onClick={onClick}
      >
        <div className={`shell__appCardPreview ${previewClass || ''}`}>
          {title && <span className="shell__appCardPreviewTitle">{title}</span>}
        </div>
        <div className="shell__appCardBody">
          {description && <p className="shell__appCardCopy">{description}</p>}
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={baseClassName}
      onClick={onClick}
    >
      {previewImage && (
        <div className="shell__appCardPreview">
          <img
            className="shell__appCardImage"
            src={previewImage}
            alt={previewAlt}
          />
        </div>
      )}
      <div className="shell__appCardBody">
        {title && <span className="shell__appCardLabel">{title}</span>}
        {description && <p className="shell__appCardCopy">{description}</p>}
        {children}
      </div>
    </button>
  );
}
