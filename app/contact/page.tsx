import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative bg-ink">
        <div data-theme="dark" className="relative">
          <ContactSection />
        </div>
        <div data-theme="light" className="relative">
          <Footer />
        </div>
      </main>

      <BottomNav />
    </>
  );
}
