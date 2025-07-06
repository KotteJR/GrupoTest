import { Hero } from "./hero";
import { Footer } from "../Footer/footer";
import { Info } from "./Info";
import { ProjectsSection } from "./Projects";
import { InfoCTA } from "./InfoCTA";
import { ContactFormSection } from "./ContactFormSection";

export default function Projects() {
  return (
    <div>
      <Hero />
      <Info />
      <ProjectsSection />
      <InfoCTA />
      <ContactFormSection />
      <Footer />
    </div>
  );
}