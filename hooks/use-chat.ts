"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { ChatMessage } from "@/types/chat";
import { useSocket } from "@/providers/socket-provider";

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { user } = useUser();
  const socket = useSocket() as any;

  useEffect(() => {
    if (!socket) return;

    socket.on("load-messages", (loadedMessages: ChatMessage[]) => {
      setMessages(loadedMessages);
    });

    socket.on("receive-message", (message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("load-messages");
      socket.off("receive-message");
    };
  }, [socket]);

  const sendMessage = (text: string) => {
  if (!user?.id || !user?.firstName || !socket) return;

  socket.emit("send-message", {
    id: Date.now().toString(),
    sender: user.firstName,
    text,
    timestamp: new Date().toISOString(),
  });
};


  return { messages, sendMessage };
};