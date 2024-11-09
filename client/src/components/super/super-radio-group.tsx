import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

type Props = {
  items: { id: string; value: string }[];
  children: React.ReactNode;
  childrenProps: unknown;
};

export default function SuperRadioGroup({ items, children }: Props) {
  return (
    <RadioGroup className="bg-muted py-2 px-4 rounded-lg shadow-sm">
      {items.map((item) => (
        <div
          className="border-b w-full flex items-center space-x-2"
          key={item.value}
        >
          <RadioGroupItem value={item.value} id={item.id} />
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { id: item.id, ...child.props })
              : child
          )}
        </div>
      ))}
    </RadioGroup>
  );
}
