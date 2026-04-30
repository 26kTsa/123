import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-stretch technical-border overflow-hidden">
      {/* Sidebar (Hero component will be adapted) */}
      <Hero />

      {/* Main Content Area */}
      <main className="flex-1 grid grid-rows-[auto_1fr] overflow-y-auto">
        <About />
        <Projects />
      </main>

      <Chatbot />
    </div>
  );
}


