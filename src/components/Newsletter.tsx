import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white mb-2">
                <Bell className="h-7 w-7" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight">
                Fique por dentro de <span className="text-secondary italic">tudo</span>
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                Receba avisos de cultos, eventos especiais e mensagens devocionais diretamente no seu e-mail.
              </p>
            </div>

            <div className="md:w-1/2 w-full">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[2rem] p-8 text-center space-y-4 shadow-xl"
                >
                  <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Inscrição Confirmada!</h3>
                  <p className="text-muted-foreground">Obrigado por se conectar conosco. Você receberá nossas novidades em breve.</p>
                  <Button 
                    variant="link" 
                    className="text-primary font-bold"
                    onClick={() => {setSubmitted(false); setEmail('');}}
                  >
                    Inscrever outro e-mail
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/50" />
                    <Input 
                      type="email" 
                      placeholder="Seu melhor e-mail" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-20 pl-16 pr-6 rounded-[2rem] bg-white/10 border-white/20 text-white placeholder:text-white/40 text-lg focus:bg-white/20 transition-all outline-none ring-0 focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-20 rounded-[2rem] bg-white text-primary hover:bg-secondary hover:text-white text-xl font-bold shadow-2xl transition-all group"
                  >
                    Inscrever-se Agora <Send className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <p className="text-center text-white/50 text-sm font-medium">
                    Respeitamos sua privacidade. Cancele a qualquer momento.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
