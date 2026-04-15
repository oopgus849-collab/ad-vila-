import { motion } from 'motion/react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const leaders = [
  {
    name: 'Pr. Ricardo & Pra. Eliane',
    role: 'Pastores Seniores',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop',
    bio: 'Liderando a Vila Esperança há 15 anos com paixão e dedicação ao Evangelho.',
  },
  {
    name: 'Pr. Lucas Mendes',
    role: 'Pastor de Jovens',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Dedicado a equipar a próxima geração para viver uma fé autêntica.',
  },
  {
    name: 'Pra. Sarah Lima',
    role: 'Ministério de Louvor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Conduzindo a igreja em adoração profunda e centrada em Cristo.',
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl font-heading">Nossa Liderança</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Conheça os pastores que servem nossa comunidade com amor, integridade e dedicação ao Reino.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background rounded-[2.5rem] overflow-hidden shadow-xl border border-primary/5 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                <p className="mb-4 font-bold text-primary uppercase tracking-widest text-xs">{leader.role}</p>
                <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
                  {leader.bio}
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Instagram className="h-5 w-5" /></a>
                  <a href="#" className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Twitter className="h-5 w-5" /></a>
                  <a href="#" className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Mail className="h-5 w-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
