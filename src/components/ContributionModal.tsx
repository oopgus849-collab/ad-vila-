import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import React from "react";
import DonationForm from "./DonationForm";

interface ContributionModalProps {
  trigger?: React.ReactNode;
}

export default function ContributionModal({ trigger }: ContributionModalProps) {
  return (
    <Dialog>
      <DialogTrigger render={trigger || <Button variant="default" className="rounded-full px-6">Contribuir</Button>} />
      <DialogContent className="sm:max-w-[600px] rounded-[3rem] p-0 overflow-hidden border-none">
        <div className="bg-primary p-8 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-3xl font-bold">
              <Heart className="h-8 w-8 fill-current" />
              Generosidade
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 text-lg">
              Sua contribuição transforma vidas e sustenta nossa missão.
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-8 md:p-12 bg-background">
          <DonationForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
