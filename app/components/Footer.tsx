// app/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0a0a1a]/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        {/* Left side */}
        <div>© {new Date().getFullYear()} Thinqh. All rights reserved.</div>

        {/* Right side */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:info@thinqh.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
