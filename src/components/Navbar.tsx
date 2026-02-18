import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
              DevOps<span className="text-cyan-400">.</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors">Accueil</Link>
              <Link to="/parcours" className="text-slate-300 hover:text-cyan-400 transition-colors">Parcours</Link>
              <Link to="/projets" className="text-slate-300 hover:text-cyan-400 transition-colors">Projets</Link>
              <Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-cyan-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors">Accueil</Link>
            <Link to="/parcours" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors">Parcours</Link>
            <Link to="/projets" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors">Projets</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
