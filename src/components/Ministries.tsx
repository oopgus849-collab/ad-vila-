import { Users, Music, Heart, Baby, BookOpen, Coffee } from 'lucide-react';

const ministries = [
  {
    icon: Users,
    title: 'Pequenos Grupos',
    description: 'Comunidade e discipulado em ambientes acolhedores durante a semana.',
  },
  {
    icon: Music,
    title: 'Louvor & Adoração',
    description: 'Expressando nosso amor a Deus através da música e das artes.',
  },
  {
    icon: Baby,
    title: 'Ministério Infantil',
    description: 'Ensinando os caminhos do Senhor para as crianças de forma lúdica.',
  },
  {
    icon: Heart,
    title: 'Ação Social',
    description: 'Servindo nossa cidade e ajudando aqueles que mais precisam.',
  },
  {
    icon: BookOpen,
    title: 'Escola Bíblica',
    description: 'Aprofundando o conhecimento das Escrituras para todas as idades.',
  },
  {
    icon: Coffee,
    title: 'Hospitalidade',
    description: 'Recebendo a todos com alegria e amor cristão.',
  },
];

export default function Ministries() {
  return (
    <section id="ministerios" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Nossos Ministérios</h2>
            <p className="text-lg text-muted-foreground">
              Há um lugar para você servir e crescer. Descubra como você pode se envolver em nossa comunidade.
            </p>
          </div>
          <a href="#" className="font-semibold text-primary hover:underline">Ver todos os ministérios →</a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-3xl border bg-background p-8 transition-all hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
              <div className="mt-6">
                <button className="text-sm font-bold uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
