import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "空間活化與動線重組",
      desc: "導入 ABC 分類法與單向循環動線，解決空間低利用率問題。",
      tags: ["ABC Analysis", "Optimization"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop",
      metrics: [
        { label: "空間利用率", value: "90%" },
        { label: "時程縮短", value: "-25%" }
      ]
    },
    {
      id: "02",
      title: "ERP / WMS 數位化導入",
      desc: "整合行動掃描設備與 WMS，消除紙本作業帶來的數據延遲。",
      tags: ["ERP", "Digitalization"],
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
      metrics: [
        { label: "庫存準確率", value: "99.8%" },
        { label: "盤點時間", value: "4 HR" }
      ]
    },
    {
      id: "03",
      title: "跨部門供應鏈效率優化",
      desc: "建立進貨預約看板，落實「到貨即卸、卸後即入」的高速節奏。",
      tags: ["Supply Chain", "Logistics"],
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop",
      metrics: [
        { label: "卸貨周轉率", value: "+40%" },
        { label: "等待時間", value: "0 WAIT" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="notion-card flex flex-col group p-0 overflow-hidden"
        >
          <div className="aspect-[4/3] overflow-hidden relative border-b border-notion-border">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight size={20} />
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-0.5 bg-notion-sidebar border border-notion-border rounded text-[10px] font-bold text-notion-muted uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-notion-blue transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-notion-muted mb-6 leading-relaxed flex-1">
              {project.desc}
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-notion-border">
              {project.metrics.map((metric, mIdx) => (
                <div key={mIdx}>
                  <div className="text-[10px] font-bold text-notion-muted uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xl font-serif font-bold text-notion-text">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

