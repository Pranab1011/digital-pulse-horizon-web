
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "JK International - Digital Transformation Specialists";
  }, []);

  return (
    <div className="min-h-screen bg-jk-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
