import { Navbar } from './components/Navbar';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  Footer,
} from './components/sections';

function App() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;