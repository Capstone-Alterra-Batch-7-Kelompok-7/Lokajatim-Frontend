import Navbar from "../components/landingPage/Navbar";
import HeroSection from "../components/landingPage/HeroSection";
import About from "../components/landingPage/About"
import Features from "../components/landingPage/Features";
import Testimonials from "../components/landingPage/Testimonials";
import FAQ from "../components/landingPage/FAQ";
import Footer from "../components/landingPage/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
