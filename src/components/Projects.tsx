import { Calendar, Briefcase, FolderGit2 } from 'lucide-react';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

interface Project {
  id: string;
  type: 'ENTREPRISE' | 'PROJET';
  title: string;
  subtitle: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface YearSectionData {
  year: string;
  projects: Project[];
}

function ProjectCard({ project, onViewDetail }: { project: Project; onViewDetail: (id: string) => void }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group h-full flex flex-col">
      <div className="flex items-start gap-3 mb-4">
        {project.type === 'ENTREPRISE' ? (
          <Briefcase size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
        ) : (
          <FolderGit2 size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
        )}
        <div className="flex-1">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
            project.type === 'ENTREPRISE'
              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
          }`}>
            {project.type === 'ENTREPRISE' ? 'ENTREPRISE' : 'PROJET'}
          </span>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-2">{project.subtitle}</p>
          {project.company && <p className="text-cyan-400 font-medium text-sm">{project.company}</p>}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className="px-2.5 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2.5 py-1 bg-slate-800/50 text-slate-400 text-xs rounded border border-slate-700">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      <button
        onClick={() => onViewDetail(project.id)}
        className="px-4 py-2 bg-cyan-500/10 text-cyan-400 font-semibold rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-sm"
      >
        Voir le détail
      </button>
    </div>
  );
}

function YearSection({ year, projects, onViewDetail }: { year: string; projects: Project[]; onViewDetail: (id: string) => void }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Calendar size={24} className="text-cyan-400" />
        <h3 className="text-2xl font-bold text-white">{year}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onViewDetail={onViewDetail} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectsByYear: YearSectionData[] = [
    {
      year: 'M1 Cloud, Infrastructure et Sécurité',
      projects: [
        {
          id: 'm1-innosys',
          type: 'ENTREPRISE',
          title: 'Expert Architecture S.I',
          subtitle: 'Refonte intranet Assurmix',
          company: 'Innosys',
          description: 'Projet d\'envergure visant à moderniser l\'infrastructure informatique avec une approche Cloud-first et une sécurité renforcée.',
          achievements: [
            'Refonte complète de l\'intranet avec migration vers le Cloud',
            'Déploiement d\'une architecture sécurisée',
            'Gestion des configurations système',
            'Documentation et formation utilisateurs'
          ],
          technologies: ['Ansible', 'Samba', 'Cloud Architecture', 'Linux', 'Terraform']
        },
        {
          id: 'm1-ynov',
          type: 'PROJET',
          title: 'Expert en Cloud, Sécurité & Infrastructure',
          subtitle: 'OpenStack',
          company: 'Ynov Campus de Paris',
          description: 'Projet académique portant sur l\'expertise cloud, la sécurité applicative et la gestion d\'infrastructure distribuée.',
          achievements: [
            'Déploiement d\'une infrastructure OpenStack complète',
            'Configuration des ressources (Flavor, Nova, Swift)',
            'Mise en place de solutions hautement disponibles',
            'Optimisation des performances et scalabilité'
          ],
          technologies: ['OpenStack', 'Nova', 'Swift', 'Flavor', 'Python', 'Security']
        }
      ]
    },
    {
      year: '3ème Année BUT R&T',
      projects: [
        {
          id: '3a-dgfip',
          type: 'ENTREPRISE',
          title: 'Assistant de Proximité',
          subtitle: 'Projet de densification réseau',
          company: 'Direction Générale des Finances Publiques',
          description: 'Mission alternance axée sur l\'infrastructure réseau, la transition vers ToIP et la migration de systèmes critiques.',
          achievements: [
            'Étude et implémentation d\'une densification réseau',
            'Migration de la téléphonie classique vers ToIP',
            'Mise en œuvre d\'un système VoIP robuste',
            'Support technique N2/N3 et maintenance'
          ],
          technologies: ['ToIP', 'VoIP', 'Infrastructure Réseau', 'Linux', 'Cisco', 'Migration']
        },
        {
          id: '3a-iot',
          type: 'PROJET',
          title: 'IoT & Architectures Hybrides',
          subtitle: 'Conception et qualification',
          company: 'Ynov Campus',
          description: 'Conception et qualification de solutions complètes pour l\'Internet des Objets avec architecture réseau hybride.',
          achievements: [
            'Qualification d\'architectures réseaux hybrides',
            'Fabrication d\'une maison connectée modulaire',
            'Projet électronique : RGB Light',
            'Intégration de capteurs et protocoles IoT'
          ],
          technologies: ['IoT', 'Domotique', 'Électronique', 'Raspberry Pi', 'MQTT', 'Python']
        }
      ]
    },
    {
      year: '2ème Année BUT R&T',
      projects: [
        {
          id: '2a-dgfip',
          type: 'ENTREPRISE',
          title: 'Assistant de Proximité',
          subtitle: 'Audit et déploiement GestSup',
          company: 'Direction Générale des Finances Publiques',
          description: 'Mission d\'audit réseau et déploiement de solutions de gestion, support technique niveau 2.',
          achievements: [
            'Étude et déploiement de l\'outil GestSup',
            'Audit et recensement des commutateurs (Non-PoE)',
            'Intégration nouveau service : Action Sociale',
            'Support utilisateur et résolution incidents'
          ],
          technologies: ['GestSup', 'Audit Réseau', 'Support N2', 'Windows Server', 'Active Directory']
        },
        {
          id: '2a-transmission',
          type: 'PROJET',
          title: 'Transmission & Développement',
          subtitle: 'Approfondissement couches physiques',
          company: 'Ynov Campus',
          description: 'Approfondissement des couches physiques et applicatives avec développement d\'applications communicantes.',
          achievements: [
            'Mise en œuvre d\'un système de transmission',
            'Développement d\'applications communicantes',
            'Étude des signaux et modulations',
            'Tests et validation des performances'
          ],
          technologies: ['Signal Processing', 'Développement', 'Transmission', 'C', 'Python']
        }
      ]
    },
    {
      year: '1ère Année BUT R&T',
      projects: [
        {
          id: '1a-fondamentaux',
          type: 'PROJET',
          title: 'Fondamentaux Réseaux & Télécoms',
          subtitle: 'Acquisition des bases',
          company: 'Ynov Campus',
          description: 'Acquisition des bases de l\'ingénierie réseau et des télécommunications avec plusieurs projets pratiques.',
          achievements: [
            'Architecture PME : Conception complète du réseau informatique d\'une PME (LAN, Adressage, VLANs)',
            'Web & Identité Numérique : Développement Web et présentation professionnelle',
            'Mesures Physiques : Mesurer et caractériser un signal ou un système de communication'
          ],
          technologies: ['Cisco Packet Tracer', 'HTML/CSS', 'Physique', 'Réseaux', 'Télécoms']
        },
        {
          id: '1a-stage',
          type: 'ENTREPRISE',
          title: 'Stage Découverte',
          subtitle: 'Introduction aux métiers IT',
          company: 'Services Informatiques',
          description: 'Stage de découverte pour explorer les différents métiers de l\'infrastructure informatique.',
          achievements: [
            'Découverte des métiers de l\'infrastructure IT',
            'Participation aux opérations de maintenance',
            'Apprentissage des bonnes pratiques',
            'Observation des processus ITIL'
          ],
          technologies: ['ITIL', 'Maintenance', 'Support IT', 'Infrastructure', 'Découverte']
        }
      ]
    }
  ];

  const allProjects = projectsByYear.flatMap(year => year.projects);
  const selectedProjectData = allProjects.find(p => p.id === selectedProject);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <FolderGit2 size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">PORTFOLIO</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projets & Réalisations</h1>
            <p className="text-slate-400 text-lg">Vue d'ensemble de mon parcours académique et de mes missions en entreprise.</p>
          </div>

          {projectsByYear.map((yearData, index) => (
            <YearSection key={index} {...yearData} onViewDetail={setSelectedProject} />
          ))}
        </div>
      </section>

      {selectedProjectData && (
        <ProjectDetail
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          {...selectedProjectData}
        />
      )}
    </>
  );
}
