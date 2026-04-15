import { Church, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ContributionModal from './ContributionModal';

export default function Footer() {
  return (
    <footer className="bg-foreground pt-24 pb-12 text-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2 shadow-lg">
                <Church className="h-full w-full text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold leading-none tracking-tight">AD Vila Esperança</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400">Marechal Hermes</span>
              </div>
            </div>
            <p className="text-gray-400">
              Uma igreja comprometida com a verdade bíblica, o amor ao próximo e a transformação da nossa cidade através do Evangelho.
            </p>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xl font-bold">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#cultos" className="hover:text-white transition-colors">Cultos</a></li>
              <li><a href="#ministerios" className="hover:text-white transition-colors">Ministérios</a></li>
              <li><a href="#midia" className="hover:text-white transition-colors">Mídia</a></li>
              <li><a href="#contribuir" className="hover:text-white transition-colors">Generosidade</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-xl font-bold">Contato</h4>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span>Rua Mauricio Fernandes, 25 - Guadalupe, Rio de Janeiro - RJ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(21) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contato@advilaesperanca.org.br</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Igreja Vila Esperança. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
