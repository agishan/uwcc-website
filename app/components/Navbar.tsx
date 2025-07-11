import { Link, useLocation } from "react-router";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Events", to: "/events" },
  { name: "Recipes", to: "/recipes" },
  { name: "About", to: "/about" },
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
          {navigation.map((link) => (
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
        </div>
      </div>
    </nav>
  );
}