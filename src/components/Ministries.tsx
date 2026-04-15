import { motion } from 'motion/react';
import { Users, Music, Heart, Baby, BookOpen, Coffee, ArrowRight } from 'lucide-react';

const ministries = [
  {
    icon: Users,
    title: 'Pequenos Grupos',
    description: 'Comunidade e discipulado em ambientes acolhedores durante a semana.',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    icon: Music,
    title: 'Louvor & Adoração',
    description: 'Expressando nosso amor a Deus através da música e das artes.',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: Baby,
    title: 'Ministério Infantil',
    description: 'Ensinando os caminhos do Senhor para as crianças de forma lúdica.',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    icon: Heart,
    title: 'Ação Social',
    description: 'Servindo nossa cidade e ajudando aqueles que mais precisam.',
    color: 'bg-red-500/10 text-red-600'
  },
  {
    icon: BookOpen,
    title: 'Escola Bíblica',
    description: 'Aprofundando o conhecimento das Escrituras para todas as idades.',
    color: 'bg-orange-500/10 text-orange-600'
  },
  {
    icon: Coffee,
    title: 'Hospitalidade',
    description: 'Recebendo a todos com alegria e amor cristão.',
    color: 'bg-purple-500/10 text-purple-600'
  },
];

export default function Ministries() {
  return (
    <section id="ministerios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Envolva-se</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl font-heading">Nossos Ministérios</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Há um lugar para você servir e crescer. Descubra como você pode usar seus talentos para abençoar vidas em nossa comunidade.
            </p>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 font-bold text-primary hover:underline">
            Ver todos os ministérios <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-primary/5 bg-card p-10 transition-all hover:shadow-2xl"
            >
              <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold font-heading">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{item.description}</p>
              
              <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition-all group-hover:gap-3">
                Saiba Mais <ArrowRight className="h-4 w-4" />
              </button>
              
              {/* Decorative background shape */}
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
