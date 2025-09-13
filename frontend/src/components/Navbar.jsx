import { useState } from "react";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Contact Helpline", path: "/contact-helpline" },
    { label: "SOS", path: "/sos" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-gradient-to-r from-emerald-700 via-teal-800 to-indigo-900 shadow-md backdrop-blur-sm transition-all">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-white font-bold text-2xl">SafePath</h1>
      </Link>

      {/* Desktop Nav */}
      <ul className="text-white md:flex hidden items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.path} className="hover:text-white/70 transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Button */}
      <div className="hidden md:flex items-center">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 rounded-full cursor-pointer text-sm bg-white text-indigo-700 px-6 py-2 font-semibold shadow hover:bg-slate-100 active:scale-95 transition-all"
          >
            Get started <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#fff"
        >
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-gradient-to-r from-emerald-700 via-teal-800 to-indigo-900 p-6 md:hidden z-40">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-sm hover:text-white/70 transition"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  openSignIn();
                }}
                className="flex items-center gap-2 rounded-full cursor-pointer text-sm bg-white text-indigo-700 px-6 py-2 font-semibold shadow hover:bg-slate-100 active:scale-95 transition-all"
              >
                Get started <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}