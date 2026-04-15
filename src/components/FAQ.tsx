import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "Quais são os horários dos cultos?",
    answer: "Nossos cultos principais acontecem aos Domingos às 09h (EBD) e 18h (Culto de Celebração). Também temos cultos de oração e doutrina às Terças e Quintas às 19h30."
  },
  {
    question: "Existe programação para crianças?",
    answer: "Sim! Temos o Ministério Infantil (Vila Kids) que funciona durante todos os cultos de domingo, com atividades específicas para cada faixa etária, garantindo um ambiente seguro e de aprendizado bíblico."
  },
  {
    question: "Como posso me tornar um membro?",
    answer: "O primeiro passo é participar de nossa Classe de Boas-Vindas, onde você conhecerá nossa visão, valores e doutrinas. Após isso, você poderá solicitar sua membresia por batismo ou carta de transferência."
  },
  {
    question: "A igreja oferece aconselhamento pastoral?",
    answer: "Sim, nossos pastores estão disponíveis para aconselhamento. Você pode agendar um horário através da nossa secretaria ou preenchendo o formulário de contato aqui no site."
  },
  {
    question: "Como posso me envolver em um ministério?",
    answer: "Acreditamos que todos têm um talento para servir. Após se tornar membro, você pode conversar com os líderes de cada área (Música, Acolhimento, Social, etc.) para entender onde melhor se encaixa."
  },
  {
    question: "Onde fica a igreja?",
    answer: "Estamos localizados na Rua Maurício Fernandes, 25 - Guadalupe, Rio de Janeiro - RJ. Você pode encontrar o mapa detalhado na seção de localização do nosso site."
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-32 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4">Dúvidas Frequentes</span>
              <h2 className="text-5xl font-bold tracking-tight font-heading leading-tight mb-6">
                Perguntas <span className="text-primary italic">Comuns</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                Preparamos esta seção para ajudar você a conhecer melhor nossa dinâmica e como fazer parte da nossa família.
              </p>

              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                  placeholder="Buscar dúvida..." 
                  className="pl-12 h-14 rounded-2xl border-primary/10 bg-background shadow-lg focus-visible:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-primary text-primary-foreground rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <MessageCircle className="h-10 w-10 mb-6" />
              <h4 className="text-2xl font-bold mb-2">Ainda tem dúvidas?</h4>
              <p className="opacity-80 mb-6">Se não encontrou o que procurava, nossa equipe está pronta para ajudar.</p>
              <a href="#contato" className="inline-flex items-center font-bold hover:underline gap-2">
                Fale conosco agora <HelpCircle className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full"
          >
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredFaqs.map((faq, i) => (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AccordionItem 
                        value={`item-${i}`}
                        className="border-none bg-background rounded-3xl px-8 py-2 shadow-lg shadow-primary/5 hover:shadow-xl transition-all duration-300"
                      >
                        <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors py-6 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-8 font-light">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Accordion>
            ) : (
              <div className="text-center py-20 bg-background rounded-[2.5rem] border border-dashed border-primary/20">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <p className="text-xl text-muted-foreground font-light">Nenhum resultado encontrado para "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Limpar busca
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
