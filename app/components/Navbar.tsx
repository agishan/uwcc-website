import { Link, useLocation } from "react-router";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Events", to: "/events" },
  { name: "About Us", to: "/about" },
  { name: "Execs", to: "/execs" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-primary">UWCC</span>
        </div>
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`transition-colors px-2 py-1 rounded hover:bg-accent ${
                  location.pathname === link.to 
                    ? "text-primary font-semibold" 
                    : "text-black"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 items-center">
          {/* Discord */}
          <a href="#" aria-label="Discord" className="hover:scale-110 transition-transform">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#5865F2"/>
              <path d="M16.6 17c-1.1-1-1.5-1.3-2.1-1.2-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2-.6-.1-1 .2-2.1 1.2-.2.2-.4.1-.3-.1.2-.4.4-.8.6-1.2.1-.2.2-.3.4-.4.2-.1.4-.2.6-.2.2 0 .4.1.6.2.2.1.3.2.4.4.2.4.4.8.6 1.2.1.2-.1.3-.3.1z" fill="#fff"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#E1306C"/>
              <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zm0 5.7A2.2 2.2 0 1 1 12 10.3a2.2 2.2 0 0 1 0 4.4zm4.2-5.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zM17 8.7a4.3 4.3 0 0 0-1.2-3A4.3 4.3 0 0 0 12 4.5a4.3 4.3 0 0 0-3 1.2A4.3 4.3 0 0 0 4.5 12a4.3 4.3 0 0 0 1.2 3A4.3 4.3 0 0 0 12 19.5a4.3 4.3 0 0 0 3-1.2 4.3 4.3 0 0 0 1.2-3A4.3 4.3 0 0 0 19.5 12a4.3 4.3 0 0 0-1.2-3z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
} 