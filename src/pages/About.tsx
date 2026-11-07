import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import '../styles/About.css';
import LanguageBar from '../components/LanguageBar';
import TopicTree from '../components/TopicTree';
import { AVATAR_IMAGE } from '../assets';

const items = [
  'Development of a dynamic, automated reporting system for evaluations in Bavaria',
  'Established a fully automated development, testing, and deployment infrastructure',
  'Designed and implemented a validation strategy to ensure long-term data quality and reproducibility',
];

const itemsPD = [
  'Developing survey experiments to study the acceptance of AI-based applications',
  'Webmaster and IT coordinator for the chair, responsible for website maintenance and technical infrastructure',
];

const itemsPL = [
  'Defined the architecture and strategic direction for a modular, scalable ecosystem to deploy interactive data applications, ensuring a clear separation between application development and platform operations',
  'Oversaw the technical concept and implementation strategy for secure, enterprise-ready deployment using Docker, Kubernetes, and micro-frontend integration, in close collaboration with internal and external stakeholders',
  'Built and led a cross-functional dashboarding team across Data Science, Web Development, IT/DevOps, and Organizational Development to deliver high-impact data applications',
];

const cvUrl = `${import.meta.env.BASE_URL}CV_Treischl.pdf`;

function FadeIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    element.style.opacity = '0';
    element.style.transform = 'translateY(16px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  years: string;
  items: string[];
}

function ExperienceItem({ title, company, years, items }: ExperienceItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />

      <div className="timeline-content">
        <strong>{title}</strong>

        <div className="experience-meta">
          {company} · {years}
        </div>

        <ul className="experience-list">
          {items.map((item, index) => (
            <li key={index}>
              <span className="chevron">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about__heroSection">
        <div className="about__heroContainer">
          <div className="about__heroContent">
            <h1 className="about__heroTitle">
              Nice to meet you,
              <br />
              I'm Edgar.
            </h1>
            <p className="about__heroSubtitle">
              Data scientist transforming complex data into practical, actionable solutions.
            </p>
            <a href={cvUrl} className="about__cvButton" download>
              Download CV (PDF)
            </a>
          </div>
          <div className="about__heroVisual">
            <div className="about__avatarContainer">
              <img
                src={AVATAR_IMAGE}
                alt="Portrait"
                className="about__avatar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Content */}
      <FadeIn className="page-section about-content-section">
        <h2 className="section-heading">About Me</h2>

        <p>
          I'm a data scientist transforming complex data into practical,
          actionable solutions. I currently lead a small cross-functional
          team in building dashboards, deploying apps, automating workflows,
          and improving technical infrastructure—helping teams access the
          right insights at the right time.
        </p>

        <p>
          Before moving fully into applied data science, I earned a PhD in
          social science and spent several years conducting research in
          evaluation, causal analysis, and survey methods. During this time,
          I explored a broad range of data science topics—from visualization
          and machine learning to NLP—laying the foundation for my current
          work bridging research, engineering, and product.
        </p>

        <p>
          I'm passionate about designing systems that turn data into impact,
          combining technical expertise, product strategy, and leadership to
          deliver real-world solutions.
        </p>
      </FadeIn>

      {/* Experience */}
      <FadeIn className="page-section">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="timeline">
          <ExperienceItem
            title="Technical Product Lead - Data & Web Platforms"
            company="ISB Munich"
            years="2025 - Present"
            items={itemsPL}
          />

          <ExperienceItem
            title="Data Scientist"
            company="ISB Munich"
            years="2024 - 2025"
            items={items}
          />

          <ExperienceItem
            title="Post Doctoral Researcher"
            company="FAU Nuremberg"
            years="2020 - 2023"
            items={itemsPD}
          />
        </div>
      </FadeIn>

      {/* Publications */}
      <FadeIn className="page-section">
        <h2 className="section-heading">Selected Publications & Projects</h2>

        <div className="publication-card">
          <div>
            <strong>Treischl, E. J.</strong> (2023).{' '}
            <em>Practice R: An interactive textbook</em>.
            Walter de Gruyter GmbH.

            <a
              href="https://books.google.de/books?hl=en&lr=&id=Oc25EAAAQBAJ&oi=fnd&pg=PP7&ots=SDUnUwtBRe&sig=6bxV5LQxkWvBy_v5DTdzM83xYgA&redir_esc=y#v=onepage&q&f=false"
              target="_blank"
              rel="noopener noreferrer"
              className="text-button"
            >
              Google Books
            </a>
          </div>
        </div>

        <div className="publication-card">
          <div>
            <strong>Treischl, E. / Wolbring, T.</strong> (2020).{' '}
            <em>Wirkungsevaluation</em>.
            Grundlagen, Standards, Beispiele. Beltz Juventa.

            <a
              href="https://www.bic-media.com/widget/?isbn=9783779939245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-button"
            >
              Preview
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Skills & Tools */}
      <FadeIn className="page-section">
        <h2 className="section-heading">Skills & Tools</h2>

        <p>
          To give a transparent overview of my work, I analyzed my
          repositories using the GitHub/GitLab API. The data reflects my
          development activity in 2025 and is derived from the repos I
          actually maintain.
        </p>

        <p className="chart-description">
          The next bar chart shows the distribution of programming languages
          by percentage. It illustrates which languages I primarily work with
          and how my development time is spread across different technologies.
        </p>

        <LanguageBar />

        <p className="chart-description">
          The following treemap groups repositories by topic and visualizes
          their relative size and focus areas. This makes it easy to see how
          my projects are structured across themes such as web development,
          DevOps, and other topics.
        </p>

        <div className="topic-tree">
          <TopicTree />
        </div>
      </FadeIn>

      {/* Personal Note */}
      <FadeIn className="page-section personal-section">
        <h2 className="section-heading">Beyond Research</h2>

        <p>
          Outside of research, I enjoy jogging, swimming, and biking.
          These activities help me maintain balance and often provide
          space for new ideas to emerge.
        </p>
      </FadeIn>
    </div>
  );
}
