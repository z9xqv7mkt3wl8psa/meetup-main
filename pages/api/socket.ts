// ====================== pages/api/socket.ts ======================
import { Server as IOServer } from "socket.io";
import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next";

import { ChatMessage } from "@/types/chat";

let messages: ChatMessage[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    console.log("Starting new Socket.IO server...");

    const io = new IOServer(res.socket.server as any, {
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Client connected");

      socket.emit("load-messages", messages);

      socket.on("send-message", (message: ChatMessage) => {
        messages.push(message);
        io.emit("receive-message", message);
      });
    });
  } else {
    console.log("Socket.IO server already running.");
  }

  res.end();
}

export const config = { api: { bodyParser: false } };
