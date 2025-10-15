import { Navbar } from './components/Navbar';
import {
  HeroSection,
  SkillsSection,
  Footer,
} from './components/sections';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}

export default App;