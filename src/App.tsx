import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Send,
  User,
  Layers,
  Briefcase,
  MessageSquare
} from 'lucide-react';
import { PROJECTS, TECHNOLOGIES } from './constants';
import SerhiiFoto from '/public/serge-foto.png'
import PdfImage from '/public/PDF_image.png'


const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function getExperience() {
  const startDate = new Date(2019, 11); // Декабрь = 11 (месяцы с 0)
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} Jahre ${months} Monate`;
}

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md py-4 border-b border-white/10' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-black">
            <Terminal size={18} />
          </div>
          <span>SB</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Über mich', 'Stack', 'Projekte', 'Kontakt'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item === 'Über mich' ? 'about' : item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mb-[100px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            BEREIT FÜR NEUE HERAUSFORDERUNGEN
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">user-focused</span> <br />
            web interfaces
          </h1>

          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-black font-bold rounded-sm flex items-center gap-2 hover:bg-white transition-colors"
            >
              PROJEKTE ANSEHEN <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-bold rounded-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              KONTAKT AUFNEHMEN
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-white/10 relative group">
              <img 
                src={SerhiiFoto} 
                alt="Developer" 
                className="w-full h-full "
                referrerPolicy="no-referrer"
              />
              <div className="absolute" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 glass rounded-2xl p-6 hidden md:block">
              <div className="text-4xl font-display font-bold text-accent mb-1">4+</div>
              <div className="text-xl font-mono text-white/60 uppercase tracking-widest">Jahre <br />Erfahrung</div>
              <div className="mt-4 flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-accent rounded-full" />)}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-accent font-mono text-sm uppercase tracking-[0.3em]">Wer ich bin</span>
            </div>
            <h2 className="text-4xl md:text-4xl font-display font-bold mb-8">
              Hallo<br /> mein Name ist Serhii Babych.<br /> Ich bin Frontend-Entwickler mit Fokus auf moderne, benutzerfreundliche Webanwendungen
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Schon seit meiner Schulzeit interessiere ich mich für die Entwicklung von Interfaces.
                Meinen ersten eigenen Website-Prototyp habe ich in der 9. Klasse gebaut – leider habe ich ihn später verloren, 
                weil ich damals noch nicht wusste, wie wichtig Backups sind. 
                Aber genau dieser Moment hat mich geprägt und meine Begeisterung für Webentwicklung geweckt.
              </p>
              <p>
                Heute arbeite ich mit modernen Webtechnologien und entwickle mich kontinuierlich weiter.
              </p>
              <p>
                Mein Ziel ist es, nicht nur funktionierende Interfaces zu bauen, sondern Lösungen, 
                die Menschen wirklich verstehen und gerne nutzen – dabei hilft mir auch mein Hintergrund im Marketing.
              </p>
            </div>
            <div className="cv-link mb-4 flex items-center gap-3 pt-[20px]">
              <a href="/build/Lebenslauf_Serhii_Babych.pdf" target="_blank">
              <img src={PdfImage} alt="Download PDF" width="30" /></a>
              <a href="/public/Lebenslauf_Serhii_Babych.pdf" target="_blank">
              <h3 className="flex items-center gap-2 text-sm font-mono uppercase text-accent">
                  Lebenslauf
                </h3>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section id="stack" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-mono text-xs uppercase tracking-[0.3em] block mb-2"
            >
              Expertise
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">TECH STACK</h2>
          </div>
          <div className="h-px flex-1 bg-white/10 hidden md:block" />
          <p className="max-w-xs text-white/40 text-sm font-mono text-center md:text-right">
            Ständige Weiterentwicklung mit den neuesten Frontend-Technologien und Best Practices.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 255, 65, 0.5)' }}
              className="glass px-6 py-4 rounded-xl flex items-center gap-4 group transition-all duration-300"
            >
              <div className="text-accent group-hover:scale-110 transition-transform">
                <Code2 size={20} />
              </div>
              <span className="font-display font-semibold tracking-tight">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projekte" className="py-32 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] block mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">PROJEKTE</h2>
          </div>
          <p className="max-w-xs text-white/50 text-sm font-mono uppercase tracking-wider">
            Eine Sammlung von Projekten, die meine technische Reise und kreative Vision definieren.
          </p>
        </div>
        
        <div className="space-y-32">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.previewUrl} target="_blank" className="p-4 bg-accent text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={24} />
                    </a>
                    <a href={project.githubUrl} target="_blank" className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <span className="text-accent font-mono text-sm">0{i + 1}</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold">{project.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-6">
                  <a 
                    href={project.previewUrl} 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-accent font-bold group"
                  >
                    ANSEHEN 
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  };

  try {
    setFormState("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Fehler beim Senden");

    // Сначала очищаем форму
    e.currentTarget.reset();

    // Потом меняем состояние на 'sent'
    setFormState("sent");

  } catch (err) {
    console.error(err);
    setFormState("idle"); // можно добавить отдельное состояние 'error'
  }
};

  return (
    <section id="kontakt" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] block mb-4">Kontakt</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">KONTAKT <br />AUFNEHMEN</h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Suchen Sie einen Entwickler für Ihr Team? 
              Oder wollen Sie einfach nur Hallo sagen? Ich bin immer offen für neue Möglichkeiten.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:sergebabych@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Schreiben Sie mir</div>
                  <div className="text-xl font-display font-bold">sergebabych@gmail.com</div>
                </div>
              </a>
              
            </div>
          </div>
          
          <div className="glass p-8 md:p-12 rounded-2xl relative">
            <AnimatePresence mode="wait">
              {formState === 'sent' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">NACHRICHT GESENDET!</h3>
                  <p className="text-white/60">Ich werde mich so schnell wie möglich bei Ihnen melden.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-accent font-mono text-sm uppercase tracking-widest hover:underline"
                  >
                    Weitere Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Name</label>
                      <input 
                        name="name"
                        required
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="Ihre Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Email</label>
                      <input 
                        name="email"
                        required
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="name@beispiel.de"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Betreff</label>
                    <input 
                      name="subject"
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Projektanfrage"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Nachricht</label>
                    <textarea 
                      required
                      name="message"
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Ihre Nachricht..."
                    />
                  </div>
                  <button 
                    disabled={formState === 'sending'}
                    className="w-full py-4 bg-accent text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
                  >
                    {formState === 'sending' ? 'SENDET...' : 'NACHRICHT SENDEN'}
                    <Send size={18} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
          © 2026 SERGE DEV. ALLE RECHTE VORBEHALTEN.
        </div>
        <div className="flex gap-8">
          <a
             href="www.linkedin.com/in/serhii-babych-24251125b"
             className="text-xs font-mono text-white/40 uppercase tracking-widest hover:text-accent transition-colors"
          >
           LinkedIn
          </a>

          <a
           href="https://github.com/SerhiiBab/"
           className="text-xs font-mono text-white/40 uppercase tracking-widest hover:text-accent transition-colors"
          >
           GitHub
          </a>
        </div>
        <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
          ERSTELLT MIT REACT & TAILWIND
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative selection:bg-accent selection:text-black">
      <div className="scanline" />
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
