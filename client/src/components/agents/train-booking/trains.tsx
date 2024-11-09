import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const items = [1, 2, 3, 4, 5];
export default function Trains() {
  return (
    <div className="bg-muted p-2 rounded-lg shadow-sm">
      {items.map((_, idx) => (
        <Train />
      ))}
    </div>
  );
}

function Train() {
  return (
    <div className="w-full p-2 gap-1 grid grid-cols-[2fr_1.5fr_0.5fr] hover:rounded-lg hover:bg-secondary/80 cursor-pointer border-b">
      <div className="">
        <p className="font-medium text-secondary-foreground">SFG DDN EXPRESS</p>
        <p className="text-sm text-muted-foreground">14113</p>
      </div>
      <div className="">
        <p className="text-secondary-foreground">5:30 PM – 8:00 PM</p>
        <p className="text-sm text-muted-foreground">PUN - BMB</p>
      </div>
      <div className="">
        <p className="text-muted-foreground">2.5 hr</p>
        {/* <p className="text-sm text-muted-foreground">Round Trip</p> */}
      </div>
    </div>
  );
}
