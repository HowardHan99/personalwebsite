import React from 'react';
import { community } from '../data/community';
import styles from '../styles/Community.module.css';

export default function Community() {
  return (
    <section className={styles.community} id="community">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{community.title}</h2>
          <p className={styles.intro}>{community.intro}</p>
          <p className={styles.links}>
            <a href={community.projectUrl} target="_blank" rel="noopener noreferrer">
              Project website →
            </a>
            <a href={`mailto:${community.contactEmail}`}>Get involved →</a>
          </p>
        </header>

        <div className={styles.grid}>
          {community.events.map((event) => (
            <article key={event.title} className={styles.event}>
              <div className={styles.eventImages} data-count={event.images.length}>
                {event.images.map((img) => (
                  <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                ))}
              </div>
              <div className={styles.eventText}>
                <p className={styles.eventMeta}>
                  {event.date} · {event.partner}
                </p>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
