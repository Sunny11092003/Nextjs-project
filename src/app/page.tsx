import Header from "../../components/Header";
import Hero from "../../components/hero";
import FeatureSectionsAlt from "../../components/Features";
import BackgroundVideo from "../../components/BackgroundVideo";
import AboutSection from "../../components/AboutSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <BackgroundVideo />

      <Header />
      <main className="relative z-10">
        <Hero />
        <FeatureSectionsAlt />
        <AboutSection/>
        <CTASection/>
        <Footer/>
      </main>
    </>
  );
}
