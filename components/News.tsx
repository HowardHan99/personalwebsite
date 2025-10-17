import React from 'react';
import { news } from '../data/news';
import styles from '../styles/News.module.css';

export default function News() {
  if (news.length === 0) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short',
    });
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'award':
        return '🏆';
      case 'publication':
        return '📄';
      case 'talk':
        return '🎤';
      default:
        return '📌';
    }
  };

  return (
    <div className={styles.newsSection}>
      <h3 className={styles.title}>News & Updates</h3>
      <div className={styles.newsList}>
        {news.slice(0, 5).map((item) => (
          <div key={item.id} className={styles.newsItem}>
            <span className={styles.icon}>{getTypeIcon(item.type)}</span>
            <div className={styles.newsContent}>
              <span className={styles.date}>{formatDate(item.date)}</span>
              <span className={styles.text}>
                {item.link ? (
                  <a href={item.link} className={styles.link}>
                    {item.content}
                  </a>
                ) : (
                  item.content
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

