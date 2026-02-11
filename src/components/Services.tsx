import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Package, Settings, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Supply',
    description: 'Genuine equipment sourced directly from authorized global distributors. Full manufacturer warranties on every product.',
  },
  {
    icon: Settings,
    title: 'Installation',
    description: 'Professional deployment of UPS systems, inverters, solar solutions, and complete network infrastructure.',
  },
  {
    icon: HeartHandshake,
    title: 'Support',
    description: 'Ongoing maintenance, technical backup, and expert consultation to keep your systems running at peak performance.',
  },
];

export default function Services() {
  const ref = useScrollAnimation<HTMLDivElement>({ childSelector: '.service-card', stagger: 0.15 });

  return (
    <section className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Complete IT Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From procurement to deployment to ongoing support — we handle every aspect of your IT infrastructure.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-card rounded-xl p-8 border border-border text-center card-hover group"
            >
              <div className="w-16 h-16 rounded-2xl cta-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
