import { Hero } from "./hero";
import { InnovationIASection } from "./InnovationIASection";
import { Footer } from "../Footer/footer";
import { ContactFormSection } from "./ContactFormSection";
import { InfoCTA } from "./InfoCTA";

export default function Innovation() {
  return (
    <div>
      <Hero />
      <InnovationIASection />
      <InfoCTA />
      <ContactFormSection />
      <Footer />
    </div>
  );
}