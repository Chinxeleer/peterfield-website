import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Phidias Kodze",
    title: "Managing Director",
    bio: "With qualifications in accounting and business management, Robert founded Peter Field Technologies in 2014 to bridge the gap between global IT brands and Zimbabwean enterprise.",
  },
  {
    name: "Oliver Mtengwa",
    title: "Operations Director",
    bio: "Holding an IT Diploma with 4+ years of banking and technology experience, Godwin ensures seamless delivery and technical excellence across all operations.",
  },
  {
    name: "Godwin Bhinzi",
    title: "Operations Director",
    bio: "Holding an IT Diploma with 4+ years of banking and technology experience, Godwin ensures seamless delivery and technical excellence across all operations.",
  },
  {
    name: "Nyasha Jappie",
    title: "Marketing Executive",
    bio: "Equipped with a Data Communication & Networking Diploma, Nyasha drives client relationships and ensures our solutions reach the businesses that need them most.",
  },
];

export default function Leadership() {
  const ref = useScrollAnimation<HTMLDivElement>({
    childSelector: ".team-card",
    stagger: 0.15,
  });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Leadership You Can Trust
          </h2>
          <p className="text-muted-foreground text-lg">
            Founded in 2014, Peter Field Technologies is dedicated to bringing
            enterprise-grade IT solutions to Zimbabwe.
          </p>
        </div>

        <div className="inline-flex items-center justify-center w-full mb-12">
          <span className="bg-accent/10 text-accent font-semibold text-sm px-4 py-1.5 rounded-full">
            Established 2014 · Harare, Zimbabwe
          </span>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card bg-card rounded-xl overflow-hidden border border-border card-hover text-center"
            >
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
