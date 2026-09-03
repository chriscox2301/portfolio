import Masthead from "@/components/Masthead/Masthead";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import Stack from "@/components/Stack/Stack";
import About from "@/components/About/About";
import Path from "@/components/Path/Path";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="shell">
      <Masthead />
      <main id="main">
        <Hero />
        <Work />
        <Stack />
        <About />
        <Path />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
