import React, { useState } from 'react';
import { publications } from '../data/publications';
import styles from '../styles/Publications.module.css';

export default function Publications() {
  const [showEarlier, setShowEarlier] = useState(false);
  const [openAbstracts, setOpenAbstracts] = useState<Set<string>>(new Set());
  const toggleAbstract = (id: string) =>
    setOpenAbstracts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const mainPubs = publications.filter((p) => p.section !== 'earlier');
  const earlierPubs = publications.filter((p) => p.section === 'earlier');

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

  const renderList = (list: typeof publications) =>
    list.map((pub) => (
      <div key={pub.id} id={pub.id} className={styles.publicationCard}>
        <div className={styles.publicationImage} data-fit={pub.imageFit}>
          <img src={pub.image} alt={pub.title} />
        </div>
        <div className={styles.publicationContent}>
          <h3 className={styles.publicationTitle}>{pub.title}</h3>
          {pub.award && (
            <div className={styles.award}>
              🏆 {pub.award}
            </div>
          )}
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
            {pub.abstract && (
              <>
                {' '}
                <button
                  type="button"
                  className={styles.abstractToggle}
                  onClick={() => toggleAbstract(pub.id)}
                  aria-expanded={openAbstracts.has(pub.id)}
                  aria-controls={`${pub.id}-abstract`}
                >
                  [Abstract]
                </button>
              </>
            )}
          </p>
          {pub.abstract && openAbstracts.has(pub.id) && (
            <p id={`${pub.id}-abstract`} className={styles.abstract}>
              {pub.abstract}
            </p>
          )}
        </div>
      </div>
    ));

  return (
    <section className={styles.publications} id="publications">
      <div className={styles.container}>
        <h2 className={styles.title}>Publications</h2>
        
        <div className={styles.publicationList}>
          {renderList(mainPubs)}
        </div>

        {earlierPubs.length > 0 && (
          <div className={styles.earlier}>
            <button
              type="button"
              className={styles.earlierToggle}
              onClick={() => setShowEarlier((v) => !v)}
              aria-expanded={showEarlier}
              aria-controls="earlier-work"
            >
              <span className={styles.earlierChevron} data-open={showEarlier}>▸</span>
              Earlier Work in VR &amp; Visualization ({earlierPubs.length})
            </button>
            {showEarlier && (
              <div id="earlier-work" className={styles.publicationList}>
                {renderList(earlierPubs)}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}


