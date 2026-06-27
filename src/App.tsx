import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Awards } from './components/Awards';
import { News } from './components/News';
import { Footer } from './components/Footer';

function App() {
  return (
    <CursorProvider>
      {/* Custom spring follower cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Agency Sections */}
      <main style={{ width: '100%' }}>
        <Hero />
        <Projects />
        <About />
        <Awards />
        <News />
        <Footer />
      </main>
    </CursorProvider>
  );
}

export default App;
