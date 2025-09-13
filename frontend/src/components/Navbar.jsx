import { useState } from 'react';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = ['Home', 'Guide', 'Contact Helpline', 'SOS'];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-gradient-to-r from-emerald-700 via-teal-800 to-indigo-900 shadow-md backdrop-blur-sm transition-all">
      {/* Logo */}
      <a href="#">
        <h1 className="text-white font-bold text-2xl">SafePath</h1>
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
        className="bg-white text-indigo-700 font-semibold md:inline hidden text-sm hover:bg-slate-100 active:scale-95 transition-all w-40 h-11 rounded-full shadow"
      >
        Get Started
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
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-emerald-700 via-teal-800 to-indigo-900 p-6 md:hidden z-40">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm hover:text-white/70 transition">{link}</a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-white text-indigo-700 mt-6 inline text-sm font-semibold hover:bg-slate-100 active:scale-95 transition-all w-40 h-11 rounded-full shadow"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}