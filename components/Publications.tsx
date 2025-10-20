import React from 'react';
import { publications } from '../data/publications';
import styles from '../styles/Publications.module.css';

export default function Publications() {
  const formatAuthors = (authors: string, highlight: string) => {
    const parts = authors.split(highlight);
    if (parts.length === 1) return authors;
    
    return (
      <>
        {parts[0]}
        <strong>{highlight}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <section className={styles.publications} id="publications">
      <div className={styles.container}>
        <h2 className={styles.title}>Publications</h2>
        
        <div className={styles.publicationList}>
          {publications.map((pub) => (
            <div key={pub.id} id={pub.id} className={styles.publicationCard}>
              <div className={styles.publicationImage}>
                <img src={pub.image} alt={pub.title} />
              </div>
              <div className={styles.publicationContent}>
                <h3 className={styles.publicationTitle}>{pub.title}</h3>
                {pub.award && (
                  <div className={styles.award}>
                    🏆 {pub.award}
                  </div>
                )}
                <p className={styles.publicationSubtitle}>{pub.subtitle}</p>
                <p className={styles.publicationAuthors}>
                  {formatAuthors(pub.authors, pub.authorHighlight)}
                </p>
                <p className={styles.publicationVenue}>
                  {pub.venue}
                  {pub.pdfLink && (
                    <>
                      {' '}
                      <a 
                        href={pub.pdfLink} 
                        className={styles.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [PDF]
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


