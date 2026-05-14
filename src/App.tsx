import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Chatbot from "./components/Chatbot";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-notion-bg text-notion-text selection:bg-notion-blue/20">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-notion-border">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-serif font-bold text-xl tracking-tight"
          >
            KS.
          </motion.span>
          <div className="flex gap-8 text-sm font-medium text-notion-muted">
            <a href="#about" className="hover:text-notion-text transition-colors">About</a>
            <a href="#projects" className="hover:text-notion-text transition-colors">Projects</a>
            <a href="mailto:hidaptoper2@gmail.com" className="hover:text-notion-text transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Animated Background Element */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-notion-blue/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-notion-orange/5 blur-[120px] rounded-full" />
        </div>

        <section id="hero" className="mb-20">
          <Hero />
        </section>

        <div className="notion-divider" />

        <section id="about" className="mb-20">
          <About />
        </section>

        <div className="notion-divider" />

        <section id="projects" className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
            <p className="text-notion-muted max-w-xl">
              A collection of projects focusing on warehouse optimization, 
              logistics systems, and strategic supply chain management.
            </p>
          </div>
          <Projects />
        </section>
      </main>

      <footer className="border-t border-notion-border py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-notion-muted">
            © {new Date().getFullYear()} 沈科呈 Ke-Cheng Shen. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-notion-muted">
            <a href="#" className="hover:text-notion-text">LinkedIn</a>
            <a href="mailto:hidaptoper2@gmail.com" className="hover:text-notion-text">Email</a>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}


