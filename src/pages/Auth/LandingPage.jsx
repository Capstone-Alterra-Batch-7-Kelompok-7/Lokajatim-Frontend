import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import About from "../../components/About"
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

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
