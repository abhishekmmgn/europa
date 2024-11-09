import { Textarea } from "@/components/ui/textarea";
import {
  IoArrowUpCircle,
  IoPauseCircleOutline,
  IoMicCircleOutline,
} from "react-icons/io5";
import { useState } from "react";

export default function MultimodalInput() {
  const [text, setText] = useState("");
  const inProgress = false;
  const isPlaying = false;
  return (
    <div className="px-4 bg-background grid place-items-center fixed bottom-0 inset-x-0 pt-4 pb-5 sm:inset-x-auto sm:w-full sm:max-w-xl sm:px-0">
      <Textarea
        placeholder="Type your message..."
        className="bg-muted resize-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="px-2 w-full flex justify-end gap-2 absolute bottom-7">
        {isPlaying ? (
          <IoPauseCircleOutline className="h-8 w-8 text-primary border-muted-foreground hover:text-primary/80" />
        ) : (
          <>
            {!text && (
              <IoMicCircleOutline
                className={`h-8 w-8 text-muted-foreground hover:text-muted-foreground/80 ${
                  inProgress && "text-muted-foreground/50"
                }`}
              />
            )}
            <IoArrowUpCircle
              className={`h-8 w-8 text-primary hover:text-primary/80 ${
                inProgress && "text-primary/50"
              }`}
            />
          </>
        )}
      </div>
    </div>
  );
}
