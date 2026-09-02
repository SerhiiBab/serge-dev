import { Project, Technology } from './types';
import Nutriki from "/nutriki.jpg"
import UrbanStroll from "/urbanstroll.jpg"
import Techfix from "/texfix.jpg"
import PromoHub from "/promo.jpg"

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Retail Promo Hub',
    description: 'Fullstack-B2B-Plattform zur Verwaltung von Aktionsangeboten im Einzelhandel. Lieferanten reichen ihre Produkte für kommende Aktionswochen ein, während Category Manager die Angebote zentral prüfen, freigeben oder ablehnen. Entwickelt mit React, TypeScript, Node.js, Express und PostgreSQL sowie Google OAuth und rollenbasierter Zugriffskontrolle.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Google OAuth', 'REST API'],
    githubUrl: 'https://github.com/SerhiiBab/retail-promo-hub.git',
    previewUrl: 'https://retail-promo-hub.pages.dev',
    imageUrl: PromoHub
  },
  {
    id: '2',
    title: 'NutriKI',
    description: 'NutriKI ist ein KI-gestützter Ernährungstracker zur Analyse und Dokumentation von Nährwerten. Die Anwendung unterstützt Nutzer dabei, insbesondere Kohlenhydrate und weitere Nährstoffe übersichtlich zu erfassen und ihre Ernährung bewusster zu verfolgen.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Node.js', 'Vercel'],
    githubUrl: 'https://github.com/SerhiiBab/nutritrack.git',
    previewUrl: 'https://nutriki.vercel.app/',
    imageUrl: Nutriki
  },  
  {
    id: '3',
    title: 'UrbanStrollL',
    description: 'Mit diesem Projekt wollte ich ein häufiges Problem lösen: die Wahl einer passenden Route für einen Spaziergang – besonders für Menschen, die eine Stadt nicht gut kennen. Die Webanwendung ist mit einem AI-Assistenten verbunden, der auf Basis einer einfachen Nutzeranfrage personalisierte Spazier-Routen erstellt. Der Nutzer beschreibt kurz seine Wünsche, und die AI generiert eine passende Route durch die Stadt.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Node.js', 'Vercel'],
    githubUrl: 'https://github.com/SerhiiBab/urbanstroll.git',
    previewUrl: 'https://urbanstroll.vercel.app/',
    imageUrl: UrbanStroll
  },
  {
    id: '4',
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
  { name: 'Express' },
  { name: 'REST API' },
  { name: 'Framer Motion' },
  { name: 'Vite' },
  { name: 'Git' }
];
