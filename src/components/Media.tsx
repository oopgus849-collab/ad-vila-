import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Maximize2, X, Camera, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop",
    title: "Culto de Celebração",
    category: "Cultos",
    size: "large"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    title: "Ministério de Jovens",
    category: "Ministérios",
    size: "small"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
    title: "Ação Social",
    category: "Comunidade",
    size: "small"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop",
    title: "Escola Bíblica",
    category: "Educação",
    size: "medium"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
    title: "Conferência de Fé",
    category: "Eventos",
    size: "medium"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1974&auto=format&fit=crop",
    title: "Batismo",
    category: "Celebração",
    size: "small"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    title: "Retiro Espiritual",
    category: "Eventos",
    size: "small"
  }
];

export default function Media() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="midia" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6"
            >
              <Camera className="h-4 w-4" />
              <span>Nossa Galeria</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight font-heading leading-tight"
            >
              Momentos de <span className="text-primary italic">Fé e Comunhão</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-md font-light leading-relaxed"
          >
            Registros de como Deus tem agido em nossa comunidade através de cultos, eventos e ministérios.
          </motion.p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer
                ${photo.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${photo.size === 'medium' ? 'md:col-span-2' : ''}
              `}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{photo.category}</span>
                <h3 className="text-white text-2xl font-bold font-heading">{photo.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-white/60 text-sm">
                  <Maximize2 className="h-4 w-4" />
                  <span>Ver em tela cheia</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-6xl p-0 overflow-hidden bg-black/90 border-none rounded-[3rem]">
            <AnimatePresence>
              {selectedPhoto && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative aspect-video w-full"
                >
                  <img 
                    src={selectedPhoto.url} 
                    alt={selectedPhoto.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">{selectedPhoto.category}</span>
                    <h3 className="text-4xl font-bold font-heading">{selectedPhoto.title}</h3>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 p-2 pl-6 rounded-full bg-secondary/10 border border-primary/10">
            <span className="text-muted-foreground font-medium">Quer ver mais fotos de nossos eventos?</span>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Acessar Flickr da Igreja
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
