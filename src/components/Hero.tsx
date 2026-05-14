import { motion } from "motion/react";
import { ArrowRight, Mail, Instagram, Linkedin, Activity } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-notion-sidebar rounded-full border border-notion-border"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-notion-muted uppercase tracking-wider">Available for Opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold leading-[1.1]"
        >
          Warehouse <span className="italic font-normal">Manager</span> & Strategy Expert.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-notion-muted max-w-lg leading-relaxed"
        >
          Hi, I am <span className="text-notion-text font-medium">Ke-Cheng Shen</span>. 
          I specialize in turning logistical chaos into efficient, data-driven systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a 
            href="mailto:hidaptoper2@gmail.com"
            className="px-6 py-3 bg-notion-text text-white rounded-full font-medium flex items-center gap-2 hover:bg-black transition-all"
          >
            Get in touch <ArrowRight size={18} />
          </a>
          <div className="flex items-center gap-2 px-2">
            {[ 
              { icon: <Linkedin size={20} />, href: "#" },
              { icon: <Mail size={20} />, href: "mailto:hidaptoper2@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                className="p-2 text-notion-muted hover:text-notion-text hover:bg-notion-sidebar rounded-full transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-64 h-64 md:w-80 md:h-80 relative"
      >
        <div className="absolute inset-0 bg-notion-blue/10 rounded-3xl rotate-6 -z-10" />
        <div className="absolute inset-0 bg-notion-orange/10 rounded-3xl -rotate-3 -z-10" />
        <div className="w-full h-full rounded-3xl border-2 border-white shadow-xl overflow-hidden bg-notion-sidebar">
          <img 
            src="/12323.jpg" 
            alt="沈科呈 Ke-Cheng Shen"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith(".jpg")) {
                target.src = "/12323.JPG";
              } else {
                target.onerror = null; 
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }
            }}
          />
        </div>
        
        {/* Floating badge */}
        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-notion-border flex items-center gap-3">
          <div className="w-10 h-10 bg-notion-blue/10 rounded-full flex items-center justify-center text-notion-blue">
            <Activity size={20} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-notion-muted uppercase tracking-wider">Efficiency</div>
            <div className="text-lg font-serif font-bold leading-none">98% UP</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

