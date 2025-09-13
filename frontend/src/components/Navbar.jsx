import { useState } from 'react';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = ['Home', 'Services', 'Portfolio', 'Pricing'];

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
      {/* Logo */}
      <a href="https://prebuiltui.com">
        <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG paths omitted for brevity */}
        </svg>
      </a>

      {/* Desktop Nav */}
      <ul className="text-white md:flex hidden items-center gap-10">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-white/70 transition">{link}</a>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <button
        type="button"
        className="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      {/* Mobile Toggle */}
      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm">{link}</a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-white text-gray-700 mt-6 inline text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}