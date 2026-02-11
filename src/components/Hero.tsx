import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Animate hero content
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current!.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    });

    // Animate particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((p, i) => {
        gsap.to(p, {
          x: `random(-80, 80)`,
          y: `random(-80, 80)`,
          rotation: `random(-180, 180)`,
          duration: `random(8, 16)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5,
        });
      });
    }

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 120 + 40}px`,
              height: `${Math.random() * 120 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0
                ? 'hsl(262 58% 52%)'
                : i % 3 === 1
                ? 'hsl(25 95% 53%)'
                : 'hsl(262 58% 72%)',
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 py-32 md:py-40">
        <div ref={contentRef} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 mb-8">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground/80 font-medium">
              Trusted by 100+ businesses across Zimbabwe
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] text-primary-foreground mb-6">
            Enterprise IT Solutions That Keep Zimbabwe's Businesses{' '}
            <span className="text-accent">Running</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Trusted network equipment and IT infrastructure since 2014. Authorized dealer for the world's leading technology brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="accent"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Products
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-primary-foreground/60 text-sm">
            <div>
              <span className="block text-2xl font-heading font-bold text-primary-foreground">10+</span>
              Years Experience
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div>
              <span className="block text-2xl font-heading font-bold text-primary-foreground">8+</span>
              Global Partners
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div>
              <span className="block text-2xl font-heading font-bold text-primary-foreground">100+</span>
              Clients Served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
