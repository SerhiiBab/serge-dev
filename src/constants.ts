import { Project, Technology } from './types';
import Nutriki from "/public/nutriki.jpg"
import UrbanStroll from "/public/urbanstroll.jpg"
import Techfix from "/public/texfix.jpg"

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NutriKI',
    description: 'Die Idee zu diesem Projekt entstand aus persönlicher Erfahrung, da ein Familienmitglied an Diabetes leidet. Deshalb wollte ich ein Tool entwickeln, das mithilfe von KI dabei hilft,, den Kohlenhydratgehalt von Lebensmitteln besser zu verfolgen. Im Laufe der Entwicklung hat sich die Anwendung zu einem allgemeinen Ernährungstracker weiterentwickelt, der allen Nutzern hilft, ihre Nährstoffaufnahme bewusster zu kontrollieren.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Node.js', 'Vercel'],
    githubUrl: 'https://github.com/SerhiiBab/nutritrack.git',
    previewUrl: 'https://nutriki.vercel.app/',
    imageUrl: Nutriki
  },
  {
    id: '2',
    title: 'UrbanStroll',
    description: 'Mit diesem Projekt wollte ich ein häufiges Problem lösen: die Wahl einer passenden Route für einen Spaziergang – besonders für Menschen, die eine Stadt nicht gut kennen. Die Webanwendung ist mit einem AI-Assistenten verbunden, der auf Basis einer einfachen Nutzeranfrage personalisierte Spazier-Routen erstellt. Der Nutzer beschreibt kurz seine Wünsche, und die AI generiert eine passende Route durch die Stadt.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Node.js', 'Vercel'],
    githubUrl: 'https://github.com/SerhiiBab/urbanstroll.git',
    previewUrl: 'https://urbanstroll.vercel.app/',
    imageUrl: UrbanStroll
  },
  {
    id: '3',
    title: 'TechFix Service',
    description: 'Mit diesem Projekt habe ich eine moderne Website für ein Servicezentrum zur Reparatur von Haushalts- und Elektronikgeräten entwickelt. Ziel war es, eine übersichtliche und benutzerfreundliche Plattform zu schaffen, über die Kunden schnell Hilfe bei technischen Problemen finden können. Die Anwendung wurde mit React entwickelt und nutzt React Router für eine strukturierte Navigation. In das Kontaktformular ist zudem ein AI-Assistent integriert, der die vom Nutzer beschriebene Störung vorab analysiert und erste Empfehlungen sowie eine grobe Einschätzung des möglichen Schadens gibt.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind',  'Node.js', 'Vercel'],
    githubUrl: 'https://github.com/SerhiiBab/techfix-pro.git',
    previewUrl: 'https://techfixservice.vercel.app/',
    imageUrl: Techfix
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'Node.js' },
  { name: 'RESTful API' },
  { name: 'Framer Motion' },
  { name: 'Vite' },
  { name: 'Git' },
  { name: 'Docker' }
];
