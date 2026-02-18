import { GraduationCap, CheckCircle } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  status: 'current' | 'completed';
  institution: string;
  degree: string;
  specialty?: string;
  tags: string[];
}

function TimelineItem({ year, status, institution, degree, specialty, tags }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 z-10"></div>
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-slate-800 last:hidden"></div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                status === 'current'
                  ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                  : 'bg-green-500/10 text-green-400 border border-green-500/20'
              }`}>
                {status === 'current' ? 'EN COURS' : 'OBTENU'}
              </span>
              <span className="text-slate-500 text-sm font-medium">{year}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{degree}</h3>
            <p className="text-cyan-400 font-medium mb-2">{institution}</p>
            {specialty && <p className="text-slate-400 text-sm">Spécialité : {specialty}</p>}
          </div>
          <GraduationCap size={24} className="text-slate-700 group-hover:text-cyan-500 transition-colors" />
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-md border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const education = [
    {
      year: '2025-2027',
      status: 'current' as const,
      institution: 'Ynov Campus (Paris-Nanterre)',
      degree: 'Mastère Expert Cloud, Infrastructure et Sécurité',
      tags: ['CLOUD', 'DEVSECOPS', 'VIRTUALISATION']
    },
    {
      year: '2023-2025',
      status: 'completed' as const,
      institution: 'Université de Tours',
      degree: 'BUT Réseaux & Télécommunications',
      specialty: 'IoT',
      tags: ['CCNA 1', 'CCNA 2', 'CCNA 3']
    },
    {
      year: '2019-2021',
      status: 'completed' as const,
      institution: 'Lycée GSH',
      degree: 'Baccalauréat général',
      specialty: 'Mathématiques, Physique-Chimie, Sciences de l\'ingénieur',
      tags: ['MATHÉMATIQUES', 'PHYSIQUE-CHIMIE', 'SCIENCES DE L\'INGÉNIEUR']
    }
  ];

  return (
    <section id="parcours" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <CheckCircle size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium tracking-wide">PARCOURS ACADÉMIQUE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Formation & Diplômes</h2>
          <p className="text-slate-400 text-lg">Mon évolution académique vers l'expertise Cloud et DevOps</p>
        </div>

        <div className="relative">
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
