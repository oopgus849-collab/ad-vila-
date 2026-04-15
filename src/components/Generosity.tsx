import React from 'react';
import { motion } from 'motion/react';
import DonationForm from './DonationForm';
import { Heart, Coins, Wallet, Sparkles } from 'lucide-react';

export default function Generosity() {
  return (
    <section id="contribuir" className="py-32 bg-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
                <Sparkles className="h-4 w-4" />
                <span>Generosidade</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight font-heading leading-[0.9]">
                Sua contribuição <br />
                <span className="text-primary italic">transforma vidas</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                Acreditamos que a generosidade é uma expressão de adoração. Seu dízimo e sua oferta voluntária permitem que nossa igreja continue servindo à comunidade e espalhando a mensagem de esperança.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              <div className="p-8 bg-background rounded-3xl shadow-xl border border-primary/5 space-y-4 group hover:border-primary/20 transition-all">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Coins className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold">Dízimos</h4>
                <p className="text-muted-foreground font-light">
                  A entrega fiel dos dízimos é um princípio bíblico de gratidão e obediência a Deus.
                </p>
              </div>
              <div className="p-8 bg-background rounded-3xl shadow-xl border border-primary/5 space-y-4 group hover:border-primary/20 transition-all">
                <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                  <Heart className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold">Ofertas</h4>
                <p className="text-muted-foreground font-light">
                  Suas ofertas voluntárias impulsionam nossos projetos sociais e missões em todo o mundo.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full bg-background rounded-[3.5rem] p-8 md:p-12 shadow-2xl border border-primary/5 relative"
          >
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
            
            <DonationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
