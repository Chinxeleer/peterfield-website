import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import networkImg from "@/assets/products/network-equipment.jpg";
import serverImg from "@/assets/products/enterprise-servers.jpg";
import upsImg from "@/assets/products/ups-power.jpg";
import laptopImg from "@/assets/products/business-laptops.jpg";
import printerImg from "@/assets/products/enterprise-printers.jpg";
import consumablesImg from "@/assets/products/it-consumables.jpg";
import fibreImg from "@/assets/products/prods.png";
import networkCabling from "@/assets/products/cabinets.png";

const products = [
  {
    name: "Network Equipment",
    benefit:
      "Routers, switches, and structured cabling for reliable connectivity",
    image: networkImg,
  },
  {
    name: "Enterprise Servers",
    benefit: "High performance servers for mission critical workloads",
    image: serverImg,
  },
  {
    name: "UPS & Power Solutions",
    benefit: "Uninterrupted power for continuous business operations",
    image: upsImg,
  },
  {
    name: "Business Laptops",
    benefit: "Enterprise grade workstations built for productivity",
    image: laptopImg,
  },
  {
    name: "Enterprise Printers",
    benefit: "High volume printing solutions for demanding offices",
    image: printerImg,
  },
  {
    name: "IT Consumables",
    benefit: "Toner, cables, storage, and essential accessories",
    image: consumablesImg,
  },
  {
    name: "Fibre Optic Solutions",
    benefit:
      "ADSS aerial fiber optic, fiber optic patch, fibre optic dome and accessories",
    image: fibreImg,
  },
  {
    name: "Structured Cabling Solutions",
    benefit: "Network Cabinet, Patch Cords, Patch Panels and Accessories",
    image: networkCabling,
  },
];

export default function ProductsShowcase() {
  const ref = useScrollAnimation<HTMLDivElement>({
    childSelector: ".product-card",
    stagger: 0.1,
  });

  return (
    <section id="products" className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Genuine Equipment From Global Brands
          </h2>
          <p className="text-muted-foreground text-lg">
            Authorized dealer for the industry's most trusted names. Every
            product backed by manufacturer warranty.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card bg-card rounded-xl overflow-hidden border border-border card-hover group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            className="px-8"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request a Quote
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
