import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/Admin.module.css';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'info' | 'publications' | 'projects' | 'news' | 'settings'>('info');

  return (
    <>
      <Head>
        <title>Admin Panel - Edit Content</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Header />
      
      <main className={styles.adminContainer}>
        <div className={styles.header}>
          <h1>Content Management</h1>
          <p className={styles.subtitle}>Edit your website content all in one place</p>
          <div className={styles.quickLinks}>
            <a href="/admin-edit" className={styles.quickLink}>
              ✏️ Interactive Editor (Add Content)
            </a>
            <a href="/admin" className={styles.quickLinkActive}>
              📖 Documentation & Guide
            </a>
          </div>
        </div>

        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'info' ? styles.active : ''}`}
            onClick={() => setActiveTab('info')}
          >
            📝 Personal Info
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'publications' ? styles.active : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            📄 Publications
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'projects' ? styles.active : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            🔬 Projects
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'news' ? styles.active : ''}`}
            onClick={() => setActiveTab('news')}
          >
            📰 News
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'settings' ? styles.active : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Settings
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'info' && <PersonalInfoTab />}
          {activeTab === 'publications' && <PublicationsTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'news' && <NewsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </main>
    </>
  );
}

function PersonalInfoTab() {
  return (
    <div className={styles.tabContent}>
      <h2>Personal Information</h2>
      <div className={styles.section}>
        <h3>Profile Photo</h3>
        <div className={styles.fileInfo}>
          <code>public/images/profile.jpg</code>
          <p>Recommended size: 400x400px (square)</p>
          <ol>
            <li>Prepare your photo (400x400px recommended)</li>
            <li>Name it <code>profile.jpg</code></li>
            <li>Place in <code>public/images/</code> folder</li>
            <li>Update path in <code>data/personalInfo.ts</code> if using different name</li>
          </ol>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Basic Information</h3>
        <p>Edit in: <code>data/personalInfo.ts</code></p>
        <ul>
          <li>Name, title, institution</li>
          <li>Bio and research interests</li>
          <li>Collaborators</li>
          <li>Contact links (email, Google Scholar, CV, LinkedIn)</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>CV/Resume</h3>
        <div className={styles.fileInfo}>
          <code>public/cv.pdf</code>
          <p>Place your CV as <code>cv.pdf</code> in the <code>public/</code> folder</p>
        </div>
      </div>
    </div>
  );
}

function PublicationsTab() {
  return (
    <div className={styles.tabContent}>
      <h2>Publications</h2>
      
      <div className={styles.section}>
        <h3>📝 Add New Publication (Recommended: BibTeX)</h3>
        <p>Edit: <code>data/publications.ts</code></p>
        <div className={styles.steps}>
          <h4>Steps:</h4>
          <ol>
            <li>Get BibTeX from Google Scholar, arXiv, or conference site</li>
            <li>Open <code>data/publications.ts</code></li>
            <li>Paste your BibTeX entry into the <code>BIBTEX_CONTENT</code> string</li>
            <li>Add custom fields:
              <ul>
                <li><code>image</code>: Path to image (e.g., <code>/images/pub-chi2024.jpg</code>)</li>
                <li><code>tags</code>: Skills (e.g., <code>HCI, Machine Learning</code>)</li>
                <li><code>pdflink</code>: Path to PDF (e.g., <code>/papers/paper.pdf</code>)</li>
                <li><code>highlight</code>: Your name to bold</li>
              </ul>
            </li>
            <li>Save and refresh!</li>
          </ol>
        </div>

        <div className={styles.example}>
          <h4>Example:</h4>
          <pre>{`@inproceedings{smith2024paper,
  author = {Your Name and Collaborators},
  title = {Your Amazing Research},
  booktitle = {CHI},
  year = {2024},
  image = {/images/pub-chi2024.jpg},
  pdflink = {/papers/chi2024.pdf},
  tags = {HCI, AI, Machine Learning},
  highlight = {Your Name}
}`}</pre>
        </div>
      </div>

      <div className={styles.section}>
        <h3>🖼️ Publication Images</h3>
        <p>Place in: <code>public/images/</code></p>
        <ul>
          <li>Recommended aspect ratio: 4:3 (e.g., 640x480, 240x180)</li>
          <li>Format: JPG or PNG</li>
          <li>File size: &lt; 500KB</li>
          <li>Naming: <code>pub-conference-year.jpg</code> or <code>pub-short-title.jpg</code></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>📑 PDF Papers</h3>
        <p>Place in: <code>public/papers/</code></p>
        <ul>
          <li>Format: PDF only</li>
          <li>Naming: <code>conference-year-title.pdf</code></li>
          <li>Reference in BibTeX: <code>pdflink = {`{/papers/your-paper.pdf}`}</code></li>
        </ul>
      </div>
    </div>
  );
}

function ProjectsTab() {
  return (
    <div className={styles.tabContent}>
      <h2>Research Projects</h2>
      
      <div className={styles.section}>
        <h3>➕ Add New Project</h3>
        <p>Edit: <code>data/projects.ts</code></p>
        <div className={styles.steps}>
          <ol>
            <li>Open <code>data/projects.ts</code></li>
            <li>Add a new entry to the <code>projects</code> array</li>
            <li>Upload project image to <code>public/images/</code></li>
            <li>Save and refresh!</li>
          </ol>
        </div>

        <div className={styles.example}>
          <h4>Example:</h4>
          <pre>{`{
  id: "my-project",
  title: "Your Project Title",
  subtitle: "Skills: #HCI #AI",
  image: "/images/project-my-research.jpg",
  tags: ["#HCI", "#AI"],
  advisors: "Advised by Dr. Name",
  description: "Project description...",
  status: "In submission to CHI 2025", // Optional
}`}</pre>
        </div>
      </div>

      <div className={styles.section}>
        <h3>🖼️ Project Images</h3>
        <p>Place in: <code>public/images/</code></p>
        <ul>
          <li>Recommended: 240x180px aspect ratio</li>
          <li>Format: JPG or PNG</li>
          <li>Naming: <code>project-name.jpg</code></li>
        </ul>
      </div>
    </div>
  );
}

function NewsTab() {
  return (
    <div className={styles.tabContent}>
      <h2>News & Updates</h2>
      
      <div className={styles.section}>
        <h3>📰 Add News Item</h3>
        <p>Edit: <code>data/news.ts</code></p>
        <div className={styles.steps}>
          <ol>
            <li>Open <code>data/news.ts</code></li>
            <li>Add new item to the <code>news</code> array</li>
            <li>Items are automatically sorted by date (newest first)</li>
          </ol>
        </div>

        <div className={styles.example}>
          <h4>Example:</h4>
          <pre>{`{
  id: "news-1",
  date: "2024-03-15", // YYYY-MM-DD
  content: "Paper accepted to CHI 2024!",
  type: "publication", // award, publication, talk, general
  link: "https://link-to-paper.com" // Optional
}`}</pre>
        </div>
      </div>

      <div className={styles.section}>
        <h3>News Types</h3>
        <ul>
          <li><code>award</code> - 🏆 Awards and honors</li>
          <li><code>publication</code> - 📄 Publications</li>
          <li><code>talk</code> - 🎤 Talks and presentations</li>
          <li><code>general</code> - 📌 General updates</li>
        </ul>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className={styles.tabContent}>
      <h2>Site Settings</h2>
      
      <div className={styles.section}>
        <h3>⚙️ Section Visibility</h3>
        <p>Edit: <code>data/siteConfig.ts</code></p>
        <div className={styles.toggles}>
          <div className={styles.toggle}>
            <code>showNews: true/false</code>
            <p>Toggle news section on/off</p>
          </div>
          <div className={styles.toggle}>
            <code>showProjects: true/false</code>
            <p>Toggle projects section on/off</p>
          </div>
          <div className={styles.toggle}>
            <code>showPublications: true/false</code>
            <p>Toggle publications section on/off</p>
          </div>
          <div className={styles.toggle}>
            <code>darkModeEnabled: true/false</code>
            <p>Enable/disable dark mode toggle</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>🎨 Customization</h3>
        <p>Colors can be changed in: <code>styles/globals.css</code></p>
        <ul>
          <li>Light mode: Edit <code>:root</code> variables</li>
          <li>Dark mode: Edit <code>[data-theme="dark"]</code> variables</li>
          <li>Primary orange: <code>--link-color</code></li>
          <li>Header blue: <code>--header-accent</code></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>📁 File Structure</h3>
        <ul>
          <li><code>data/</code> - All your content (edit these!)</li>
          <li><code>public/images/</code> - All images</li>
          <li><code>public/papers/</code> - PDF papers</li>
          <li><code>components/</code> - React components</li>
          <li><code>styles/</code> - CSS styling</li>
        </ul>
      </div>
    </div>
  );
}

