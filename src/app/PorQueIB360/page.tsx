import { Hero } from "./hero";
import { Footer } from "../Footer/footer";
import { FeaturesSection } from "./features";
import { Info } from "./Info";
import { TimelineSection } from "./Timeline";
import { StatsSection } from "./stats";
import { InfoCTA } from "./InfoCTA";

export default function PorQueIB360() {
  return (
    <div>
      <Hero />
      <Info />
      <FeaturesSection />
      <TimelineSection />
      <StatsSection />
      <InfoCTA />
      <Footer />
    </div>
  );
}