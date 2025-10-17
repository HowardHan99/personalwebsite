import React from 'react';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">Howard Han</a>
        </div>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>HOME</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

