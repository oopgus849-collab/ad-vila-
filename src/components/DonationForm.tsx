import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  CreditCard, 
  QrCode, 
  FileText, 
  CheckCircle2, 
  Copy, 
  Wallet,
  Coins,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const presetValues = [30, 50, 100, 200, 500];

export default function DonationForm() {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState<string>("50");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const pixKey = "00.000.000/0001-00";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary fill-primary/20" />
              </div>
              <h3 className="text-3xl font-bold font-heading">Escolha um valor</h3>
              <p className="text-muted-foreground font-light text-lg">
                Sua generosidade financia nossa missão e projetos sociais.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {presetValues.map((v) => (
                <Button
                  key={v}
                  variant={value === v.toString() ? "default" : "outline"}
                  className={`h-16 rounded-2xl text-lg font-bold transition-all ${
                    value === v.toString() ? "scale-105 shadow-lg shadow-primary/20" : "hover:border-primary hover:text-primary"
                  }`}
                  onClick={() => setValue(v.toString())}
                >
                  R$ {v}
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Ou digite outro valor</Label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">R$</span>
                <Input 
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="h-20 pl-16 text-3xl font-bold rounded-[2rem] border-primary/10 focus:border-primary bg-secondary/5"
                  placeholder="0,00"
                />
              </div>
            </div>

            <Button 
              className="w-full h-16 rounded-[2rem] text-xl font-bold group"
              onClick={() => setStep(2)}
              disabled={!value || parseFloat(value) <= 0}
            >
              Continuar para Pagamento <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-medium">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              Doação 100% segura e criptografada
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between mb-8">
              <Button variant="ghost" className="rounded-full" onClick={() => setStep(1)}>
                Voltar
              </Button>
              <div className="text-right">
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Valor Escolhido</p>
                <p className="text-2xl font-bold text-primary">R$ {value}</p>
              </div>
            </div>

            <Tabs defaultValue="card" className="w-full" onValueChange={setPaymentMethod}>
              <TabsList className="grid grid-cols-3 h-16 rounded-2xl bg-secondary/10 p-1 mb-8">
                <TabsTrigger value="card" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md">
                  <CreditCard className="h-5 w-5 mr-2" /> Cartão
                </TabsTrigger>
                <TabsTrigger value="pix" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md">
                  <QrCode className="h-5 w-5 mr-2" /> PIX
                </TabsTrigger>
                <TabsTrigger value="boleto" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md">
                  <FileText className="h-5 w-5 mr-2" /> Boleto
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Número do Cartão</Label>
                      <Input placeholder="0000 0000 0000 0000" className="h-14 rounded-xl" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Nome no Cartão</Label>
                      <Input placeholder="COMO ESTÁ NO CARTÃO" className="h-14 rounded-xl uppercase" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Validade</Label>
                        <Input placeholder="MM/AA" className="h-14 rounded-xl" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">CVV</Label>
                        <Input placeholder="000" className="h-14 rounded-xl" required />
                      </div>
                    </div>
                  </div>
                  <Button type="submit" disabled={loading} className="w-full h-16 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20">
                    {loading ? (
                      <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      `Confirmar Doação de R$ ${value}`
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="pix" className="space-y-8 text-center py-4">
                <div className="bg-secondary/5 p-8 rounded-[2rem] border border-primary/10 space-y-6">
                  <div className="bg-white p-4 rounded-2xl shadow-inner inline-block mx-auto">
                    <QrCode className="h-48 w-48 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Chave PIX (CNPJ)</p>
                    <div className="flex items-center gap-2 bg-background border rounded-2xl px-6 py-4">
                      <code className="text-lg font-mono flex-1 truncate">{pixKey}</code>
                      <Button size="icon" variant="ghost" className="h-10 w-10 text-primary" onClick={handleCopyPix}>
                        <Copy className="h-5 w-5" />
                      </Button>
                    </div>
                    {copied && <p className="text-xs text-green-600 font-bold animate-pulse">Chave copiada!</p>}
                  </div>
                </div>
                <Button onClick={() => setStep(3)} className="w-full h-16 rounded-2xl text-xl font-bold">
                  Já realizei o pagamento
                </Button>
              </TabsContent>

              <TabsContent value="boleto" className="space-y-8 text-center py-4">
                <div className="bg-secondary/5 p-10 rounded-[2rem] border border-primary/10 space-y-6">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Boleto Bancário</h4>
                    <p className="text-muted-foreground">
                      O boleto será gerado e enviado para o seu e-mail após a confirmação.
                    </p>
                  </div>
                </div>
                <Button onClick={handleSubmit} disabled={loading} className="w-full h-16 rounded-2xl text-xl font-bold">
                  {loading ? (
                    <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Gerar Boleto"
                  )}
                </Button>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-12"
          >
            <div className="h-32 w-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="h-16 w-16" />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold font-heading">Obrigado pela sua generosidade!</h3>
              <p className="text-xl text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
                Sua contribuição de <span className="text-primary font-bold">R$ {value}</span> foi recebida com gratidão. Que Deus abençoe ricamente sua vida.
              </p>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold" onClick={() => setStep(1)}>
                Fazer Outra Doação
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold" onClick={() => window.location.href = '#'}>
                Voltar ao Início
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
