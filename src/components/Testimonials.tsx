import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Membro há 5 anos',
    text: 'Encontrei na Vila Esperança não apenas uma igreja, mas uma família que me acolheu nos momentos mais difíceis.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'João Santos',
    role: 'Líder de Pequeno Grupo',
    text: 'Crescer espiritualmente aqui tem sido uma jornada incrível. O ensino bíblico é profundo e prático.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Ana Oliveira',
    role: 'Voluntária no Infantil',
    text: 'Servir as crianças é uma alegria. Ver o brilho nos olhos delas ao aprenderem sobre Jesus não tem preço.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Vidas Transformadas</h2>
          <p className="mt-4 text-lg text-muted-foreground">O que nossa comunidade diz sobre sua experiência na Vila Esperança.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-secondary/20 p-8"
            >
              <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/10" />
              <p className="relative z-10 mb-8 text-lg italic leading-relaxed text-foreground/80">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="h-12 w-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
