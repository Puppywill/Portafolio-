// Interface strings for every language. Section content (experience, projects,
// education, skills) lives next to its component as { en, es } pairs.

export const languages = { en: "English", es: "Español" } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

/** A value written once per language */
export type Localized<T = string> = Record<Lang, T>;

export function getLang(locale: string | undefined): Lang {
  return locale === "es" ? "es" : "en";
}

/** Home page URL for a language, optionally with a #section */
export function homePath(lang: Lang, hash = ""): string {
  return (lang === defaultLang ? "/" : `/${lang}/`) + hash;
}

export const ui = {
  en: {
    "meta.title": "William A. Rosado Pérez — Software Developer & IT Support",
    "meta.description":
      "Software Developer and IT Support professional from Bayamón, Puerto Rico with a B.S. in Computer Science. Explore projects in Python, JavaScript, and SQL Server, including Puppywill AI Clipper.",
    "meta.ogLocale": "en_US",
    "meta.ogImageAlt": "William A. Rosado Pérez — Software Developer portfolio",

    "a11y.skip": "Skip to content",
    "a11y.mainNav": "Main",
    "a11y.language": "Language",
    "a11y.backToTop": "Back to top",
    "a11y.socialLinks": "Social links",
    "a11y.profiles": "Profiles",
    "a11y.highlights": "Highlights",
    "a11y.technologies": "Technologies",
    "a11y.techAndSkills": "Technologies and skills",
    "a11y.keyFeatures": "Key features",
    "a11y.availableBadge": "Available to work — view my LinkedIn profile",
    "a11y.screenshotOf": "Screenshot of",
    "a11y.enlargeScreenshot": "Enlarge screenshot of",
    "a11y.projectScreenshot": "Project screenshot",
    "a11y.close": "Close",
    "a11y.emailCopied": "Email address copied to clipboard",

    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.available": "Available To Work",
    "hero.location": "Bayamón, Puerto Rico",
    "hero.greeting": "Hi, I'm William A. Rosado Pérez",
    "hero.role": "Software Developer & IT Support",
    "hero.bio":
      "I build desktop and web applications with Python, JavaScript, and SQL Server, and I currently provide help desk and database support at Solutions by Design. B.S. in Computer Science from the Inter American University of Puerto Rico (2020–2024).",
    "hero.highlight.degree": "B.S. Computer Science",
    "hero.highlight.cert": "Google Cybersecurity Certificate",
    "hero.highlight.bilingual": "Bilingual · English / Spanish",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    "cta.downloadCv": "Download CV",

    "experience.eyebrow": "Career",
    "experience.title": "Experience",
    "experience.current": "Current",

    "projects.eyebrow": "Portfolio",
    "projects.title": "Projects",
    "projects.subtitle":
      "Desktop, web, and database projects — from a GPU-accelerated video analysis app to a full-stack help desk system.",
    "projects.featured": "Featured Project",
    "projects.viewFullSize": "View full size",
    "projects.download": "Download for Windows",
    "projects.viewCode": "View Code",
    "projects.viewOnGithub": "View on GitHub",
    "projects.liveDemo": "Live Demo",
    "projects.moreOn": "More work on",

    "education.eyebrow": "Background",
    "education.title": "Education & Certifications",
    "education.viewCertificate": "View Certificate",
    "education.verifyCertificate": "View Certificate — official verification on Coursera",

    "skills.eyebrow": "Toolbox",
    "skills.title": "Skills & Tools",

    "contact.eyebrow": "Contact",
    "contact.title": "Interested in working together?",
    "contact.text":
      "I’m open to collaborations, freelance work, or full-time roles. The fastest way to reach me is by email.",
    "contact.based": "Based in Bayamón, Puerto Rico",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",
    "contact.send": "Send me a message",

    "footer.builtWith": "Built with Astro & Tailwind CSS",

    "notFound.title": "Page not found · William A. Rosado Pérez",
    "notFound.description": "The page you’re looking for doesn’t exist.",
    "notFound.heading": "Page not found",
    "notFound.text": "Oops! The page you’re looking for doesn’t exist.",
    "notFound.back": "Back to Home",
  },
  es: {
    "meta.title": "William A. Rosado Pérez — Desarrollador de Software y Soporte IT",
    "meta.description":
      "Desarrollador de software y profesional de soporte IT de Bayamón, Puerto Rico, con un B.S. en Ciencias de Computadoras. Explora proyectos en Python, JavaScript y SQL Server, incluido Puppywill AI Clipper.",
    "meta.ogLocale": "es_LA",
    "meta.ogImageAlt": "William A. Rosado Pérez — Portafolio de desarrollador de software",

    "a11y.skip": "Saltar al contenido",
    "a11y.mainNav": "Principal",
    "a11y.language": "Idioma",
    "a11y.backToTop": "Volver arriba",
    "a11y.socialLinks": "Redes sociales",
    "a11y.profiles": "Perfiles",
    "a11y.highlights": "Aspectos destacados",
    "a11y.technologies": "Tecnologías",
    "a11y.techAndSkills": "Tecnologías y habilidades",
    "a11y.keyFeatures": "Funciones principales",
    "a11y.availableBadge": "Disponible para trabajar — ver mi perfil de LinkedIn",
    "a11y.screenshotOf": "Captura de",
    "a11y.enlargeScreenshot": "Ampliar captura de",
    "a11y.projectScreenshot": "Captura del proyecto",
    "a11y.close": "Cerrar",
    "a11y.emailCopied": "Correo electrónico copiado al portapapeles",

    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    "hero.available": "Disponible para trabajar",
    "hero.location": "Bayamón, Puerto Rico",
    "hero.greeting": "Hola, soy William A. Rosado Pérez",
    "hero.role": "Desarrollador de Software y Soporte IT",
    "hero.bio":
      "Desarrollo aplicaciones de escritorio y web con Python, JavaScript y SQL Server, y actualmente brindo soporte de help desk y bases de datos en Solutions by Design. B.S. en Ciencias de Computadoras de la Universidad Interamericana de Puerto Rico (2020–2024).",
    "hero.highlight.degree": "B.S. en Ciencias de Computadoras",
    "hero.highlight.cert": "Google Cybersecurity Certificate",
    "hero.highlight.bilingual": "Bilingüe · Inglés / Español",
    "hero.viewProjects": "Ver proyectos",
    "hero.contactMe": "Contáctame",

    "cta.downloadCv": "Descargar CV",

    "experience.eyebrow": "Trayectoria",
    "experience.title": "Experiencia",
    "experience.current": "Actual",

    "projects.eyebrow": "Portafolio",
    "projects.title": "Proyectos",
    "projects.subtitle":
      "Proyectos de escritorio, web y bases de datos — desde una app de análisis de video acelerada por GPU hasta un sistema de help desk full-stack.",
    "projects.featured": "Proyecto destacado",
    "projects.viewFullSize": "Ver en tamaño completo",
    "projects.download": "Descargar para Windows",
    "projects.viewCode": "Ver código",
    "projects.viewOnGithub": "Ver en GitHub",
    "projects.liveDemo": "Demo en vivo",
    "projects.moreOn": "Más proyectos en",

    "education.eyebrow": "Formación",
    "education.title": "Educación y certificaciones",
    "education.viewCertificate": "Ver certificado",
    "education.verifyCertificate": "Ver certificado — verificación oficial en Coursera",

    "skills.eyebrow": "Herramientas",
    "skills.title": "Habilidades y herramientas",

    "contact.eyebrow": "Contacto",
    "contact.title": "¿Te interesa trabajar conmigo?",
    "contact.text":
      "Estoy disponible para colaboraciones, trabajos freelance o empleos a tiempo completo. La forma más rápida de contactarme es por correo electrónico.",
    "contact.based": "Ubicado en Bayamón, Puerto Rico",
    "contact.copy": "Copiar",
    "contact.copied": "¡Copiado!",
    "contact.send": "Envíame un mensaje",

    "footer.builtWith": "Hecho con Astro y Tailwind CSS",

    "notFound.title": "Página no encontrada · William A. Rosado Pérez",
    "notFound.description": "La página que buscas no existe.",
    "notFound.heading": "Página no encontrada",
    "notFound.text": "¡Uy! La página que buscas no existe.",
    "notFound.back": "Volver al inicio",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
