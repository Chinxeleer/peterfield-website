import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const partners = [
  'Emerson', 'APC', 'Eaton', 'EXFO', 'Lenovo', 'Huawei', 'HP', 'Cisco',
];

export default function PartnerLogos() {
  const ref = useScrollAnimation<HTMLDivElement>({ childSelector: '.partner-item', stagger: 0.08 });

  return (
    <section id="partners" className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">Authorized Partners</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Backed by Industry Leaders
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner}
              className="partner-item bg-card border border-border rounded-xl p-6 md:p-8 flex items-center justify-center hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-default"
            >
              <span className="font-heading font-bold text-xl md:text-2xl text-foreground/60 hover:text-primary transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
