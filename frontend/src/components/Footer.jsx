import { Earth } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-emerald-900 via-teal-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <Earth className="w-6 h-6 text-white" />
          <span className="text-xl font-semibold tracking-wide">SafePath</span>
        </div>

        {/* Description */}
        <p className="max-w-xl text-sm font-normal leading-relaxed text-white/80">
          SafePath is a modern, emotionally intelligent platform built to
          support individuals and communities during moments of crisis. Designed
          with resilience and accessibility at its core, SafePath offers
          real-time safety tools, verified helpline access, and intuitive SOS
          features—all wrapped in a visually polished, responsive interface.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal text-white/70">
          <a
            href="https://safepath.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            SafePath
          </a>{" "}
          ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
