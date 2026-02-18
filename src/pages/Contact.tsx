import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-50"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Mail size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium tracking-wide">PRENONS CONTACT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Travaillons ensemble</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Vous avez un projet, une question ou vous souhaitez discuter d'une opportunité? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:contact@example.com"
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <Mail size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-slate-400 text-sm">contact@example.com</p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <Linkedin size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-white font-bold mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Mon profil</p>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <Github size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-white font-bold mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm">Mes projets</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Sujet</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
              placeholder="Sujet du message"
            />
          </div>

          <div className="mb-8">
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
          >
            {submitted ? (
              <>
                <span>Message envoyé!</span>
              </>
            ) : (
              <>
                Envoyer le message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-400">
            Réponse rapide garantie. Je vous répondrai dans les 24h.
          </p>
        </div>
      </div>
    </section>
  );
}
