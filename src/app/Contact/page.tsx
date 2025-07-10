import { InnovationForm } from "./ContactForm";
import { TeamSection } from "../Landingpage/TeamSection";
import { LocationMap } from "./LocationMap";
import { Footer } from "../Footer/footer";

export default function Contact() {
  return (
    <div>
      <InnovationForm />
      <TeamSection />
      <LocationMap />
      <Footer />
    </div>
  );
}