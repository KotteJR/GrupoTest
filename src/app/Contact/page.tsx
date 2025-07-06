import { Hero } from "./hero";
import { Info } from "./Info";
import { ContactSection } from "./ContactInfo";
import { Footer } from "../Footer/footer";
import { SupportProcess } from "./SupportProcess";
import { SLAMaintenance } from "./SLAMaintenance";

export default function Contact() {
  return (
    <div>
      <Hero />
      <Info />
      <ContactSection />
      <SupportProcess />
      <SLAMaintenance />
      <Footer />
    </div>
  );
}