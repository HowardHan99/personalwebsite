import React from 'react';
import { projects } from '../data/projects';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Ongoing Research Threads</h2>
        
        <div className={styles.projectList}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.projectAdvisors}>{project.advisors}</p>
                <p className={styles.projectDescription}>
                  {project.description}
                  {project.status && (
                    <span className={styles.status}> {project.status}</span>
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

