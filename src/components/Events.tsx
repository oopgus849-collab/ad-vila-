import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    <section id="eventos" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Próximos Eventos</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Fique por dentro de tudo o que acontece em nossa igreja. Marque na sua agenda!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="group overflow-hidden rounded-3xl bg-background shadow-md transition-all hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <Badge className="absolute left-4 top-4 bg-primary px-3 py-1 text-sm">
                  {event.category}
                </Badge>
              </div>
              <div className="p-8">
                <p className="mb-2 text-sm font-semibold text-primary">{event.date}</p>
                <h3 className="mb-6 text-2xl font-bold">{event.title}</h3>
                <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                  Mais Informações
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CalendarModal 
            trigger={
              <Button size="lg" variant="ghost" className="text-lg font-semibold">
                Ver Calendário Completo →
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
