export interface NewsItem {
  id: string;
  date: string; // YYYY-MM-DD format
  content: string;
  link?: string;
  type?: 'award' | 'publication' | 'talk' | 'general';
}

/**
 * News and Updates
 * 
 * Add your latest news, awards, talks, etc.
 * Items are automatically sorted by date (newest first)
 */
export const news: NewsItem[] = [
  {
    id: "news-1",
    date: "2024-01-15",
    content: "Paper accepted to CHI 2024!",
    type: "publication",
  },
  {
    id: "news-2",
    date: "2023-12-01",
    content: "Gave a talk at HCI Seminar Series",
    type: "talk",
  },
  {
    id: "news-3",
    date: "2023-10-20",
    content: "Started as Research Associate at CMU HCII",
    type: "general",
  },
];

// Sort by date (newest first)
news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

