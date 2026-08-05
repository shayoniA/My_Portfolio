import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { profile, socials } from '../data/resume';

const navItems = [
  { label: 'Introduction', to: '/' },
  { label: 'Education', to: '/education' },
  { label: 'Certifications', to: '/certifications'},
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
];

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <motion.main
        className="page-frame"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {children}
      </motion.main>

      <footer className="footer">
        <div className="social-row">
          {socials.map((social) => {
            const Icon = social.icon;
            const isExternal = social.href.startsWith('http');
            return (
              <a
                key={social.label}
                href={social.href}
                className="social-link"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                <Icon size={16} />
                <span>{social.label}</span>
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
