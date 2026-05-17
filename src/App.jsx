
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import './index.css';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '4rem 0 2rem', color: 'var(--text-secondary)', fontSize: '0.875rem', position: 'relative', zIndex: 10 }}>
        <p>© {new Date().getFullYear()} Sejal Chaware. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
