import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, HeartHandshake } from 'lucide-react';

export default function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send the data to a backend
  };

  return (
    <section id="oracao" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-background rounded-[3rem] overflow-hidden shadow-2xl border border-primary/10">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16 bg-primary text-primary-foreground">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 mb-8">
                  <HeartHandshake className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-bold mb-6 font-heading">Podemos orar por você?</h2>
                <p className="text-lg opacity-90 leading-relaxed mb-8">
                  Acreditamos no poder da oração. Se você está passando por um momento difícil ou tem um motivo de gratidão, compartilhe conosco. Nossa equipe de intercessão estará orando por você.
                </p>
                <div className="space-y-4 text-sm opacity-80">
                  <p>• Seus pedidos são tratados com sigilo e amor.</p>
                  <p>• Oramos individualmente por cada necessidade recebida.</p>
                  <p>• Deus ouve o clamor do Seu povo.</p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 p-10 lg:p-16">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pedido Recebido!</h3>
                  <p className="text-muted-foreground">
                    Obrigado por confiar em nós. Estaremos em oração por sua vida. Que a paz de Deus esteja com você.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8 rounded-full"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar outro pedido
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Nome Completo</label>
                    <Input placeholder="Seu nome" required className="rounded-xl border-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">E-mail ou Telefone</label>
                    <Input placeholder="Como podemos te contatar (opcional)" className="rounded-xl border-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Seu Pedido</label>
                    <Textarea 
                      placeholder="Escreva aqui sua necessidade ou agradecimento..." 
                      className="min-h-[150px] rounded-xl border-primary/20 focus:border-primary resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20">
                    Enviar Pedido de Oração
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
