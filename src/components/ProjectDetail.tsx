import { X } from 'lucide-react';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  company: string;
  type: 'ENTREPRISE' | 'PROJET';
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function ProjectDetail({
  isOpen,
  onClose,
  title,
  subtitle,
  company,
  type,
  description,
  achievements,
  technologies
}: ProjectDetailProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                type === 'ENTREPRISE'
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
              }`}>
                {type === 'ENTREPRISE' ? 'ENTREPRISE (ALTERNANCE)' : 'PROJET ACADÉMIQUE'}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-slate-400 text-sm">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors ml-4"
          >
            <X size={24} className="text-slate-400 hover:text-white" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Organisation</h3>
            <p className="text-cyan-400 font-medium">{company}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-3">À propos</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
          </div>

          {achievements.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Réalisations</h3>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm rounded-lg border border-cyan-500/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
