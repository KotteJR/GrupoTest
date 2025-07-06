import { Hero } from "./hero";
import { InnovationIASection } from "./InnovationIASection";
import { Footer } from "../Footer/footer";
import { ContactFormSection } from "./ContactFormSection";

export default function Innovation() {
  return (
    <div>
      <Hero />
      <InnovationIASection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}