import './Home.css';
import { CIRCLE_IMAGE, GithubIcon, GoogleScholarIcon, LinkedInIcon, PdfIcon } from '../assets/index';

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  label: string;
}

interface HomeProps {
  onNavigate: (page: 'about') => void;
}

const baseUrl = import.meta.env.BASE_URL;
const cvUrl = `${baseUrl}CV_Treischl.pdf`;

const socialLinks: SocialLink[] = [
  {
    icon: GithubIcon,
    url: 'https://github.com/edgar-treischl',
    label: 'GitHub',
  },
  {
    icon: GoogleScholarIcon,
    url: 'https://scholar.google.com/citations?user=hOhulnUAAAAJ&hl=en',
    label: 'Google Scholar',
  },
  {
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/dr-edgar-treischl-b681791b2/?originalSubdomain=de',
    label: 'LinkedIn',
  },
  {
    icon: PdfIcon,
    url: cvUrl,
    label: 'CV PDF',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="shell__panel home-panel">
      {/* ===================== */}
      {/* Hero Section */}
      {/* ===================== */}

      <section className="home__heroSection">
        <div className="home__heroContainer">
          <div className="home__heroVisual">
            <img
              src={CIRCLE_IMAGE}
              alt="Hero decorative circles"
              className="home__heroImage"
            />
          </div>

          <div className="home__heroContent">
            <h1 className="home__heroTitle">
              Edgar J. Treischl
            </h1>

            <h2 className="home__heroSubtitle">
              Technical Product Lead - Data & Web Platforms
            </h2>

            {/* Social Links */}
            <div className="home__socialLinks">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="home__socialBtn"
                  >
                    <IconComponent className="home__socialIcon" />
                  </a>
                );
              })}
            </div>

            {/* Description */}
            <p className="home__description">
              Applied data scientist turning insights into impact: leading platform development, web apps, and automated data workflows.
            </p>

            {/* Action Links */}
            <div className="home__actions">
              <a href={cvUrl} className="home__cvButton" download>
                Download CV
              </a>
              <button 
                onClick={() => onNavigate('about')}
                className="home__readMoreButton"
              >
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
