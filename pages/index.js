import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amaan Poonawala</title>
        <meta name="description" content="A modern portfolio website" />
      </Head>
      <Header />
      <main className="mt-16"> 
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
