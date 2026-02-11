import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ShieldCheck, Wrench, LifeBuoy, Globe } from 'lucide-react';

const points = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products Only',
    description: 'We hold authorized dealership agreements with every brand we carry. No grey-market imports — just authentic, warrantied equipment.',
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    description: 'Our certified technicians handle professional deployment for UPS systems, network infrastructure, servers, and solar installations.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    description: 'From initial consultation through maintenance and technical backup, we provide continuous support to keep your systems running.',
  },
  {
    icon: Globe,
    title: 'Business Without Boundaries',
    description: 'Our motto in action — enabling Zimbabwean enterprises to compete globally with world-class IT infrastructure.',
  },
];

export default function WhyChooseUs() {
  const ref = useScrollAnimation<HTMLDivElement>({ childSelector: '.why-item', stagger: 0.15 });

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Built on Trust. Driven by Expertise.
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {points.map((point) => (
            <div key={point.title} className="why-item flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-brand-purple-light flex-shrink-0 flex items-center justify-center">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
