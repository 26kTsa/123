import { motion } from "motion/react";

export default function About() {
  return (
    <section className="p-8 border-b-2 border-dashboard-line grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3"
      >
        <span className="section-header-mono">01 / 職人故事</span>
        <h2 className="text-[20px] font-bold">從混亂中建立秩序的藝術</h2>
        <p className="text-[14px] leading-[1.5] text-slate-700">
          我的職涯並非起步於指揮調度，而是從最前線的貨架與單據開始。在充滿變數的倉儲環境中，我學會了如何從混亂中建立秩序。這份對「效率」的堅持，引領我從執行者轉變為管理者。
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-3"
      >
        <span className="section-header-mono">02 / 核心專長</span>
        <h2 className="text-[20px] font-bold">將「混亂」轉化為「數據」與「節奏」</h2>
        <p className="text-[14px] leading-[1.5] text-slate-700">
          我最擅長處理的是系統性問題。我不僅僅是管理庫存，更是優化周轉率、解決供應鏈中斷的關鍵角色。透過建立 SOP 與數據分析，降低閒置成本並提升團隊生產力。
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <span className="section-header-mono">03 / 未來願景</span>
        <h2 className="text-[20px] font-bold">打造智慧化的供應鏈心臟</h2>
        <p className="text-[14px] leading-[1.5] text-slate-700">
          未來，我追求的不只是「管理」倉庫，而是「進化」倉庫。我致力於將 AI 輔助與自動化管理邏輯導入現代倉儲，打造一個更具彈性、透明且能適應快速電商節奏的供應鏈中樞。
        </p>
      </motion.div>
    </section>
  );
}


