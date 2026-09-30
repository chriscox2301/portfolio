import { notFound } from "next/navigation";
import Masthead from "@/components/Masthead/Masthead";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import Stack from "@/components/Stack/Stack";
import About from "@/components/About/About";
import Path from "@/components/Path/Path";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getDictionary, hasLocale } from "@/content/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div className="shell">
      <Masthead lang={lang} nav={dict.nav} />
      <main id="main">
        <Hero copy={dict.hero} />
        <Work copy={dict.work} projects={dict.projects} />
        <Stack copy={dict.stack} skillGroups={dict.skillGroups} />
        <About copy={dict.about} />
        <Path copy={dict.path} timeline={dict.timeline} />
        <Contact copy={dict.contact} />
      </main>
      <Footer text={dict.footer} />
    </div>
  );
}
