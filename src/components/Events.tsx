import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import CalendarModal from './CalendarModal';

const events = [
  {
    title: 'Conferência de Fé',
    date: '25 de Abril, 2026',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    category: 'Conferência',
  },
  {
    title: 'Noite de Adoração',
    date: '10 de Maio, 2026',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
    category: 'Música',
  },
  {
    title: 'Acampamento de Inverno',
    date: '15-18 de Junho, 2026',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop',
    category: 'Retiro',
  },
];

export default function Events() {
  return (
    <section id="eventos" className="bg-secondary/5 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Agenda</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl font-heading">Próximos Eventos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Fique por dentro de tudo o que acontece em nossa igreja. Marque na sua agenda e não perca nenhum momento especial!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <motion.div 
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[2.5rem] bg-background shadow-xl transition-all hover:shadow-2xl border border-primary/5"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute left-6 top-6 bg-primary/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest border-none">
                  {event.category}
                </Badge>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-2 mb-3 text-primary font-bold text-sm">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <h3 className="mb-8 text-2xl font-bold font-heading leading-tight">{event.title}</h3>
                <Button variant="outline" className="w-full rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground h-12 font-bold transition-all group-hover:border-primary">
                  Mais Informações
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <CalendarModal 
            trigger={
              <Button size="lg" variant="ghost" className="text-lg font-bold group hover:bg-primary/5 rounded-full px-8 h-16">
                Ver Calendário Completo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
