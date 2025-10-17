import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/AdminEdit.module.css';

export default function AdminEdit() {
  const [activeTab, setActiveTab] = useState<'profile' | 'publication' | 'project' | 'news'>('news');
  const [message, setMessage] = useState('');

  return (
    <>
      <Head>
        <title>Edit Content - Interactive Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Header />
      
      <main className={styles.adminContainer}>
        <div className={styles.header}>
          <h1>✏️ Interactive Content Editor</h1>
          <p className={styles.subtitle}>Add and edit content with simple forms</p>
          {message && <div className={styles.message}>{message}</div>}
        </div>

        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'news' ? styles.active : ''}`}
            onClick={() => setActiveTab('news')}
          >
            📰 Add News
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'publication' ? styles.active : ''}`}
            onClick={() => setActiveTab('publication')}
          >
            📄 Add Publication
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'project' ? styles.active : ''}`}
            onClick={() => setActiveTab('project')}
          >
            🔬 Add Project
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Edit Profile
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'news' && <NewsForm setMessage={setMessage} />}
          {activeTab === 'publication' && <PublicationForm setMessage={setMessage} />}
          {activeTab === 'project' && <ProjectForm setMessage={setMessage} />}
          {activeTab === 'profile' && <ProfileForm setMessage={setMessage} />}
        </div>
      </main>
    </>
  );
}

function NewsForm({ setMessage }: { setMessage: (msg: string) => void }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    content: '',
    type: 'general' as 'award' | 'publication' | 'talk' | 'general',
    link: '',
  });
  const [generatedCode, setGeneratedCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newsItem = {
      ...formData,
      id: `news-${Date.now()}`,
    };

    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'news', data: newsItem }),
      });

      if (response.ok) {
        setMessage('✅ News item added successfully! Refresh the page to see it.');
        setFormData({ date: new Date().toISOString().split('T')[0], content: '', type: 'general', link: '' });
      } else {
        throw new Error('Failed to add news');
      }
    } catch (error) {
      // If API fails, show generated code
      const code = `{
  id: "${newsItem.id}",
  date: "${newsItem.date}",
  content: "${newsItem.content}",
  type: "${newsItem.type}",${newsItem.link ? `\n  link: "${newsItem.link}",` : ''}
}`;
      setGeneratedCode(code);
      setMessage('⚠️ Auto-save not available. Copy the code below and paste into data/news.ts');
    }
  };

  return (
    <div className={styles.form}>
      <h2>Add News Item</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Content</label>
          <input
            type="text"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Paper accepted to CHI 2024!"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
          >
            <option value="general">📌 General</option>
            <option value="publication">📄 Publication</option>
            <option value="award">🏆 Award</option>
            <option value="talk">🎤 Talk</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Link (optional)</label>
          <input
            type="url"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            placeholder="https://example.com"
          />
        </div>

        <button type="submit" className={styles.submitBtn}>Add News Item</button>
      </form>

      {generatedCode && (
        <div className={styles.codeBlock}>
          <h3>Generated Code</h3>
          <p>Copy this and add to the <code>news</code> array in <code>data/news.ts</code>:</p>
          <pre>{generatedCode}</pre>
          <button onClick={() => navigator.clipboard.writeText(generatedCode)} className={styles.copyBtn}>
            📋 Copy Code
          </button>
        </div>
      )}
    </div>
  );
}

function PublicationForm({ setMessage }: { setMessage: (msg: string) => void }) {
  const [bibtex, setBibtex] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'publication', data: bibtex }),
      });

      if (response.ok) {
        setMessage('✅ Publication added successfully! Refresh the page to see it.');
        setBibtex('');
      } else {
        throw new Error('Failed to add publication');
      }
    } catch (error) {
      setGeneratedCode(bibtex);
      setMessage('⚠️ Auto-save not available. Copy the BibTeX below and paste into BIBTEX_CONTENT in data/publications.ts');
    }
  };

  return (
    <div className={styles.form}>
      <h2>Add Publication</h2>
      <p className={styles.helpText}>
        Paste your BibTeX entry from Google Scholar, arXiv, or any academic database.
        Don't forget to add custom fields: <code>image</code>, <code>tags</code>, <code>pdflink</code>, <code>highlight</code>
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>BibTeX Entry</label>
          <textarea
            value={bibtex}
            onChange={(e) => setBibtex(e.target.value)}
            rows={15}
            placeholder={`@inproceedings{yourname2024paper,
  author = {Your Name and Collaborators},
  title = {Your Paper Title},
  booktitle = {CHI},
  year = {2024},
  image = {/images/pub-chi2024.jpg},
  pdflink = {/papers/chi2024.pdf},
  tags = {HCI, AI, Machine Learning},
  highlight = {Your Name}
}`}
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>Add Publication</button>
      </form>

      {generatedCode && (
        <div className={styles.codeBlock}>
          <h3>Generated BibTeX</h3>
          <p>Copy this and paste into <code>BIBTEX_CONTENT</code> in <code>data/publications.ts</code>:</p>
          <pre>{generatedCode}</pre>
          <button onClick={() => navigator.clipboard.writeText(generatedCode)} className={styles.copyBtn}>
            📋 Copy BibTeX
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectForm({ setMessage }: { setMessage: (msg: string) => void }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: '/images/placeholder-project.svg',
    tags: '',
    advisors: '',
    description: '',
    status: '',
  });
  const [generatedCode, setGeneratedCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const project = {
      ...formData,
      id: formData.title.toLowerCase().replace(/\s+/g, '-').substring(0, 30),
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
    };

    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'project', data: project }),
      });

      if (response.ok) {
        setMessage('✅ Project added successfully! Refresh the page to see it.');
        setFormData({ title: '', subtitle: '', image: '/images/placeholder-project.svg', tags: '', advisors: '', description: '', status: '' });
      } else {
        throw new Error('Failed to add project');
      }
    } catch (error) {
      const code = `{
  id: "${project.id}",
  title: "${project.title}",
  subtitle: "${project.subtitle}",
  image: "${project.image}",
  tags: [${project.tags.map(t => `"${t}"`).join(', ')}],
  advisors: "${project.advisors}",
  description: "${project.description}",${project.status ? `\n  status: "${project.status}",` : ''}
}`;
      setGeneratedCode(code);
      setMessage('⚠️ Auto-save not available. Copy the code below and paste into data/projects.ts');
    }
  };

  return (
    <div className={styles.form}>
      <h2>Add Research Project</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Your Research Project Title"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Subtitle (Skills)</label>
          <input
            type="text"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            placeholder="Skills: #HCI #AI #Machine Learning"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="HCI, AI, Machine Learning"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Advisors</label>
          <input
            type="text"
            value={formData.advisors}
            onChange={(e) => setFormData({ ...formData, advisors: e.target.value })}
            placeholder="Advised by Prof. Name"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Description *</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            placeholder="Brief description of your project..."
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status (optional)</label>
          <input
            type="text"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            placeholder="In submission to CHI 2025"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Image Path</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            placeholder="/images/project-my-research.jpg"
          />
          <small>Upload image to public/images/ first</small>
        </div>

        <button type="submit" className={styles.submitBtn}>Add Project</button>
      </form>

      {generatedCode && (
        <div className={styles.codeBlock}>
          <h3>Generated Code</h3>
          <p>Copy this and add to the <code>projects</code> array in <code>data/projects.ts</code>:</p>
          <pre>{generatedCode}</pre>
          <button onClick={() => navigator.clipboard.writeText(generatedCode)} className={styles.copyBtn}>
            📋 Copy Code
          </button>
        </div>
      )}
    </div>
  );
}

function ProfileForm({ setMessage }: { setMessage: (msg: string) => void }) {
  const [formData, setFormData] = useState({
    name: 'Howard Han',
    title: 'Research Associate',
    institution: 'Carnegie Mellon University',
    seeking: 'I am looking for Ph.D. positions in HCI starting Fall 2024.',
  });
  const [generatedCode, setGeneratedCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'profile', data: formData }),
      });

      if (response.ok) {
        setMessage('✅ Profile updated successfully! Refresh the page to see changes.');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      const code = `name: "${formData.name}",
title: "${formData.title}",
institution: "${formData.institution}",
seeking: "${formData.seeking}",`;
      setGeneratedCode(code);
      setMessage('⚠️ Auto-save not available. Update these values in data/personalInfo.ts');
    }
  };

  return (
    <div className={styles.form}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Institution</label>
          <input
            type="text"
            value={formData.institution}
            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Seeking Statement</label>
          <textarea
            value={formData.seeking}
            onChange={(e) => setFormData({ ...formData, seeking: e.target.value })}
            rows={3}
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>Update Profile</button>
      </form>

      {generatedCode && (
        <div className={styles.codeBlock}>
          <h3>Generated Code</h3>
          <p>Update these values in <code>data/personalInfo.ts</code>:</p>
          <pre>{generatedCode}</pre>
          <button onClick={() => navigator.clipboard.writeText(generatedCode)} className={styles.copyBtn}>
            📋 Copy Code
          </button>
        </div>
      )}

      <div className={styles.note}>
        <strong>Note:</strong> For full bio editing, please edit <code>data/personalInfo.ts</code> directly.
        This form only updates basic fields.
      </div>
    </div>
  );
}

