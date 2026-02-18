import { Linkedin, Github, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">DevOps<span className="text-cyan-400">.</span></h3>
            <p className="text-slate-400 text-sm">
              Ingénieur Infrastructure & DevOps passionné par l'automatisation et les solutions Cloud.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Accueil</a></li>
              <li><a href="#parcours" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Parcours</a></li>
              <li><a href="#projets" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Projets</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Portfolio DevOps. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Fait avec</span>
            <Heart size={16} className="text-cyan-400 fill-cyan-400" />
            <span>et React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
