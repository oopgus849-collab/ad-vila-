import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Church } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ContributionModal from './ContributionModal';

const navItems = [
  { name: 'Início', href: '#' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Cultos', href: '#cultos' },
  { name: 'Ministérios', href: '#ministerios' },
  { name: 'Oração', href: '#oracao' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Localização', href: '#localizacao' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2 shadow-lg">
            <Church className="h-full w-full text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold leading-none tracking-tight text-primary">
              AD Vila Esperança
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Marechal Hermes
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ContributionModal />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <ContributionModal 
                  trigger={
                    <Button variant="default" className="rounded-full w-full">
                      Contribuir
                    </Button>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
