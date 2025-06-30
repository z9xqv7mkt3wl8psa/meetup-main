import type { PropsWithChildren } from "react";
import { StreamClientProvider } from "@/providers/stream-client-provider";
import { SocketProvider } from "@/providers/socket-provider";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <SocketProvider>
        <StreamClientProvider>{children}</StreamClientProvider>
      </SocketProvider>
    </main>
  );
};

export default RootLayout;
