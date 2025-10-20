import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { siteConfig } from '../data/siteConfig';
import { parseMarkdown, TextPart } from '../utils/markdownParser';
import { publications } from '../data/publications';
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

  const renderParts = (parts: TextPart[]): React.ReactNode[] => {
    return parts.map((part, index) => {
      const key = `part-${index}`;

      const children = typeof part.content === 'string'
        ? part.content
        : renderParts(part.content as TextPart[]);

      switch (part.type) {
        case 'text':
          return <React.Fragment key={key}>{children}</React.Fragment>;
        case 'bold':
          return <strong key={key}>{children}</strong>;
        case 'italic':
          return <span key={key} className={styles.specialFormat}>{children}</span>;
        case 'link':
          return (
            <a 
              key={key} 
              href={part.href} 
              className={styles.link}
              style={part.color ? { color: part.color } : undefined}
              target={part.href?.startsWith('#') ? undefined : '_blank'}
              rel={part.href?.startsWith('#') ? undefined : 'noopener noreferrer'}
            >
              {children}
            </a>
          );
        case 'color':
          return (
            <span 
              key={key} 
              style={{ color: part.color }}
            >
              {children}
            </span>
          );
        case 'publication':
          const pub = publications.find(p => p.id === part.publicationId);
          if (!pub) return null;
          return (
            <a 
              key={key}
              href={`/#${pub.id}`}
              className={styles.link}
            >
              [{pub.shortvenue || pub.id} '{pub.year.toString().slice(2)}]
            </a>
          );
        default:
          return null;
      }
    });
  };

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
                  {renderParts(parts)}
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
