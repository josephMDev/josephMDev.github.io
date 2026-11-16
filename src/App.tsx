import { Navbar } from './components/Navbar';
import { DiagramBackdrop } from './components/ui/DiagramBackdrop';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  Footer,
} from './components/sections';

function App() {
  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-x-clip">
      <DiagramBackdrop className="pointer-events-none absolute -bottom-10 -right-40 -z-10 hidden w-[52rem] opacity-50 xl:block" />
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