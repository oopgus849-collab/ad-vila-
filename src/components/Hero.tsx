import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Heart, Users, Sparkles, Church, Radio, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1548625361-195fe5772a9d?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-2/3 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center lg:items-start gap-4 mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-bold backdrop-blur-md text-white shadow-xl">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="tracking-widest uppercase">Uma igreja viva para um Deus vivo</span>
              </div>
              <motion.div 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/20 px-4 py-2 text-xs font-bold backdrop-blur-md text-red-400 shadow-xl"
              >
                <div className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                <span className="tracking-widest uppercase">Ao Vivo Agora</span>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="mb-8 text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl font-heading leading-[0.85]"
            >
              AD Vila Esperança <br/> 
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-primary italic inline-block"
              >
                Marechal Hermes
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mb-12 text-xl text-white/80 md:text-2xl max-w-2xl lg:mx-0 mx-auto leading-relaxed font-light"
            >
              Conectando pessoas a Deus e umas às outras através do amor de Cristo. Junte-se a nós em nossa jornada de fé, serviço e transformação.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-6 sm:flex-row"
            >
              <Button size="lg" className="rounded-full px-12 text-xl h-16 font-bold shadow-2xl shadow-primary/30 group transition-all hover:scale-105">
                Visite-nos <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/40 px-12 text-xl h-16 text-white hover:bg-white hover:text-secondary backdrop-blur-sm transition-all hover:scale-105">
                <Play className="mr-2 h-6 w-6 fill-current" /> Assista Online
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:w-1/3 hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-16">
                <motion.div 
                  animate={floatingAnimation}
                  className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-white shadow-2xl"
                >
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold text-xl">Amor</h4>
                  <p className="text-sm opacity-70">Acolhimento em cada detalhe.</p>
                </motion.div>
                <motion.div 
                  animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
                  className="bg-primary p-8 rounded-[2.5rem] text-primary-foreground shadow-2xl"
                >
                  <Users className="h-10 w-10 mb-4" />
                  <h4 className="font-bold text-xl">Família</h4>
                  <p className="text-sm opacity-80">Um lugar para pertencer.</p>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div 
                  animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                  className="bg-secondary p-8 rounded-[2.5rem] text-white shadow-2xl border border-white/5"
                >
                  <Church className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold text-xl">Fé</h4>
                  <p className="text-sm opacity-70">Crescimento espiritual constante.</p>
                </motion.div>
                <motion.div 
                  animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
                  className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-white shadow-2xl"
                >
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold text-xl">Esperança</h4>
                  <p className="text-sm opacity-70">Um novo começo em Cristo.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Access Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-full bg-background/40 backdrop-blur-3xl border-t border-white/10 hidden md:block"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-12">
              {[
                { label: "Próximo Culto", value: "Dom, 18:00" },
                { label: "Localização", value: "Marechal Hermes" },
                { label: "Transmissão", value: "YouTube Live" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">{item.label}</p>
                  <p className="text-white font-bold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                <Radio className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="h-16 w-8 rounded-full border-2 border-white/20 p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-3 w-full rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
