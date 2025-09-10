import { Home, BookOpen, Layers, Rocket } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "learn", label: "Learn", icon: <BookOpen className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Layers className="w-5 h-5" /> },
    { id: "roadmap", label: "Roadmap", icon: <Rocket className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg font-bold">
          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] bg-clip-text text-transparent">
            TypeScript Mastery
          </span>
        </div>

        {/* Links */}
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-all ${
                  active === item.id
                    ? "active-link"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <button
            className="ml-6 px-4 py-2 rounded-xl text-sm font-semibold 
              bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] 
              text-white border border-transparent
              hover:border-white/40 hover:shadow-[0_0_10px_rgba(139,92,246,0.6)]
              transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
