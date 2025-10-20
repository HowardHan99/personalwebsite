import React from 'react';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Ongoing Research Threads</h2>
        
        <div className={styles.projectList}>
          {projects.map((project) => {
            const linkedPublications = project.publicationIds
              ? publications.filter((pub) => project.publicationIds!.includes(pub.id))
              : [];

            return (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectAdvisors}>{project.advisors}</p>
                  <p className={styles.projectDescription}>
                    {project.description}
                    {project.status && (
                      <span className={styles.status}> {project.status}</span>
                    )}
                  </p>

                  {linkedPublications.length > 0 && (
                    <div className={styles.linkedPublications}>
                      <h4>Related Publications:</h4>
                      <span>
                        {linkedPublications.map((pub, idx) => (
                          <React.Fragment key={pub.id}>
                            <a 
                              href={`/#${pub.id}`}
                              title={project.citationFormat === 'short' ? `${pub.title} (${pub.venue}, ${pub.year})` : undefined}
                            >
                              {project.citationFormat === 'long' 
                                ? pub.title
                                : `[${pub.shortvenue || pub.id} '${pub.year.toString().slice(2)}]`
                              }
                            </a>
                            {idx < linkedPublications.length - 1 && ', '}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

