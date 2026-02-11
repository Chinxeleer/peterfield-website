import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  { name: 'TelOne', initials: 'TO' },
  { name: 'National AIDS Council', initials: 'NAC' },
  { name: 'ZETDC', initials: 'ZE' },
  { name: 'PowerTel', initials: 'PT' },
];

export default function ClientLogos() {
  const ref = useScrollAnimation<HTMLElement>({ childSelector: '.client-item' });

  return (
    <section ref={ref} className="bg-card border-y border-border section-padding py-12 md:py-16">
      <div className="section-container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by Leading Organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="client-item logo-grayscale flex items-center gap-3 select-none"
              title={client.name}
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-heading font-bold text-lg text-muted-foreground">{client.initials}</span>
              </div>
              <span className="font-heading font-semibold text-foreground/60 text-sm md:text-base">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
