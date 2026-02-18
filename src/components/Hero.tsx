import { Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-50"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-cyan-400 text-sm font-medium tracking-wide">SYSADMIN & AUTOMATISATION</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Construire des infrastructures{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            robustes et automatisées
          </span>
        </h1>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Spécialiste en déploiement Ansible, administration Linux et solutions Cloud.
          Je transforme des infrastructures complexes en systèmes scalables et automatisés.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projets"
            className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
          >
            Voir mes projets
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 hover:bg-cyan-500/5"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
