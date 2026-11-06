import React from 'react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/personalInfo';
import { siteConfig } from '../data/siteConfig';
import styles from '../styles/Header.module.css';

const navItems = [
  { href: '#home', label: 'About', show: true },
  { href: '#publications', label: 'Publications', show: siteConfig.showPublications },
  { href: '#community', label: 'Community', show: siteConfig.showCommunity },
].filter((item) => item.show);

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="/" className={styles.logo}>
            Howard Han
          </a>
          <nav className={styles.nav} aria-label="Sections">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
            <a
              href={personalInfo.links.cv.url}
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
