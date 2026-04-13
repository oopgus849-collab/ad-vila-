import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import React from "react";

interface CalendarModalProps {
  trigger?: React.ReactNode;
}

const fullSchedule = [
  {
    day: "Segunda-feira",
    events: [
      { time: "19:30", title: "Ensaio do Coral", location: "Templo Principal" }
    ]
  },
  {
    day: "Terça-feira",
    events: [
      { time: "19:30", title: "Reunião de Oração", location: "Sala de Oração" }
    ]
  },
  {
    day: "Quarta-feira",
    events: [
      { time: "19:00", title: "Culto de Libertação", location: "Templo Principal" }
    ]
  },
  {
    day: "Quinta-feira",
    events: [
      { time: "19:30", title: "Estudo Bíblico", location: "Salão Social" }
    ]
  },
  {
    day: "Sexta-feira",
    events: [
      { time: "19:00", title: "EBD (Escola Bíblica)", location: "Templo Principal" }
    ]
  },
  {
    day: "Sábado",
    events: [
      { time: "09:00", title: "Consagração", location: "Templo Principal" },
      { time: "11:30", title: "Venda de Almoço", location: "Cantina" },
      { time: "19:00", title: "Culto de Jovens", location: "Templo Principal" }
    ]
  },
  {
    day: "Domingo",
    events: [
      { time: "09:00", title: "Santa Ceia", location: "Templo Principal" },
      { time: "18:00", title: "Culto de Adoração", location: "Templo Principal" }
    ]
  }
];

export default function CalendarModal({ trigger }: CalendarModalProps) {
  return (
    <Dialog>
      <DialogTrigger render={trigger || <Button variant="ghost">Ver Calendário Completo</Button>} />
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto rounded-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
            <CalendarIcon className="h-6 w-6" />
            Calendário Semanal
          </DialogTitle>
          <DialogDescription className="text-base">
            Confira nossa programação completa e participe conosco.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          {fullSchedule.map((daySchedule) => (
            <div key={daySchedule.day} className="space-y-4">
              <h4 className="text-lg font-bold border-l-4 border-primary pl-3 text-primary">
                {daySchedule.day}
              </h4>
              <div className="grid gap-3">
                {daySchedule.events.map((event, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-secondary/5 rounded-2xl border border-primary/5 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-xl">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
