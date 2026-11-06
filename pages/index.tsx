import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Community from '../components/Community';
import { siteConfig } from '../data/siteConfig';

export default function Home() {
  return (
    <>
      <Head>
        <title>Howard Han</title>
        <meta name="description" content="Howard Han's personal academic website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <Header />
        <Hero />

        {siteConfig.showProjects && <Projects />}
        {siteConfig.showPublications && <Publications />}
        {siteConfig.showCommunity && <Community />}
      </main>
    </>
  );
}

