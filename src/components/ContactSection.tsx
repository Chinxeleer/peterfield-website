import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const ref = useScrollAnimation<HTMLElement>();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Thank you! We will be in touch shortly.');
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Let's Talk About Your IT Needs
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-light flex-shrink-0 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Our Office</h3>
                <p className="text-muted-foreground">7 Beal Road, Belvedere<br />Harare, Zimbabwe</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-light flex-shrink-0 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+26342257145" className="hover:text-primary transition-colors">+263 4 2257145</a><br />
                  <a href="tel:+263773818428" className="hover:text-primary transition-colors">+263 773 818 428</a>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-light flex-shrink-0 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:sales@peterfield.co.zw" className="hover:text-primary transition-colors">sales@peterfield.co.zw</a>
                </p>
              </div>
            </div>

            <div className="p-6 bg-brand-purple-light rounded-xl border border-primary/10">
              <h3 className="font-heading font-bold text-foreground mb-2">Business Hours</h3>
              <p className="text-muted-foreground text-sm">
                Monday – Friday: 8:00 AM – 5:00 PM<br />
                Saturday: 8:00 AM – 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                maxLength={100}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.co.zw"
                maxLength={255}
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
              <Input
                id="company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Your company name"
                maxLength={100}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your IT requirements..."
                rows={5}
                maxLength={1000}
                required
              />
            </div>
            <Button type="submit" variant="default" size="lg" className="w-full">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
