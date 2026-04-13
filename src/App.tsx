import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceTimes from '@/components/ServiceTimes';
import Ministries from '@/components/Ministries';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Leadership from '@/components/Leadership';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section id="sobre" className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 items-center md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop" 
                    alt="Nossa Igreja"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-3xl bg-primary/20" />
                <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-secondary/50" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary font-bold uppercase tracking-wider">Quem Somos</span>
                <h2 className="mt-4 mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  AD Vila Esperança: Uma comunidade unida pelo amor de Cristo
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A Assembleia de Deus em Vila Esperança (Filial de Marechal Hermes) nasceu com o propósito de ser um farol de luz em nossa comunidade. Acreditamos que a igreja não é um prédio, mas sim pessoas transformadas pela graça de Deus.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nossa missão é amar a Deus sobre todas as coisas e ao próximo como a nós mesmos, fazendo discípulos e servindo com excelência em tudo o que fazemos.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-3xl font-bold text-primary">20+</h4>
                    <p className="text-muted-foreground">Anos de História</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-primary">500+</h4>
                    <p className="text-muted-foreground">Membros Ativos</p>
                  </div>
                </div>
                <Button size="lg" className="rounded-full px-8">Nossa História</Button>
              </motion.div>
            </div>
          </div>
        </section>

        <ServiceTimes />
        <Ministries />
        <Leadership />
        <Events />
        <Testimonials />

        {/* Call to Action */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para nos visitar?</h2>
            <p className="text-xl text-white/80 mb-10">
              Estamos ansiosos para te conhecer e caminhar junto com você. Nossas portas estão sempre abertas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-10 text-lg">
                Como Chegar
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 text-lg border-white text-white hover:bg-white hover:text-primary">
                Falar com um Pastor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
