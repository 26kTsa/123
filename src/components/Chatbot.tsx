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
          className="fixed bottom-6 right-6 bg-notion-blue text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center gap-3 border border-white/20 hover:bg-blue-600 transition-all font-medium"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
          <span className="text-[14px] tracking-tight">詢問 AI 助手</span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white text-notion-text rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-notion-border"
          >
            {/* Header */}
            <div className="p-4 border-b border-notion-border flex items-center justify-between bg-notion-sidebar/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-notion-blue/10 rounded-lg flex items-center justify-center text-notion-blue">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-[13px] font-bold leading-none">沈科呈 AI 助手</div>
                  <div className="text-[10px] text-notion-muted flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    線上即時回覆
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1 hover:bg-notion-border rounded-md transition-colors text-notion-muted hover:text-notion-text"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                    msg.role === "user" 
                      ? "bg-notion-blue text-white rounded-tr-none" 
                      : "bg-notion-sidebar text-notion-text rounded-tl-none border border-notion-border"
                  }`}>
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-notion-sidebar px-4 py-2 rounded-2xl rounded-tl-none border border-notion-border">
                    <Loader2 size={16} className="animate-spin text-notion-muted" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-notion-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="輸入訊息..."
                  className="flex-1 bg-notion-sidebar border border-notion-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-notion-blue/20 focus:border-notion-blue transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-notion-blue text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 transition-colors shadow-sm"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

