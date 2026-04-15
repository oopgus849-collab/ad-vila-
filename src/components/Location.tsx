import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl font-heading mb-6">Onde Estamos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa igreja está localizada no coração de Guadalupe. Venha nos visitar e sinta-se em casa!
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endereço</h4>
                  <p className="text-muted-foreground">Rua Mauricio Fernandes, 25 - Guadalupe, Rio de Janeiro - RJ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefone</h4>
                  <p className="text-muted-foreground">(21) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-mail</h4>
                  <p className="text-muted-foreground">contato@advilaesperanca.org.br</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Rua+Mauricio+Fernandes+25+Guadalupe+Rio+de+Janeiro+RJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="rounded-full px-8 gap-2">
                <Navigation className="h-5 w-5" /> Como Chegar (Google Maps)
              </Button>
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group"
          >
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Rua+Mauricio+Fernandes+25+Guadalupe+Rio+de+Janeiro+RJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block w-full h-full"
            >
              {/* Placeholder for Map - In a real app, use Google Maps or Leaflet */}
              <div className="relative w-full h-full bg-secondary/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10 text-center p-8">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-bounce">
                    <MapPin className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <p className="font-bold text-xl text-foreground bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                    Guadalupe, RJ
                  </p>
                  <p className="mt-4 text-sm font-bold text-primary bg-white/90 px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Clique para abrir no Google Maps
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
