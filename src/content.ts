export type Locale = 'es' | 'en'

export type LocalizedString = Record<Locale, string>

export interface SkillGroup {
  title: LocalizedString
  items: string[]
}

export interface ExperienceRole {
  title: LocalizedString
  period: LocalizedString
  bullets: LocalizedString[]
  impact?: LocalizedString
}

export interface ExperienceCompany {
  company: string
  period: LocalizedString
  location: LocalizedString
  roles: ExperienceRole[]
}

export interface EducationItem {
  title: LocalizedString
  detail: LocalizedString
}

export interface OtherExperience {
  title: string
  period: LocalizedString
  location: LocalizedString
}

export const profile = {
  name: 'Guido Gabriele Peruilh',
  role: {
    es: 'Software Engineer · Backend / Cloud',
    en: 'Software Engineer · Backend / Cloud',
  } satisfies LocalizedString,
  location: {
    es: 'Ciudad Autónoma de Buenos Aires, Argentina',
    en: 'Buenos Aires, Argentina',
  } satisfies LocalizedString,
  email: 'guidogabrielep@gmail.com',
  phone: '+54 11 2409-8679',
  phoneHref: 'tel:+541124098679',
  linkedin: 'https://www.linkedin.com/in/guido-gabriele-peruilh-b48792120/',
  github: 'https://github.com/GuidoGabrielePeruilh',
  cvPdf: '/Guido_Gabriele_Peruilh_CV.pdf',
}

export const summary: LocalizedString = {
  es: 'Software Engineer con foco en desarrollo backend y diseño de sistemas en entornos cloud, principalmente sobre AWS. Construyo microservicios y arquitecturas serverless con Go y C#, orientadas a eventos y pensadas para escalar. Mi paso por roles de Technical Analyst y Operador de Mesa me da una base sólida de negocio para traducir necesidades complejas en soluciones técnicas eficientes.',
  en: 'Software Engineer focused on backend development and cloud system design, primarily on AWS. I build microservices and serverless architectures with Go and C#, event-driven and built to scale. Prior work as a Technical Analyst and trading desk operator gives me a strong business foundation to turn complex needs into efficient technical solutions.',
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['Go', 'C# (.NET Core)', 'SQL avanzado / Advanced SQL'],
  },
  {
    title: { es: 'Cloud e infraestructura', en: 'Cloud & infrastructure' },
    items: [
      'AWS (Lambda, DynamoDB, API Gateway, CloudFormation, SNS, SQS)',
      'Docker',
    ],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['SQL Server', 'PostgreSQL', 'DynamoDB'],
  },
  {
    title: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'Postman', 'NullPlatform', 'New Relic'],
  },
  {
    title: { es: 'Metodologías', en: 'Methodologies' },
    items: ['Scrum (Jira & Confluence)', 'Agile', 'CI/CD'],
  },
  {
    title: { es: 'Proveedores / mercados', en: 'Market providers' },
    items: ['Primary Esco Bolsa', 'BYMA', 'OMS', 'GARA', 'BYMA Market Data'],
  },
]

export const experience: ExperienceCompany[] = [
  {
    company: 'Itti — Ueno Bank',
    period: { es: 'jul. 2026 – actualidad', en: 'Jul 2026 – Present' },
    location: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    roles: [
      {
        title: {
          es: 'Software Engineer | Backend (Go)',
          en: 'Software Engineer | Backend (Go)',
        },
        period: { es: 'jul. 2026 – actualidad', en: 'Jul 2026 – Present' },
        bullets: [
          {
            es: 'Definición y refinamiento de la arquitectura backend, transformando necesidades de negocio en tarjetas técnicas claras para el equipo.',
            en: 'Defined and refined backend architecture, turning business needs into clear technical tickets for the team.',
          },
          {
            es: 'Construcción de microservicios resilientes en Go utilizando agentes de IA para la generación y validación de código.',
            en: 'Built resilient Go microservices using AI agents for code generation and validation.',
          },
          {
            es: 'Desarrollo de Skills personalizadas, mejorando la orquestación y despliegue de aplicaciones.',
            en: 'Developed custom Skills that improved application orchestration and deployment.',
          },
          {
            es: 'Integración de servicios financieros garantizando escalabilidad, observabilidad y adherencia a patrones de arquitectura limpia.',
            en: 'Integrated financial services with scalability, observability, and clean architecture patterns.',
          },
        ],
        impact: {
          es: 'Aceleré los tiempos de entrega (Time-to-Market) mediante el desarrollo asistido por IA y la estandarización de despliegues en NullPlatform.',
          en: 'Shortened time-to-market through AI-assisted development and standardized NullPlatform deployments.',
        },
      },
    ],
  },
  {
    company: 'Ualá Inversiones',
    period: { es: 'jul. 2021 – jul. 2026 (5 años)', en: 'Jul 2021 – Jul 2026 (5 years)' },
    location: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    roles: [
      {
        title: {
          es: 'Software Engineer | Backend (Go, C#)',
          en: 'Software Engineer | Backend (Go, C#)',
        },
        period: { es: 'oct. 2025 – jul. 2026', en: 'Oct 2025 – Jul 2026' },
        bullets: [
          {
            es: 'Diseño y desarrollo de microservicios backend en Go y C#, aplicando principios de arquitectura hexagonal.',
            en: 'Designed and built backend microservices in Go and C# using hexagonal architecture.',
          },
          {
            es: 'Modelado de datos y diseño de persistencia en DynamoDB y Microsoft SQL Server.',
            en: 'Modeled data and persistence layers on DynamoDB and Microsoft SQL Server.',
          },
          {
            es: 'Implementación de integraciones con sistemas externos y servicios financieros.',
            en: 'Implemented integrations with external systems and financial services.',
          },
          {
            es: 'Participación en decisiones técnicas, definición de estándares y buenas prácticas de desarrollo.',
            en: 'Contributed to technical decisions, standards, and engineering best practices.',
          },
          {
            es: 'Optimización de performance y escalabilidad en procesos críticos.',
            en: 'Optimized performance and scalability in critical processes.',
          },
        ],
        impact: {
          es: 'Reducí el tiempo de generación de reportería de 30 días a 5 horas mediante automatización y rediseño del proceso.',
          en: 'Cut reporting generation from 30 days to 5 hours through automation and process redesign.',
        },
      },
      {
        title: {
          es: 'Technical Analyst Ssr.',
          en: 'Senior Technical Analyst',
        },
        period: { es: 'sept. 2023 – sept. 2025', en: 'Sep 2023 – Sep 2025' },
        bullets: [
          {
            es: 'Análisis y detección de fallas en procesos y tareas manuales de usuarios internos.',
            en: 'Analyzed and detected failures in internal processes and manual workflows.',
          },
          {
            es: 'Relevamiento de necesidades junto a usuarios internos y equipos de negocio.',
            en: 'Gathered requirements with internal users and business teams.',
          },
          {
            es: 'Diseño funcional de soluciones técnicas (flujos, tablas y contratos de APIs).',
            en: 'Produced functional designs for technical solutions (flows, tables, and API contracts).',
          },
          {
            es: 'Desarrollo de automatizaciones y herramientas internas en Go y C#.',
            en: 'Built internal automations and tools in Go and C#.',
          },
          {
            es: 'Seguimiento y control post-implementación.',
            en: 'Owned post-implementation follow-up and control.',
          },
          {
            es: 'Liderazgo de desarrollos express ante cambios normativos que garantizaron cumplimiento regulatorio.',
            en: 'Led express deliveries for regulatory changes that kept operations compliant.',
          },
        ],
        impact: {
          es: 'Logré implementar una solución en pocas horas posterior a la quita del parking, sin interrumpir la operatoria.',
          en: 'Shipped a fix within hours after parking removal without interrupting operations.',
        },
      },
      {
        title: {
          es: 'Trading Desk',
          en: 'Trading Desk',
        },
        period: { es: 'jul. 2021 – sept. 2023', en: 'Jul 2021 – Sep 2023' },
        bullets: [
          {
            es: 'Operación de mesa con foco en automatización de controles y procesos operativos.',
            en: 'Ran desk operations with a focus on automating controls and operational processes.',
          },
          {
            es: 'Uso de APIs (Postman) y desarrollo en Python para optimizar operaciones.',
            en: 'Used APIs (Postman) and Python to optimize day-to-day operations.',
          },
          {
            es: 'Análisis de datos para identificar oportunidades de inversión y reportería para C-Level (PowerBI).',
            en: 'Analyzed data for investment opportunities and C-level reporting (Power BI).',
          },
          {
            es: 'Operación de posición y ejecución en EOMM+, OMS, SENEBI/SISTACO, TWS.',
            en: 'Managed position and execution across EOMM+, OMS, SENEBI/SISTACO, and TWS.',
          },
        ],
      },
    ],
  },
  {
    company: 'Bull Market Brokers S.A.',
    period: { es: 'jul. 2019 – jul. 2021 (2 años)', en: 'Jul 2019 – Jul 2021 (2 years)' },
    location: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    roles: [
      {
        title: {
          es: 'Trading Desk',
          en: 'Trading Desk',
        },
        period: { es: 'jul. 2019 – jul. 2021', en: 'Jul 2019 – Jul 2021' },
        bullets: [
          {
            es: 'Uso de Python y SQL para soporte de análisis y toma de decisiones.',
            en: 'Used Python and SQL to support analysis and decision-making.',
          },
          {
            es: 'Manejo de plataformas: E-Trader, Millenium, Sicolp, Senebi.',
            en: 'Operated platforms including E-Trader, Millenium, Sicolp, and Senebi.',
          },
        ],
      },
    ],
  },
]

export const otherExperience: OtherExperience[] = [
  {
    title: 'Line Server — Work & Travel',
    period: { es: 'dic. 2018 – mar. 2019', en: 'Dec 2018 – Mar 2019' },
    location: {
      es: 'South Lake Tahoe, USA',
      en: 'South Lake Tahoe, USA',
    },
  },
  {
    title: 'InvertirOnline.com — Asesor Comercial',
    period: { es: 'oct. 2017 – nov. 2018 (1 año)', en: 'Oct 2017 – Nov 2018 (1 year)' },
    location: {
      es: 'Buenos Aires, Argentina',
      en: 'Buenos Aires, Argentina',
    },
  },
]

export const education: EducationItem[] = [
  {
    title: {
      es: 'Escuela Da Vinci — Diseño y Programación de Videojuegos',
      en: 'Escuela Da Vinci — Game Design & Programming',
    },
    detail: {
      es: '2021 – actualidad · C#, Unity, Unreal Engine, trabajo en equipo. Juegos publicados: Imaginary Work',
      en: '2021 – Present · C#, Unity, Unreal Engine, teamwork. Published games: Imaginary Work',
    },
  },
  {
    title: {
      es: 'Universidad de Buenos Aires — Lic. en Actuario en Administración',
      en: 'University of Buenos Aires — Actuarial Science (Administration)',
    },
    detail: {
      es: '2016 – 2022, cursado avanzado · 31 de 36 materias aprobadas',
      en: '2016 – 2022, advanced coursework · 31 of 36 courses completed',
    },
  },
  {
    title: {
      es: 'Idoneidad en Mercado de Capitales',
      en: 'Capital Markets Suitability Certification',
    },
    detail: {
      es: '2017 – 2026',
      en: '2017 – 2026',
    },
  },
  {
    title: {
      es: 'Instituto I. Luis A. Huergo — Bachiller en Gestión y Comercialización',
      en: 'Instituto I. Luis A. Huergo — Bachelor in Management & Marketing',
    },
    detail: {
      es: '2011 – 2015',
      en: '2011 – 2015',
    },
  },
]

export const ui = {
  navSummary: { es: 'Resumen', en: 'Summary' },
  navSkills: { es: 'Skills', en: 'Skills' },
  navExperience: { es: 'Experiencia', en: 'Experience' },
  navEducation: { es: 'Educación', en: 'Education' },
  navContact: { es: 'Contacto', en: 'Contact' },
  downloadCv: { es: 'Descargar CV (PDF)', en: 'Download CV (PDF)' },
  viewLinkedIn: { es: 'LinkedIn', en: 'LinkedIn' },
  summaryTitle: { es: 'Resumen profesional', en: 'Professional summary' },
  skillsTitle: { es: 'Habilidades técnicas', en: 'Technical skills' },
  experienceTitle: { es: 'Experiencia profesional', en: 'Professional experience' },
  otherTitle: { es: 'Otras experiencias', en: 'Other experience' },
  educationTitle: { es: 'Educación', en: 'Education' },
  contactTitle: { es: 'Contacto', en: 'Contact' },
  impactLabel: { es: 'Impacto', en: 'Impact' },
  languageLabel: { es: 'Idioma', en: 'Language' },
  footer: {
    es: 'Diseñado como presentación de CV · Guido Gabriele Peruilh',
    en: 'Built as a CV presentation · Guido Gabriele Peruilh',
  },
} as const
