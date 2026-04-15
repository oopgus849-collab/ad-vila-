import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  Phone, 
  MapPin,
  Clock
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contato" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4"
            >
              Fale Conosco
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight font-heading"
            >
              Estamos aqui para <span className="text-primary italic">ouvir você</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto font-light"
            >
              Tem alguma dúvida, sugestão ou precisa de ajuda? Envie-nos uma mensagem e responderemos o mais breve possível.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-12"
            >
              <div className="space-y-8">
                <h3 className="text-3xl font-bold font-heading">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Localização</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Rua Mauricio Fernandes, 25<br />
                        Guadalupe, Rio de Janeiro - RJ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Telefone</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        (21) 99999-9999<br />
                        (21) 3333-3333
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">E-mail</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        contato@advilaesperanca.org.br<br />
                        secretaria@advilaesperanca.org.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Horário de Atendimento</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Segunda a Sexta: 09h às 18h<br />
                        Sábados: 09h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links placeholder */}
              <div className="pt-8 border-t border-primary/10">
                <p className="font-bold mb-4 uppercase tracking-widest text-xs text-muted-foreground">Siga-nos</p>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-secondary/10 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer flex items-center justify-center" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-card rounded-[3rem] p-8 md:p-12 shadow-2xl border border-primary/5 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full min-h-[500px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-heading">Mensagem Enviada!</h3>
                    <p className="text-xl text-muted-foreground max-w-md font-light leading-relaxed">
                      Obrigado por entrar em contato. Nossa equipe analisará sua mensagem e retornará o mais breve possível.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-10 rounded-full px-10 h-14 text-lg font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setSubmitted(false)}
                    >
                      Enviar Nova Mensagem
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Nome Completo</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50" />
                          <Input 
                            placeholder="Seu nome" 
                            required 
                            className="h-14 pl-12 rounded-2xl border-primary/10 focus:border-primary bg-background/50 backdrop-blur-sm" 
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">E-mail</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50" />
                          <Input 
                            type="email" 
                            placeholder="seu@email.com" 
                            required 
                            className="h-14 pl-12 rounded-2xl border-primary/10 focus:border-primary bg-background/50 backdrop-blur-sm" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Assunto</label>
                      <Select required>
                        <SelectTrigger className="h-14 rounded-2xl border-primary/10 focus:border-primary bg-background/50 backdrop-blur-sm">
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="duvida">Dúvidas Gerais</SelectItem>
                          <SelectItem value="ajuda">Pedido de Ajuda</SelectItem>
                          <SelectItem value="visita">Agendar Visita</SelectItem>
                          <SelectItem value="outro">Outros Assuntos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Sua Mensagem</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted-foreground/50" />
                        <Textarea 
                          placeholder="Como podemos ajudar você hoje?" 
                          className="min-h-[180px] pl-12 pt-4 rounded-2xl border-primary/10 focus:border-primary bg-background/50 backdrop-blur-sm resize-none"
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-16 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/20 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (
                          <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Enviar Mensagem <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
