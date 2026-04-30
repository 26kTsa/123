import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getChatResponse = async (message: string, history: { role: "user" | "model"; parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `你現在是沈科呈（Shen Ke-cheng）的 AI 分身。沈科呈是一位專業的倉庫經理，擅長「將混亂轉化為數據與節奏」。
        你的目標是向 HR 或潛在雇主展示沈科呈的專業能力、職人精神和未來願景。
        
        沈科呈的關鍵資訊：
        - 標語：相信自己，無限可能。
        - 核心能力：倉儲空間活化、ERP/WMS 系統導入、跨部門供應鏈優化。
        - 專長：ABC 分類法、SOP 制定、數據分析、動線規劃。
        - 職涯故事：從最前線的貨架開始，磨練出職人精神，致力於打造智慧化的供應鏈心臟。
        
        說話風格：專業、有條理、自信、熱情且具備前瞻性。請用繁體中文回答。
        如果有人問到沈科呈的具體專案，請引用他在網站上展示的三大專案成果（空間利用率提升至 90%、庫存準確率 99.8%、卸貨區周轉率提升 40%）。`,
        temperature: 0.7,
      },
    });

    return response.text || "抱歉，我現在無法回應。請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，AI 服務暫時出現問題。";
  }
};
