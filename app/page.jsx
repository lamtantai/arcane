'use client';

import { ReactLenis, useLenis } from 'lenis/react';

import HeroSection from './components/hero';
import CharacterList from './components/character-list';
import Poster from './components/poster';
import Footer from './components/footer';
import FilmInfo from './components/film-info';

function Layout({ children }) {
  const lenis = useLenis(({ scroll }) => {});

  return <ReactLenis root>{children}</ReactLenis>;
}

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <div className='px-4 lg:px-10'>
          <FilmInfo />
          <Poster />
          <CharacterList />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
