import { Label } from "@/components/ui/label";

type Props = {
  id: string;
};

export default function Train({ id }: Props) {
  return (
    <Label
      className="w-full p-2 gap-1 grid grid-cols-[2fr_1.5fr_0.5fr]"
      htmlFor={id}
    >
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
    </Label>
  );
}
