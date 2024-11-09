import Message, { AIMessageWrapper } from "@/components/message";
import SuperRadioGroup from "../components/super/super-radio-group";
import { io } from "socket.io-client";
import { socket } from "@/socket";
import React, { useState, useEffect } from "react";

export default function Chat({ id }: { id: string }) {
  // if (id !== "train-booking" && id !== "pnr-status" && id !== "food-ordering") {
  //   notFound();
  // }

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      alert("connected");
    }

    function onDisconnect() {
      setIsConnected(false);
      alert("disconnected");
    }

    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  console.log(socket);
  return (
    <section className="flex flex-col gap-4">
      <Message sender="user" message="Help me book a train." />
      <AIMessageWrapper>
        <Message sender="ai" message="Here are some trains." />
        {/* <SuperRadioGroup>
          <Train />
        </SuperRadioGroup> */}
      </AIMessageWrapper>
    </section>
  );
}
