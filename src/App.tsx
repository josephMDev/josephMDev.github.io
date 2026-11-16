import { Navbar } from './components/Navbar';
import { useMotifFade } from './hooks/useMotifFade';
import { LossLandscape } from './components/ui/LossLandscape';
import { CoreDiagram, EdgeDiagram } from './components/ui/DiagramBackdrop';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  Footer,
} from './components/sections';

// Each margin diagram is centred in the space between the content column and the window edge.
// It never shrinks below a minimum size; instead it fades with the window width (see useMotifFade).
// Light mode needs more opacity to read as clearly as dark.
const marginBox = 'absolute flex w-[max(0px,calc((100vw_-_56rem)_/_2))] justify-center';
const marginDiagram =
  'h-full shrink-0 opacity-[calc(var(--motif-fade,0)*0.3)] dark:opacity-[calc(var(--motif-fade,0)*0.12)]';

function App() {
  useMotifFade();

  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-x-clip">
      <LossLandscape className="landscape-clearings pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-90 dark:opacity-35" />
      <Navbar />
      <div className="relative isolate flex-1">
        {/* Margin diagrams, kept between the nav and footer */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="relative mx-auto h-full max-w-4xl">
            <div className={`${marginBox} bottom-12 right-full top-0`}>
              <EdgeDiagram className={`${marginDiagram} w-[max(15rem,min(26rem,90%))]`} />
            </div>
            <div className={`${marginBox} -bottom-14 left-full top-24`}>
              <CoreDiagram className={`${marginDiagram} w-[max(12.5rem,min(20rem,80%))]`} />
            </div>
          </div>
        </div>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;