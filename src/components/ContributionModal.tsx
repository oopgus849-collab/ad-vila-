import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Heart, QrCode } from "lucide-react";
import React from "react";

interface ContributionModalProps {
  trigger?: React.ReactNode;
}

export default function ContributionModal({ trigger }: ContributionModalProps) {
  const pixKey = "00.000.000/0001-00"; // Exemplo de CNPJ ou chave PIX

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    // Poderia adicionar um toast aqui
  };

  return (
    <Dialog>
      <DialogTrigger render={trigger || <Button variant="default" className="rounded-full px-6">Contribuir</Button>} />
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Heart className="h-6 w-6 fill-primary" />
            Contribuir
          </DialogTitle>
          <DialogDescription className="text-base">
            Sua contribuição ajuda a manter nossa igreja e nossos projetos sociais ativos.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="flex flex-col items-center justify-center p-6 bg-secondary/10 rounded-2xl border border-primary/10">
            <div className="mb-4 bg-white p-4 rounded-xl shadow-inner">
              <QrCode className="h-32 w-32 text-primary" />
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Chave PIX (CNPJ)</p>
            <div className="flex items-center gap-2 bg-background border rounded-lg px-3 py-2 w-full">
              <code className="text-xs font-mono flex-1 truncate">{pixKey}</code>
              <Button size="icon" variant="ghost" className="h-8 w-8" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Dados Bancários</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-muted-foreground">Banco</p>
                <p className="font-semibold">Itaú (341)</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Agência</p>
                <p className="font-semibold">0000</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Conta Corrente</p>
                <p className="font-semibold">00000-0</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Favorecido</p>
                <p className="font-semibold">AD Vila Esperança</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
