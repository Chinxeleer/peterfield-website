import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ValuePropositions from '@/components/ValuePropositions';
import ProductsShowcase from '@/components/ProductsShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import PartnerLogos from '@/components/PartnerLogos';
import Leadership from '@/components/Leadership';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <ValuePropositions />
      <ProductsShowcase />
      <WhyChooseUs />
      <PartnerLogos />
      <Services />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
