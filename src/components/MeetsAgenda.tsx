import { PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";


    export default function MeetsAgenda({className}: {className?:string}){
  return (

<Dialog>
  <DialogTrigger asChild>

            <Button className={cn(className,"rounded-[0.8rem]")}>
                <PhoneIcon/>
                    Let's meet
                </Button>

                </DialogTrigger>
  <DialogContent className="h-[85dvh]">
    <DialogHeader>
      <DialogTitle>Calendar reservation</DialogTitle>
        <iframe
                        title="Calendar reservation"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2xJaMQZVcPbzx1XWXPJhdPMZxdXCuEI0fAYJbBDiaTlcQcAKfp-LYCL8Hm4L4yjRp965rIZcTO?gv=true"
            width="100%" height="100%" >
        </iframe>
    </DialogHeader>
  </DialogContent>
</Dialog>
  );
};
