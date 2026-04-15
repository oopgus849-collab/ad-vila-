import { Clock, ArrowRight, Play, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const services = [
  {
    day: 'Quarta-feira',
    time: '19:00',
    title: 'Culto de Libertação',
    description: 'Uma noite de clamor, libertação e renovo espiritual através da Palavra.',
    image: 'https://images.unsplash.com/photo-1445445290250-18a39836c5c9?q=80&w=1974&auto=format&fit=crop',
  },
  {
    day: 'Sexta-feira',
    time: '19:00',
    title: 'EBD (Escola Bíblica)',
    description: 'Aprofundando o conhecimento das Escrituras Sagradas em comunidade.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop',
  },
  {
    day: 'Sábado',
    time: '09:00',
    title: 'Consagração & Almoço',
    description: 'Manhã de busca e consagração, seguida pela venda de nosso almoço beneficente.',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop',
  },
  {
    day: 'Domingo',
    time: '09:00',
    title: 'Santa Ceia',
    description: 'Momento solene de comunhão e memória do sacrifício de Cristo.',
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop',
  },
  {
    day: 'Domingo',
    time: '18:00',
    title: 'Culto de Adoração',
    description: 'Celebração ao Senhor com louvores e uma mensagem de esperança para sua semana.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function ServiceTimes() {
  return (
    <section id="cultos" className="bg-secondary/5 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Horários de Adoração
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 mb-6 text-4xl font-bold tracking-tight md:text-6xl font-heading"
          >
            Venha Adorar Conosco
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            Nossas portas estão abertas para você. Experimente a presença de Deus em um de nossos cultos semanais.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={`${service.day}-${service.title}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full overflow-hidden border-none bg-card shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-[2.5rem]">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg">
                      {service.day}
                    </span>
                  </div>
                </div>
                <CardContent className="p-10">
                  <div className="mb-4 flex items-center gap-3 text-primary">
                    <div className="bg-primary/10 p-2 rounded-xl">
                      <Clock className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-heading font-bold">{service.time}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold font-heading">{service.title}</h3>
                  <p className="mb-8 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="group/btn p-0 font-bold text-primary hover:bg-transparent h-auto text-base">
                    Saiba mais <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[3rem] bg-secondary text-white shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="flex flex-col md:flex-row relative z-10">
            <div className="flex-1 p-10 md:p-20">
              <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                <Play className="h-4 w-4 text-primary fill-primary" />
                <span>Ao Vivo aos Domingos</span>
              </div>
              <h3 className="mb-6 text-4xl font-bold md:text-5xl font-heading">Não pode vir pessoalmente?</h3>
              <p className="mb-10 text-xl text-white/80 leading-relaxed max-w-xl">
                Transmitimos nossos cultos de domingo ao vivo para que você possa adorar de onde estiver. Junte-se à nossa comunidade online!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">
                  <Youtube className="mr-2 h-6 w-6" /> Assistir no YouTube
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/30 px-10 h-14 text-lg text-white hover:bg-white/10 backdrop-blur-sm">
                  Cultos Anteriores
                </Button>
              </div>
            </div>
            <div className="relative hidden w-2/5 md:block">
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop" 
                alt="Live Stream"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
