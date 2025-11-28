import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServiceSection from "@/components/Service";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <div className="pt-12">
        <ServiceSection />
      </div>
      <Footer />
    </>
  );
}
