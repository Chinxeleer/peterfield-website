import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTASection() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="section-container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Upgrade Your IT Infrastructure?
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
          Get a tailored solution for your business. Our team is ready to help you find the right equipment and support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            variant="accent"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Quote
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <a href="tel:+263773818428">
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              +263 773 818 428
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
