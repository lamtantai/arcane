'use client';
import Content from './components/content';
import HeroSection from './components/hero';
import { ReactLenis, useLenis } from 'lenis/react';

function Layout({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}

export default function Home() {
  return (
    <Layout>
      <main className='relative h-full w-full'>
        <HeroSection />
        <Content />
      </main>
    </Layout>
  );
}
