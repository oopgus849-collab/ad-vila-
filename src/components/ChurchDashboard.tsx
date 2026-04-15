import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  Users, 
  Calendar, 
  Heart, 
  Activity, 
  ChevronRight, 
  ArrowUpRight,
  MapPin,
  Radio,
  Sun,
  CloudRain,
  Cloud
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { label: "Membros Ativos", value: "542", icon: Users, trend: "+12 este mês", color: "text-blue-500" },
  { label: "Ministérios", value: "14", icon: Activity, trend: "2 novos", color: "text-primary" },
  { label: "Projetos Sociais", value: "08", icon: Heart, trend: "Ativos", color: "text-red-500" },
  { label: "Anos de História", value: "22", icon: Calendar, trend: "Desde 2004", color: "text-amber-500" },
];

const nextService = {
  title: "Culto de Celebração",
  time: "Domingo, 18:00",
  location: "Templo Principal",
  isLive: true
};

export default function ChurchDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold font-heading flex items-center gap-3">
              <Activity className="text-primary h-8 w-8" />
              Painel da Comunidade
            </h2>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mt-1">
              Status em tempo real • AD Vila Esperança
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 bg-secondary/5 px-4 py-2 rounded-2xl border border-primary/10">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-tighter">
                {currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-secondary/5 px-4 py-2 rounded-2xl border border-primary/10">
              <Sun className="h-4 w-4 text-amber-500" />
              <span className="font-mono text-xs font-bold uppercase tracking-tighter">28°C Rio de Janeiro</span>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Stats Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-[2.5rem] border border-primary/5 shadow-xl group hover:border-primary/20 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center ${stat.color} group-hover:bg-primary group-hover:text-primary-foreground transition-all`}>
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-1 relative z-10">{stat.label}</h3>
                <div className="text-5xl font-bold font-heading tracking-tighter relative z-10">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Next Service & Quick Links */}
          <div className="space-y-6">
            {/* Next Service Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Radio className="h-5 w-5 text-primary animate-pulse" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Próxima Atividade</span>
                  </div>
                  <span className="bg-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
                </div>
                
                <h3 className="text-3xl font-bold font-heading mb-6">{nextService.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{nextService.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{nextService.location}</span>
                  </div>
                </div>

                <Button className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-bold group shadow-lg shadow-primary/20">
                  Definir Lembrete <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            {/* Quick Links Dashboard */}
            <div className="bg-card p-8 rounded-[2.5rem] border border-primary/5 shadow-xl">
              <h4 className="font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6">Acesso Rápido</h4>
              <div className="space-y-2">
                {[
                  { label: "Pedido de Oração", href: "#contato" },
                  { label: "Dízimos e Ofertas", href: "#contribuir" },
                  { label: "Escala de Voluntários", href: "#" },
                  { label: "Secretaria Online", href: "#" },
                ].map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary/5 transition-all group border border-transparent hover:border-primary/10"
                  >
                    <span className="font-bold text-sm">{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Activity Feed & Live Stream */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-secondary/5 border border-primary/5 rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-lg">Últimas Notificações</h4>
              <span className="font-mono text-[10px] text-primary font-bold cursor-pointer hover:underline">VER TODAS</span>
            </div>
            <div className="space-y-4">
              {[
                { text: "Reunião de obreiros agendada para sábado.", time: "Há 2h" },
                { text: "Novas fotos adicionadas à galeria de mídia.", time: "Há 5h" },
                { text: "Campanha de agasalhos começa na próxima semana.", time: "Ontem" }
              ].map((note, i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-background rounded-2xl border border-primary/5 group hover:border-primary/20 transition-all">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-muted-foreground flex-grow">{note.text}</p>
                  <span className="text-[10px] font-mono text-muted-foreground/50">{note.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-secondary/5 border border-primary/5 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 relative z-10">
              <Radio className="h-10 w-10 animate-pulse" />
            </div>
            <h4 className="text-2xl font-bold mb-2 relative z-10">Transmissão ao Vivo</h4>
            <p className="text-muted-foreground mb-6 max-w-xs relative z-10">Acompanhe nossos cultos em tempo real de qualquer lugar do mundo.</p>
            <Button variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground relative z-10 transition-all">
              Acessar Canal do YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
