import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedPrograms from "../components/FeaturedPrograms";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  // Add scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedPrograms />
        <About />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
