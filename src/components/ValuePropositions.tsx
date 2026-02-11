import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Users, Headphones } from 'lucide-react';

const cards = [
  {
    icon: Award,
    title: 'Authorized Dealer Network',
    description: 'Official partnerships with global technology brands including Cisco, HP, Lenovo, and Huawei. Every product is genuine and fully warrantied.',
  },
  {
    icon: Users,
    title: 'Technical Expertise',
    description: 'Certified team with over 10 years of combined experience in enterprise IT deployment, network design, and infrastructure planning.',
  },
  {
    icon: Headphones,
    title: 'Comprehensive Support',
    description: 'End-to-end services from installation and configuration to ongoing maintenance and technical backup. We stand behind every solution.',
  },
];

export default function ValuePropositions() {
  const ref = useScrollAnimation<HTMLDivElement>({ childSelector: '.value-card', stagger: 0.15 });

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Businesses Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade IT solutions backed by authorized partnerships and professional expertise.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="value-card bg-card rounded-xl p-8 border border-border card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-purple-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
