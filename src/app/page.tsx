import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
