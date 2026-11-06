import React from 'react';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import styles from '../styles/Projects.module.css';

type Publication = (typeof publications)[number];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Ongoing Research Threads</h2>

        <ol className={styles.threadList}>
          {projects.map((project, i) => {
            const linked = (project.publicationIds || [])
              .map((id) => publications.find((pub) => pub.id === id))
              .filter((pub): pub is Publication => Boolean(pub));

            return (
              <li key={project.id} id={project.id} className={styles.thread}>
                <div className={styles.threadAside}>
                  <span className={styles.number} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.threadTitle}>{project.title}</h3>
                  <p className={styles.threadSubtitle}>{project.subtitle}</p>
                  <img className={styles.thumb} src={project.image} alt="" />
                  <p className={styles.meta}>
                    {project.advisors}
                    {project.collaborators && (
                      <>
                        <br />
                        {project.collaborators}
                      </>
                    )}
                  </p>
                </div>

                <div className={styles.threadMain}>
                  <p className={styles.description}>{project.description}</p>

                  {linked.length > 0 && (
                    <ul className={styles.paperIndex} aria-label={`Papers in ${project.title}`}>
                      {linked.map((pub) => {
                        const underReview = /in submission/i.test(pub.venue);
                        return (
                          <li key={pub.id}>
                            <a href={`#${pub.id}`} className={styles.paperRow}>
                              <span className={styles.venue}>
                                {pub.shortvenue || 'Paper'} &rsquo;{String(pub.year).slice(2)}
                              </span>
                              <span className={styles.paperTitle}>
                                {pub.title}
                                {underReview && <span className={styles.status}>Under review</span>}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
