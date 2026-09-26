"use client";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  return (
    <main>
      <h1 style={{ fontSize: 22 }}>Your model, with your why</h1>
      <p style={{ color: "#666" }}>Every reply is written with the decisions you have kept in Unl that bear on it.</p>
      {messages.map((m) => (
        <div key={m.id} style={{ margin: "12px 0" }}>
          <b>{m.role === "user" ? "You" : "AI"}:</b>{" "}
          {m.parts.map((p, i) => (p.type === "text" ? <span key={i}>{p.text}</span> : null))}
        </div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about your project" style={{ width: "100%", padding: 10, fontSize: 16 }} disabled={status !== "ready"} />
      </form>
    </main>
  );
}
