import React from 'react';
import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "Encontrei na AD Vila Esperança não apenas uma igreja, mas uma família que me acolheu nos momentos mais difíceis.",
    author: "Maria Silva",
    role: "Membro há 5 anos"
  },
  {
    text: "A Escola Bíblica Dominical transformou meu entendimento das Escrituras e fortaleceu minha caminhada com Cristo.",
    author: "João Pereira",
    role: "Líder de Pequeno Grupo"
  },
  {
    text: "Ver meus filhos crescendo no Ministério Infantil, aprendendo valores cristãos, é a maior alegria da nossa família.",
    author: "Ana Santos",
    role: "Mãe e Voluntária"
  },
  {
    text: "O acolhimento que recebi aqui foi algo que nunca experimentei antes. Sinto que finalmente encontrei meu lugar.",
    author: "Carlos Oliveira",
    role: "Membro Novo"
  },
  {
    text: "Os cultos de oração são momentos de renovo espiritual profundo. Minha vida de oração mudou completamente.",
    author: "Beatriz Lima",
    role: "Intercessora"
  }
];

export default function Testimonials() {
  const plugin = React.useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-32 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Testemunhos</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl font-heading">Vidas Transformadas</h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            O que nossa comunidade diz sobre sua experiência com Deus e a comunhão em nossa igreja.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full border-none shadow-xl bg-card rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500">
                      <CardContent className="p-10 flex flex-col h-full relative">
                        <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                        
                        <div className="flex-grow">
                          <p className="text-lg italic leading-relaxed text-foreground/80 mb-8 relative z-10">
                            "{t.text}"
                          </p>
                        </div>
                        
                        <div className="mt-auto pt-6 border-t border-primary/5">
                          <p className="font-bold text-xl text-primary">{t.author}</p>
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
            </div>
          </Carousel>
          
          {/* Mobile Navigation Hint */}
          <div className="mt-10 flex justify-center gap-2 md:hidden">
            <div className="h-1.5 w-8 rounded-full bg-primary" />
            <div className="h-1.5 w-2 rounded-full bg-primary/20" />
            <div className="h-1.5 w-2 rounded-full bg-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
