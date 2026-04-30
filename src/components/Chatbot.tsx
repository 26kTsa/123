import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User, Loader2, X } from "lucide-react";
import { getChatResponse } from "../services/geminiService";

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      parts: [{ text: "您好！我是沈科呈的 AI 分身。想了解更多關於我的倉儲管理經驗或專案細節嗎？" }]
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await getChatResponse(input, messages);
      const modelMessage: Message = { role: "model", parts: [{ text: response }] };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-dashboard-ink text-white p-4 rounded-lg shadow-2xl z-50 flex items-center gap-3 border border-white/20"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="font-mono text-[12px] font-bold">AI 招募小助手</span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 w-[300px] h-[450px] bg-dashboard-ink text-white rounded-lg shadow-2xl flex flex-col overflow-hidden z-50 border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <strong className="text-[12px] font-mono">AI 招募小助手</strong>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-dashboard-accent">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-[12px]">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-md ${
                    msg.role === "user" 
                      ? "bg-dashboard-accent text-white" 
                      : "bg-white/10 text-slate-200"
                  }`}>
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-md">
                    <Loader2 className="w-4 h-4 animate-spin opacity-50" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-black/20 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="輸入問題..."
                  className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-[11px] focus:outline-none focus:border-dashboard-accent transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-dashboard-accent text-white rounded hover:bg-orange-600 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

