import { HeroSection } from './Hero';
import { SuccessCases } from './SuccessCases';
import { SectorSection } from './SectorSection';
import { InnovationForm } from './InnovationForm';
import { DemoCTA } from './DemoCTA';
import { TeamSection } from './TeamSection';
import { Stats } from './Stats';
import { Footer } from '../Footer/footer';

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <SuccessCases />
      <Stats />

      <SectorSection />
      <InnovationForm />
      <DemoCTA />
      <TeamSection />
      <Footer />
    </div>
  );
}