import { motion } from "motion/react";

export default function Hero() {
  return (
    <aside className="w-[320px] border-r-2 border-dashboard-line flex flex-col p-8 bg-dashboard-sidebar h-full shrink-0">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-[140px] h-[140px] bg-dashboard-ink mb-6 relative flex items-center justify-center rounded-[4px] overflow-hidden group"
      >
        <img 
          src="ai-generated-8700575_1280.jpg" 
          alt="沈科呈"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
          }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-dashboard-bg text-5xl font-bold opacity-20">SKC</span>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[32px] font-bold tracking-[-1px] mb-1"
      >
        沈科呈 <span className="text-[18px] font-normal opacity-60">Ke-Cheng Shen</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-mono bg-dashboard-accent text-white px-2 py-0.5 text-[12px] inline-block mb-6 self-start"
      >
        WAREHOUSE MANAGER / 倉庫經理
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="italic text-[18px] text-slate-600 mb-10 border-l-4 border-dashboard-accent pl-3"
      >
        相信自己，無限可能
      </motion.p>
      
      <div className="mt-auto font-mono text-[11px] leading-[1.6] space-y-4">
        <div>
          <div className="opacity-50 uppercase tracking-wider">Core Strength</div>
          <div className="font-bold">流程優化 / 數據驅動 / 團隊領導</div>
        </div>
        <div>
          <div className="opacity-50 uppercase tracking-wider">Availability</div>
          <div className="font-bold">IMMEDIATE / 隨時面試</div>
        </div>
        <div>
          <div className="opacity-50 uppercase tracking-wider">Systems</div>
          <div className="font-bold">ERP / WMS / ABC ANALYSIS</div>
        </div>
        <div className="hidden pt-4 border-t border-dashboard-line/10 text-[10px] underline cursor-pointer hover:text-dashboard-accent transition-colors">
          SYSTEM_LOG: HR_VIEW_DURATION_START (00:00:01)
        </div>
      </div>
    </aside>
  );
}

