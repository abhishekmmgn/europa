import Message, { AIMessageWrapper } from "@/components/message";
import Trains from "@/components/agents/train-booking/trains";
import { useEffect } from "react";
import { useMessagesStore } from "@/lib/store";
import { useSocket } from "@/components/socket-provider";

export default function Chat() {
  const { messages, addMessage } = useMessagesStore();
  const { socket } = useSocket();

  useEffect(() => {
    function onMessageRecieved(message: {
      text: string;
      list: any;
      type: "text" | "train_list";
    }) {
      // change the shape of the data
      const { text, list, type } = message;
      alert("hello");
      addMessage({
        text,
        trains: list,
        type,
        sender: "ai",
      });
    }
    socket.on("message", onMessageRecieved);

    return () => {
      socket.off("message", onMessageRecieved);
    };
  }, []);

  console.log(socket);
  return (
    <section className="flex flex-col gap-4">
      {messages.map((msg) =>
        msg.sender === "user" ? (
          <Message
            key={msg.text.slice(0, 5)}
            sender="user"
            message={msg.text}
          />
        ) : (
          <AIMessageWrapper key={msg.text.slice(0, 5)}>
            <Message sender="ai" message={msg.text} />
            {msg.type === "train_list" && msg.trains && (
              <Trains items={msg.trains} />
            )}
          </AIMessageWrapper>
        )
      )}
    </section>
  );
}
