// Icon components for shell navigation and UI elements

type IconProps = {
  className?: string;
};


export function AppsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 3h5v5H3zm6.5 0h5v5h-5zm6.5 0h5v5h-5zM3 9.5h5v5H3zm6.5 0h5v5h-5zm6.5 0h5v5h-5zM3 16h5v5H3zm6.5 0h5v5h-5zm6.5 0h5v5h-5z" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.27-5.14 5.55.4.35.75 1.03.75 2.08v3.11c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}

export function PdfIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 2.75h8l5.25 5.5v12.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2v-14a2.5 2.5 0 0 1 2-2.5Z"
        fill="currentColor"
        opacity=".15"
      />
      <path
        d="M14 2.75v5.5h5.25M6 2.75h8l5.25 5.5v12.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2v-14a2.5 2.5 0 0 1 2-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* P */}
        <path d="M7 17v-5h2a1.25 1.25 0 0 1 0 2.5H7" />
        {/* D */}
        <path d="M11.5 12h1a2.5 2.5 0 0 1 0 5h-1v-5Z" />
        {/* F */}
        <path d="M16.5 17v-5h2.5m-2.5 2.5h2" />
      </g>
    </svg>
  );
}

export function GoogleScholarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm-7 9.82V17c0 2.21 3.13 4 7 4s7-1.79 7-4v-4.18l-7 3.82-7-3.82z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52zM7.93 18.75H4.96V9.19h2.97v9.56zM6.45 7.88a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zm12.3 10.87h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.47V9.19h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.02 0 3.57 1.99 3.57 4.58v5.22z" />
    </svg>
  );
}