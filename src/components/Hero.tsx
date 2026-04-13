import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1548625361-195fe5772a9d?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
      </div>

      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            Bem-vindo à nossa família
          </span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            AD Vila Esperança <br/> <span className="text-primary-foreground italic">Marechal Hermes</span>
          </h1>
          <p className="mb-10 text-lg text-gray-200 md:text-xl">
            Conectando pessoas a Deus e umas às outras. Junte-se a nós em nossa jornada de fé e amor.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8 text-lg">
              Visite-nos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white px-8 text-lg text-white hover:bg-white hover:text-black">
              <Play className="mr-2 h-5 w-5 fill-current" /> Assista Online
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="h-12 w-6 rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-2 w-full rounded-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
