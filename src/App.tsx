import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceTimes from '@/components/ServiceTimes';
import Ministries from '@/components/Ministries';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Leadership from '@/components/Leadership';
import PrayerRequest from '@/components/PrayerRequest';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground scroll-smooth">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section id="sobre" className="py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid gap-20 items-center md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative z-10 overflow-hidden rounded-[4rem] shadow-2xl border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop" 
                    alt="Nossa Igreja"
                    className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-10 -right-10 -z-10 h-80 w-80 rounded-[3rem] bg-primary/10 blur-2xl" 
                />
                <motion.div 
                  animate={{ y: [0, 30, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-10 -left-10 -z-10 h-48 w-48 rounded-full bg-secondary/30 blur-xl" 
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-10"
              >
                <div className="space-y-4">
                  <motion.span 
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
                    transition={{ duration: 1 }}
                    className="text-primary font-bold uppercase tracking-widest text-sm block"
                  >
                    Quem Somos
                  </motion.span>
                  <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl font-heading leading-tight">
                    AD Vila Esperança: <br/> <span className="text-primary italic">Marechal Hermes</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed font-light">
                    A Assembleia de Deus em Vila Esperança nasceu com o propósito de ser um farol de luz em nossa comunidade. Acreditamos que a igreja não é um prédio, mas sim pessoas transformadas pela graça de Deus.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed font-light">
                    Nossa missão é amar a Deus sobre todas as coisas e ao próximo como a nós mesmos, fazendo discípulos e servindo com excelência em tudo o que fazemos.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <motion.h4 
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      className="text-5xl font-bold text-primary"
                    >
                      20+
                    </motion.h4>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Anos de História</p>
                  </div>
                  <div className="space-y-2">
                    <motion.h4 
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      className="text-5xl font-bold text-primary"
                    >
                      500+
                    </motion.h4>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Membros Ativos</p>
                  </div>
                </div>
                <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-xl hover:scale-105 transition-transform">
                  Conheça Nossa História
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ServiceTimes />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Ministries />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <PrayerRequest />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Leadership />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Events />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Location />
        </motion.div>

        {/* Call to Action */}
        <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" 
          />
          <div className="container relative z-10 mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight">Pronto para nos visitar?</h2>
              <p className="text-2xl opacity-90 mb-12 font-light leading-relaxed">
                Estamos ansiosos para te conhecer e caminhar junto com você. Nossas portas estão sempre abertas para receber você e sua família com todo amor.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl font-bold shadow-2xl hover:scale-110 transition-transform">
                  Como Chegar
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-primary-foreground text-primary-foreground px-12 h-16 text-xl hover:bg-primary-foreground hover:text-primary backdrop-blur-sm transition-all hover:scale-110">
                  Falar com um Pastor
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
