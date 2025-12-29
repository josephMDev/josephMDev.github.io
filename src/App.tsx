import { Navbar } from './components/Navbar';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ContactSection,
  Footer,
} from './components/sections';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;