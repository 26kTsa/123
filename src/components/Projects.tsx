import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      id: "CASE_01",
      title: "空間活化與動線重組",
      desc: "導入 ABC 分類法與單向循環動線，解決空間低利用率問題。",
      metrics: [
        { label: "空間利用率提升至", value: "90%" },
        { label: "揀貨時程大幅縮短", value: "-25%" }
      ]
    },
    {
      id: "CASE_02",
      title: "ERP / WMS 數位化導入",
      desc: "整合行動掃描設備與 WMS，消除紙本作業帶來的數據延遲。",
      metrics: [
        { label: "庫存準確率精準達標", value: "99.8%" },
        { label: "月結盤點時間優化", value: "4 HR" }
      ]
    },
    {
      id: "CASE_03",
      title: "跨部門供應鏈效率優化",
      desc: "建立進貨預約看板，落實「到貨即卸、卸後即入」的高速節奏。",
      metrics: [
        { label: "卸貨周轉率顯著增長", value: "+40%" },
        { label: "場外物流零違停等待", value: "0 WAIT" }
      ]
    }
  ];

  return (
    <section className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 bg-dashboard-bg">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="dashboard-card flex flex-col"
        >
          <span className="section-header-mono">專案 0{index + 1}</span>
          <h3 className="font-bold text-[15px] mb-3 pb-3 border-b border-slate-300 min-h-[40px]">
            {project.title}
          </h3>
          <p className="text-[12px] opacity-80 mb-4 leading-relaxed flex-1">
            {project.desc}
          </p>
          
          <div className="space-y-3 mt-auto">
            {project.metrics.map((metric, mIdx) => (
              <div key={mIdx} className="flex justify-between items-center">
                <div className="font-mono text-[22px] font-bold text-dashboard-accent">
                  {metric.value}
                </div>
                <div className="text-[11px] text-right opacity-70 leading-tight">
                  {metric.label.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

