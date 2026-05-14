import { motion } from "motion/react";
import { History, Target, Zap } from "lucide-react";

export default function About() {
  const categories = [
    {
      title: "職人故事 / STORY",
      icon: <History size={20} className="text-notion-blue" />,
      heading: "從混亂中建立秩序的藝術",
      text: "我的職涯並非起步於指揮調度，而是從最前線的貨架與單據開始。在充滿變數的倉儲環境中，我學會了如何從混亂中建立秩序。這份對「效率」的堅持，引領我從執行者轉變為管理者。",
      color: "bg-notion-blue/5"
    },
    {
      title: "核心專長 / FOCUS",
      icon: <Target size={20} className="text-notion-orange" />,
      heading: "將「混亂」轉化為「數據」與「節奏」",
      text: "我最擅長處理的是系統性問題。我不僅僅是管理庫存，更是優化周轉率、解決供應鏈中斷的關鍵角色。透過建立 SOP 與數據分析，降低閒置成本並提升團隊生產力。",
      color: "bg-notion-orange/5"
    },
    {
      title: "未來願景 / VISION",
      icon: <Zap size={20} className="text-yellow-500" />,
      heading: "打造智慧化的供應鏈心臟",
      text: "未來，我追求的不只是「管理」倉庫，而是「進化」倉庫。我致力於將 AI 輔助與自動化管理邏輯導入現代倉儲，打造一個更具彈性、透明且能適應快速電商節奏的供應鏈中樞。",
      color: "bg-yellow-500/5"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`p-8 rounded-3xl ${item.color} border border-white space-y-4`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-notion-border">
              {item.icon}
            </div>
            <span className="text-[10px] font-bold text-notion-muted uppercase tracking-widest leading-none">
              {item.title}
            </span>
          </div>
          <h3 className="text-2xl font-bold leading-tight">
            {item.heading}
          </h3>
          <p className="text-sm text-notion-muted leading-relaxed">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}


