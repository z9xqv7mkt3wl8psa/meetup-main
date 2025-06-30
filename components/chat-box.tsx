"use client";

import { useChat } from "@/hooks/use-chat";
import { useState, useEffect, useRef } from "react";

export const ChatBox = ({ onClose }: { onClose: () => void }) => {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex justify-between items-center p-4 border-b border-gray-600 bg-gray-900">
        <h2 className="text-lg font-bold">Meeting Chat</h2>
        <button onClick={onClose} className="text-red-400 text-lg font-bold">
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800">
        {messages.map((message) => (
          <div key={message.id} className="border-b border-gray-600 pb-2">
            <div className="font-semibold text-blue-400">{message.sender}</div>
            <div className="mt-1">{message.text}</div>
            <div className="text-xs text-gray-400 mt-1">
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex p-4 border-t border-gray-600 bg-gray-900">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-700 text-white"
          placeholder="Type your message..."
        />
        <button
          onClick={() => {
            if (input.trim() !== "") {
              sendMessage(input);
              setInput("");
            }
          }}
          className="ml-2 p-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};
