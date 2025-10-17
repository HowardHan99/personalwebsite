import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { siteConfig } from '../data/siteConfig';
import { parseMarkdown } from '../utils/markdownParser';
import News from './News';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  // Parse bio with field replacements
  const fields = {
    title: personalInfo.title,
    institution: personalInfo.institution,
    institutionName: personalInfo.institutionName,
    institutionLink: personalInfo.institutionLink,
  };
  
  // Split bio into paragraphs
  const paragraphs = personalInfo.bio.split('\n\n');

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.greeting}>
            Hi!👋 I'm {personalInfo.name}
          </h1>
          
          <div className={styles.bio}>
            {paragraphs.map((paragraph, pIndex) => {
              const parts = parseMarkdown(paragraph, fields);
              
              return (
                <p key={pIndex}>
                  {parts.map((part, tIndex) => {
                    switch (part.type) {
                      case 'text':
                        return <span key={tIndex}>{part.content}</span>;
                      
                      case 'bold':
                        return <strong key={tIndex}>{part.content}</strong>;
                      
                      case 'link':
                        return (
                          <a 
                            key={tIndex} 
                            href={part.href} 
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {part.content}
                          </a>
                        );
                      
                      case 'color':
                        return (
                          <span 
                            key={tIndex} 
                            style={{ color: part.color }}
                          >
                            {part.content}
                          </span>
                        );
                      
                      default:
                        return null;
                    }
                  })}
                </p>
              );
            })}
          </div>
          
          {personalInfo.hashtags.length > 0 && (
            <div className={styles.hashtags}>
              {personalInfo.hashtags.map((tag, index) => (
                <span key={index} className={styles.hashtag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className={styles.sidebar}>
          <div className={styles.profileCard}>
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className={styles.profileImage}
            />
            <p className={styles.seeking}>{personalInfo.seeking}</p>
            
            {siteConfig.showNews ? (
              <>
                <div className={styles.iconLinks}>
                  {Object.entries(personalInfo.links).map(([key, link]) => (
                    <a 
                      key={key}
                      href={link.url} 
                      className={styles.iconButton} 
                      title={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
                <News />
              </>
            ) : (
              <div className={styles.links}>
                {Object.entries(personalInfo.links).map(([key, link]) => (
                  <a 
                    key={key}
                    href={link.url} 
                    className={styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [{link.label}]
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
