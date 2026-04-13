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
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Nossa Liderança</h2>
          <p className="mt-4 text-lg text-muted-foreground">Conheça os pastores que servem nossa comunidade com amor e integridade.</p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-6 h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-xl grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold">{leader.name}</h3>
              <p className="mb-4 font-medium text-primary uppercase tracking-wider text-sm">{leader.role}</p>
              <p className="mb-6 text-muted-foreground leading-relaxed px-4">
                {leader.bio}
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
