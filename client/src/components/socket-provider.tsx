import type { SocketStateType } from "@/lib/types";
import { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";
import { server } from "@/lib/utils";

const SocketContext = createContext<SocketStateType>({} as SocketStateType);

export const SocketProvider = (props: { children: React.ReactNode }) => {
  const socket = useMemo(
    () => io("https://sure-known-condor.ngrok-free.app"),
    []
  );
  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export function useSocket() {
  return useContext(SocketContext);
}
