import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import Layout from './components/Layout';
import PageHeader from './components/PageHeader';
import RevealCard from './components/RevealCard';
import {
  deepDiveCopy,
  education,
  certifications,
  experience,
  highlights,
  profile,
  projects,
  quickStats,
  sectionCards,
  skills,
} from './data/resume';

function HomePage() {
  return (
    <div className="stack-xl">
      <section className="hero">
        <div className="hero-copy">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Sayani Adhikary
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {profile.summary}
          </motion.p>
          <motion.div
            className="hero-copy-stack"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>{deepDiveCopy.intro}</p>
            <p>{deepDiveCopy.intro2}</p>
            <p>{deepDiveCopy.intro3}</p>
          </motion.div>

          <div className="hero-actions">
            {deepDiveCopy.buttons.map((button) => {
              const Icon = button.icon;
              return (
                <Link key={button.label} to={button.to} className="button button-primary">
                  <Icon size={16} />
                  <span>{button.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hero-meta">
            <span className="meta-chip">{profile.email}</span>
            <span className="meta-chip">{profile.phone}</span>
          </div>
        </div>

        <RevealCard className="hero-panel">
          <div className="profile-card">
            <div className="profile-glow" />
            <div className="profile-avatar">
              <span>SA</span>
            </div>
            <h2 className='span-name'>{profile.name}</h2>
            <div className="profile-highlights">
              {highlights.map((item) => (
                <div key={item.label} className="mini-stat">
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealCard>
      </section>

      <RevealCard className="copy-panel">
          <h2>Built to feel like a guided, interactive resume rather than a flat document.</h2>
          <p className='desc'>
            Each section opens into a deeper page with stronger storytelling, animated cards, and
            a clear visual hierarchy. That makes it easier for recruiters, collaborators, or
            friends to move quickly and still get the full picture.
          </p>
      </RevealCard>

      <section className="section-grid section-grid-cards">
        {sectionCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <RevealCard key={card.title} delay={index * 0.06} className={`accent-${card.accent}`}>
              <Link className="section-tile" to={card.to}>
                <div className="tile-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <ChevronRight size={18} className="tile-arrow" />
              </Link>
            </RevealCard>
          );
        })}
      </section>
    </div>
  );
}

function EducationPage() {
  return (
    <div className="stack-xl">
      <PageHeader
        title="Education & Qualifications"
      />
      <div className="single-column">
        {education.map((item) => (
          <RevealCard key={item.degree}>
            <div className="detail-card accent-mint-reduced">
              <p className="eyebrow">{item.years}</p>
              <h2>{item.degree}</h2>
              <h3 className='education-details'>{item.institution}</h3>
              <h4 className='education-details'>{item.score}</h4>
              <p className='education-details'>{item.note}</p>
              <p className='viewResult'><a href={item.result}>View result</a></p>
            </div>
          </RevealCard>
        ))}
      </div>
    </div>
  );
}

function CertificationsPage() {
  return (
    <div className="stack-xl">
      <PageHeader
        title="Courses & Certifications"
      />
      <div className="single-column">
        {certifications.map((item) => (
          <RevealCard key={item.degree}>
            <div className="detail-card accent-mint-reduced">
              <h2>{item.skill}</h2>
              <p className='education-details'>{item.set}</p>
              <p className='viewResult'><a href={item.link}>View certificate</a></p>
            </div>
          </RevealCard>
        ))}
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="stack-xl">
      <PageHeader
        title="Skills"
      />
      <div className="skills-grid">
        {skills.map((group, index) => (
          <RevealCard key={group.title} delay={index * 0.05}>
            <div className="detail-card accent-mint-reduced">
              <h2>{group.title}</h2>
              <div className="chip-cloud">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="stack-xl">
      <PageHeader
        title="Selected projects presented with context, stack, and impact."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <RevealCard key={project.name} delay={index * 0.06}>
            <details className="project-card accent-mint-reduced">
              <summary>
                <div>
                  <p className="eyebrow">Project {index + 1}</p>
                  <h2>{project.name}</h2>
                </div>
                <span className="view-tag">Open</span>
              </summary>
              <div className="chip-cloud">
                {project.stack.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="project-impact">{project.impact}</p>
              <p className='project-description-desc'>{project.description}</p>
              <p className='view-demo'><a href={project.demovideo}>View demo video of the website</a></p>
              {project.deployment ? (<p className='view-deployment'><a href={project.deployment}>View deployed website</a></p>) : null}
            </details>
          </RevealCard>
        ))}
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="stack-xl">
      <PageHeader
        eyebrow="Achievements & Experience"
        title="Internships, hackathons, and problem-solving milestones."
      />
      <div className="timeline">
        {experience.map((item, index) => (
          <RevealCard key={item.title} delay={index * 0.05}>
            <div className="timeline-card accent-mint-reduced">
              <div className="timeline-marker" />
              <div className="timeline-body">
                <p className="eyebrow">{item.org}</p>
                <h2>{item.title}</h2>
                <p className='jobsummary'>{item.summary}</p>
                <ul className="bullet-list compact">
                  {item.details.map((detail) => (
                    <li key={detail}>
                      <BadgeCheck size={16} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {item.time ? (<p>{item.time}</p>) : null}
                {item.link_floneo ? (<p className='viewResult'><a href={item.link_floneo}>View offer letter</a></p>) : null}
                {item.link_mpc ? (<p className='viewResult'><a href={item.link_mpc}>View certificate</a></p>) : null}
                {item.link_cf ? (<p className='viewResult'><a href={item.link_cf}>View profile</a></p>) : null}
                {item.link_myntra ? (<p className='viewResult'><a href={item.link_myntra}>View solution</a></p>) : null}
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  return (
    <div className="app-root">
      <AnimatedBackground />
      <AppRoutes />
    </div>
  );
}
