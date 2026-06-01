import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ClickSpark from './components/ClickSpark';
import ShapeGrid from './components/ShapeGrid';
import './App.css';

function App() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <ShapeGrid 
          shape="square" 
          squareSize={30} 
          borderColor="#e5e7eb" 
          hoverFillColor="#fde047" 
          speed={0.5} 
          direction="diagonal" 
          hoverTrailAmount={5} 
        />
      </div>
      <ClickSpark sparkColor='#1a1a1a' sparkSize={14} sparkRadius={20} sparkCount={8} duration={400}>
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <AboutSkills />
            <Projects />
            <Contact />
          </main>
          
          <footer style={{ borderTop: 'var(--border-thick)', padding: '2rem 0', marginTop: '4rem', textAlign: 'center', backgroundColor: 'var(--color-secondary)', color: 'var(--color-bg)' }}>
            <p className="font-pixel" style={{ fontSize: '1.2rem' }}>&copy; {new Date().getFullYear()} NIKHIL NAMBIAR. ALL RIGHTS RESERVED.</p>
          </footer>
        </div>
      </ClickSpark>
    </>
  );
}

export default App;
