import { Code2, Shield, Database, Zap, Cloud, CheckCircle2 } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
}

function ProjectItem({ title, description, tags }: ProjectItemProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h4>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-500/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const skillCategories = [
    {
      icon: <Shield size={20} className="text-cyan-400" />,
      title: 'Réseau & Sécurité',
      skills: [
        'Administration DNS / DHCP',
        'Configuration firewalls (pFsense)',
        'Proxy (HAProxy), VPN, Radius',
        'Gestion des clés et certificats',
        'Analyse et supervision réseau'
      ]
    },
    {
      icon: <Code2 size={20} className="text-cyan-400" />,
      title: 'Infrastructure',
      skills: [
        'Switchs HP & Cisco',
        'Routeurs et points d\'accès Wi-Fi',
        'Architecture et segmentation',
        'Répartition de charge',
        'Gestion de serveurs'
      ]
    },
    {
      icon: <Database size={20} className="text-cyan-400" />,
      title: 'Sauvegarde & Ext.',
      skills: [
        'Gestion de serveurs bureautiques',
        'Serveurs de sauvegarde',
        'Externalisation des données',
        'Méthodologies PCA / PRA',
        'Stratégies de backup'
      ]
    },
    {
      icon: <Zap size={20} className="text-cyan-400" />,
      title: 'Téléphonie IP',
      skills: [
        'Déploiement et administration',
        'Solutions ToIP',
        'Gestion d\'IPBX',
        'Keyo Phone',
        'Intégration VoIP'
      ]
    },
    {
      icon: <Cloud size={20} className="text-cyan-400" />,
      title: 'DevOps & Cloud',
      skills: [
        'CI/CD : Ansible, GitHub',
        'Conteneurs : Docker',
        'OpenStack & OVHcloud',
        'Proxmox, VMware, VirtualBox',
        'Infrastructure as Code'
      ]
    },
    {
      icon: <CheckCircle2 size={20} className="text-cyan-400" />,
      title: 'Systèmes & Automatisation',
      skills: [
        'Windows Server',
        'Linux (Debian, RHEL)',
        'Scripting Bash & Python',
        'Automatisation des tâches',
        'Gestion de configurations'
      ]
    }
  ];

  const recentProjects = [
    {
      title: 'Déploiement Automatisé Laravel',
      description: 'Orchestration complète d\'un environnement de production idempotent. Utilisation de Ansible Vault, contextes SELinux et templates Jinja2.',
      tags: ['Ansible', 'RHEL', 'MySQL', 'Security']
    },
    {
      title: 'Samba Secure',
      description: 'Serveur de partage sécurisé avec gestion fine des ACLs et intégration Active Directory pour une gestion centralisée des accès.',
      tags: ['Samba', 'Ubuntu', 'AD']
    },
    {
      title: 'Monitoring Stack',
      description: 'Stack Prometheus + Grafana sous Docker pour la surveillance des métriques et visualisation en temps réel de l\'infrastructure.',
      tags: ['Docker', 'Prometheus', 'Grafana']
    }
  ];

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start mb-20">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-cyan-400 text-sm font-medium tracking-wide">WHOAMI</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Passion pour l'<span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Open Source</span> et DevOps
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Je suis passionné par l'Open Source et la méthodologie DevOps. J'aide les entreprises à moderniser leur infrastructure en assurant la haute disponibilité et la sécurité.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                J'aime décortiquer les systèmes pour optimiser chaque couche, du noyau Linux au serveur web.
              </p>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-cyan-400 mb-4">{`{`}</div>
                <div className="pl-4 space-y-2 text-slate-300">
                  <div><span className="text-cyan-400">"profile"</span>: {`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-cyan-400">"role"</span>: <span className="text-green-400">"Expert Architecture S.I. Cloud"</span>,</div>
                    <div><span className="text-cyan-400">"location"</span>: <span className="text-green-400">"Paris, FR"</span>,</div>
                    <div><span className="text-cyan-400">"focus"</span>: [<span className="text-green-400">"Ansible"</span>, <span className="text-green-400">"Docker"</span>, <span className="text-green-400">"Security"</span>]</div>
                  </div>
                  <div>{`}`}</div>
                </div>
                <div className="text-cyan-400">{`}`}</div>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">15+</div>
                <p className="text-slate-400 text-sm">Ans d'expérience</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
                <p className="text-slate-400 text-sm">Projets réalisés</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
                <p className="text-slate-400 text-sm">Uptime garanti</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">30+</div>
                <p className="text-slate-400 text-sm">Technologies maîtrisées</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Compétences Techniques</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Un ensemble complet de compétences couvrant tous les aspects de l'infrastructure moderne
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projets Récents</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Quelques réalisations qui illustrent mon expertise technique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
