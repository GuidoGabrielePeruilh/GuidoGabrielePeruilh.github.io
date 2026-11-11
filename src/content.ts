export type Locale = 'es' | 'en'

export type LocalizedString = Record<Locale, string>

export interface SkillItem {
  label: LocalizedString
  highlight?: boolean
}

export interface SkillGroup {
  title: LocalizedString
  description: LocalizedString
  items: SkillItem[]
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

export interface Milestone {
  title: LocalizedString
  summary: LocalizedString
  highlights: LocalizedString[]
}

export const profile = {
  name: 'Guido Gabriele Peruilh',
  role: {
    es: 'Software Engineer · Backend / Cloud',
    en: 'Software Engineer · Backend / Cloud',
  } satisfies LocalizedString,
  headline: {
    es: 'Bridge negocio ↔ tech en productos de inversión: de la necesidad de mesa y producto al backend en producción.',
    en: 'Business ↔ tech bridge for investment products: from desk and product needs to production backend.',
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
  es: 'Software Engineer Ssr. con foco en ownership de backend Go/AWS para productos de inversión bancarios y mercado de capitales. No me limito a entregar código: priorizo entender el negocio para que la solución sea consistente con lo que producto y operaciones realmente necesitan. Vengo de mesa de trading y análisis técnico, así que hablo de igual a igual con POs y negocio, y traduzco eso en microservicios, flujos event-driven y controles operativos.',
  en: 'Software Engineer (mid-senior) focused on Go/AWS backend ownership for banking investment products and capital markets. I do not stop at shipping code: I prioritize understanding the business so the delivery matches what product and operations actually need. With a trading-desk and technical-analysis background, I work peer-to-peer with POs and business stakeholders, and turn that into microservices, event-driven flows, and operational controls.',
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    description: {
      es: 'Stack principal de backend y automatización.',
      en: 'Primary backend and automation stack.',
    },
    items: [
      { label: { es: 'Go', en: 'Go' }, highlight: true },
      { label: { es: 'C#', en: 'C#' }, highlight: true },
      { label: { es: 'SQL', en: 'SQL' } },
      { label: { es: 'Python', en: 'Python' } },
    ],
  },
  {
    title: { es: 'Cloud e infraestructura', en: 'Cloud & infrastructure' },
    description: {
      es: 'Servicios AWS y plataformas de deploy en producción.',
      en: 'AWS services and production deploy platforms.',
    },
    items: [
      { label: { es: 'AWS Lambda', en: 'AWS Lambda' }, highlight: true },
      { label: { es: 'SNS / SQS', en: 'SNS / SQS' }, highlight: true },
      { label: { es: 'API Gateway', en: 'API Gateway' }, highlight: true },
      { label: { es: 'S3', en: 'S3' } },
      { label: { es: 'CloudFormation', en: 'CloudFormation' } },
      { label: { es: 'CloudWatch', en: 'CloudWatch' } },
      { label: { es: 'Docker', en: 'Docker' } },
      { label: { es: 'NullPlatform', en: 'NullPlatform' }, highlight: true },
    ],
  },
  {
    title: { es: 'Datos y arquitectura', en: 'Data & architecture' },
    description: {
      es: 'Persistencia, patrones, observabilidad y calidad.',
      en: 'Persistence, patterns, observability, and quality.',
    },
    items: [
      { label: { es: 'DynamoDB', en: 'DynamoDB' }, highlight: true },
      { label: { es: 'Event-driven', en: 'Event-driven' }, highlight: true },
      {
        label: { es: 'Arquitectura hexagonal', en: 'Hexagonal architecture' },
        highlight: true,
      },
      { label: { es: 'SQL Server', en: 'SQL Server' } },
      { label: { es: 'PostgreSQL', en: 'PostgreSQL' } },
      { label: { es: 'Testing (unit / integration / QA)', en: 'Testing (unit / integration / QA)' } },
      { label: { es: 'New Relic', en: 'New Relic' } },
      { label: { es: 'CI/CD', en: 'CI/CD' } },
    ],
  },
  {
    title: { es: 'Dominio de mercados', en: 'Capital markets domain' },
    description: {
      es: 'Operatoria financiera y proveedores de mercado.',
      en: 'Financial operations and market providers.',
    },
    items: [
      { label: { es: 'MEP / ABC', en: 'MEP / ABC' } },
      {
        label: { es: 'Liquidación y conciliación', en: 'Settlement & reconciliation' },
      },
      {
        label: { es: 'Backoffice de inversiones', en: 'Investments backoffice' },
      },
      { label: { es: 'Primary Esco Bolsa', en: 'Primary Esco Bolsa' }, highlight: true },
      { label: { es: 'OMS / GARA / Market Data', en: 'OMS / GARA / Market Data' }, highlight: true },
    ],
  },
]

export const milestones: Milestone[] = [
  {
    title: {
      es: 'Resúmenes de cuenta a escala (~2M/mes)',
      en: 'Account statements at scale (~2M/month)',
    },
    summary: {
      es: 'Automatización end-to-end del envío de resúmenes de cuenta con arquitectura event-driven sobre AWS.',
      en: 'End-to-end automation of account-statement delivery with an event-driven architecture on AWS.',
    },
    highlights: [
      {
        es: 'Pipelines desacoplados: elegibilidad de clientes, armado de datos de cuenta, generación de PDF y envío de mail.',
        en: 'Decoupled pipelines: client eligibility, account data assembly, PDF generation, and email delivery.',
      },
      {
        es: 'Estado y orquestación en DynamoDB; fan-out/fan-in con SNS y SQS.',
        en: 'State and orchestration on DynamoDB; fan-out/fan-in with SNS and SQS.',
      },
      {
        es: 'Impacto operativo: de un proceso pesado a un flujo continuo capaz de absorber ~2 millones de envíos mensuales.',
        en: 'Operational impact: from a heavy process to a continuous flow that absorbs ~2 million monthly sends.',
      },
    ],
  },
  {
    title: {
      es: 'Quita del parking MEP (BCRA) en horas',
      en: 'MEP parking removal (BCRA) in hours',
    },
    summary: {
      es: 'Cuando el BCRA eliminó el parking un viernes al cierre, el sistema no estaba listo para compra-venta inmediata. Entregamos un bypass operativo para el lunes.',
      en: 'When the BCRA removed parking on a Friday close, the system was not ready for same-session buy/sell. We shipped an operational bypass for Monday.',
    },
    highlights: [
      {
        es: 'Antes: comprabas el bono en T0 y recién podías vender en T1. Después: compra y venta en el mismo momento.',
        en: 'Before: buy the bond at T0 and sell only at T1. After: buy and sell in the same session.',
      },
      {
        es: 'Cambiamos la venta para buscar operaciones del día (no del anterior) y reprocesar pendientes cada pocos minutos.',
        en: 'Updated sell flow to look up same-day operations (not prior day) and reprocess pending sells every few minutes.',
      },
      {
        es: 'Evité ~1 semana de bloqueo: el lunes los clientes operaron sin restricción mientras se cerraba la solución definitiva.',
        en: 'Avoided ~1 week of blockage: Monday clients traded without restriction while the durable fix landed.',
      },
    ],
  },
  {
    title: {
      es: 'Delivery asistido por IA con guardrails en NullPlatform',
      en: 'AI-assisted delivery with NullPlatform guardrails',
    },
    summary: {
      es: 'Automatizé parte del ciclo de merge/deploy para que el código nuevo no llegue a producción sin su configuración asociada.',
      en: 'Automated part of the merge/deploy loop so new code does not reach production without its matching configuration.',
    },
    highlights: [
      {
        es: 'Agents/skills revisan el diff, detectan parámetros o servicios faltantes en NullPlatform y los crean o actualizan en dev.',
        en: 'Agents/skills review the diff, detect missing NullPlatform parameters or services, and create or update them in dev.',
      },
      {
        es: 'En producción el cambio de config queda bloqueado hasta aprobación explícita: velocidad sin saltarse el control.',
        en: 'In production, config changes stay blocked until explicit approval: speed without skipping control.',
      },
      {
        es: 'Resultado: menos incidentes por deploys incompletos y PRs de 2–8 SP listos con evidencias en 1–3 días.',
        en: 'Result: fewer incidents from incomplete deploys, and 2–8 SP PRs ready with evidence in 1–3 days.',
      },
    ],
  },
  {
    title: {
      es: 'Conciliación triple + MEP automatizado en mesa',
      en: 'Triple reconciliation + automated MEP desk sells',
    },
    summary: {
      es: 'Controles operativos y de datos que unen app, backoffice y mercado — más automatización de ventas MEP del lado de mesa.',
      en: 'Operational and data controls linking app, backoffice, and market — plus automated MEP sells on the desk side.',
    },
    highlights: [
      {
        es: 'Flujo de conciliación que cruza lo operado en la app vs backoffice vs mercado; si no calza, alerta con la diferencia exacta.',
        en: 'Reconciliation flow crossing app vs backoffice vs market activity; on mismatch, alerts with the exact delta.',
      },
      {
        es: 'En MEP, la app enviaba la compra y la mesa la venta del bono: pasé de venta orden a orden a envíos masivos con controles pre/post.',
        en: 'For MEP, the app sent the buy and the desk the bond sell: moved from one-by-one sells to bulk sends with pre/post controls.',
      },
      {
        es: 'Migración de stored procedures de SQL Server a código para bajar riesgo de cambios sin trazabilidad y permisos amplios.',
        en: 'Migrated SQL Server stored procedures into application code to cut risk from broad permissions and untraceable changes.',
      },
    ],
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
            es: 'Ownership técnico en productos de inversión bancarios: plazos fijos, cuentas remuneradas y planes de inversión.',
            en: 'Technical ownership on banking investment products: fixed-term deposits, interest-bearing accounts, and investment plans.',
          },
          {
            es: 'Defino y refino arquitectura backend en Go, traduciendo necesidades de negocio/producto a tickets técnicos accionables.',
            en: 'Define and refine Go backend architecture, turning business/product needs into actionable technical tickets.',
          },
          {
            es: 'Construyo microservicios e integraciones financieras con foco en escalabilidad, observabilidad y arquitectura limpia.',
            en: 'Build financial microservices and integrations with focus on scalability, observability, and clean architecture.',
          },
          {
            es: 'Desarrollé Skills de IA para estandarizar creación/revisión de PRs y para detectar/crear parámetros y servicios en NullPlatform (auto en dev, aprobación en prod).',
            en: 'Built AI Skills to standardize PR creation/review and to detect/create NullPlatform parameters and services (auto in dev, approval in prod).',
          },
          {
            es: 'Armé dashboards en New Relic para visibilidad operativa de los productos de Ueno.',
            en: 'Built New Relic dashboards for operational visibility across Ueno products.',
          },
        ],
        impact: {
          es: 'Menos errores productivos por configs faltantes en NullPlatform, y PRs de tareas 2–8 SP listos con evidencias en 1–3 días.',
          en: 'Fewer production errors from missing NullPlatform config, and 2–8 SP task PRs ready with evidence in 1–3 days.',
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
            es: 'Backend de compra/venta MEP y ABC, liquidación de operaciones, control de órdenes y gestión de posiciones para resúmenes de cuenta.',
            en: 'Backend for MEP and ABC buy/sell, trade settlement, order control, and position management for account statements.',
          },
          {
            es: 'Integraciones con proveedores de mercado (BYMA, Primary Esco Bolsa) y flujos de backoffice / conciliación de operaciones.',
            en: 'Integrations with market providers (BYMA, Primary Esco Bolsa) plus backoffice flows and trade reconciliation.',
          },
          {
            es: 'Automatización event-driven de resúmenes de cuenta (~2M envíos/mes): elegibilidad → datos → PDF → mail, con estado en DynamoDB y orquestación SNS/SQS.',
            en: 'Event-driven automation of account statements (~2M sends/month): eligibility → data → PDF → email, with DynamoDB state and SNS/SQS orchestration.',
          },
          {
            es: 'Microservicios en Go y C# con arquitectura hexagonal; persistencia en DynamoDB y SQL Server.',
            en: 'Go and C# microservices with hexagonal architecture; persistence on DynamoDB and SQL Server.',
          },
          {
            es: 'Impulsé migrar stored procedures de SQL Server al código de aplicación para reducir riesgo (permisos amplios, cambios sin historial) aunque el ciclo de PR/deploy sea más largo.',
            en: 'Drove migrating SQL Server stored procedures into application code to cut risk (broad permissions, untraceable changes) even if PR/deploy cycles take longer.',
          },
        ],
        impact: {
          es: 'Reportería/resúmenes: de un proceso de ~30 días a ~5 horas mediante rediseño event-driven y automatización.',
          en: 'Statements/reporting: from a ~30-day process to ~5 hours via event-driven redesign and automation.',
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
            es: 'Puente negocio ↔ tech: relevo con usuarios internos/equipos de negocio y diseño funcional de flujos, tablas y soluciones.',
            en: 'Business ↔ tech bridge: gather needs with internal users/business teams and produce functional designs for flows, tables, and solutions.',
          },
          {
            es: 'Diseñé un flujo de conciliación que consulta APIs y bases, cruza app vs backoffice vs mercado y alerta con la diferencia exacta.',
            en: 'Designed a reconciliation flow that queries APIs and databases, crosses app vs backoffice vs market, and alerts with the exact delta.',
          },
          {
            es: 'Desarrollé automatizaciones y herramientas internas en Go y C#; seguimiento post-implementación.',
            en: 'Built internal automations and tools in Go and C#; owned post-implementation follow-up.',
          },
          {
            es: 'Lideré el bypass express cuando el BCRA quitó el parking MEP un viernes al cierre: venta same-day + reproceso de pendientes para operar el lunes sin restricción.',
            en: 'Led the express bypass when the BCRA removed MEP parking on a Friday close: same-day sell + pending reprocessing so Monday trading stayed unrestricted.',
          },
        ],
        impact: {
          es: 'Evité ~1 semana de imposibilidad operativa post-parking: el lunes los clientes pudieron operar mientras se cerraba la solución definitiva.',
          en: 'Avoided ~1 week of operational blockage after parking removal: Monday clients could trade while the durable fix landed.',
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
            es: 'Operación de mesa con foco en automatizar controles y procesos (MEP: la app compraba; la mesa vendía el bono por el parking).',
            en: 'Desk operations focused on automating controls and processes (MEP: the app bought; the desk sold the bond due to parking).',
          },
          {
            es: 'Automatizé la venta MEP: de orden-a-orden a envíos masivos con controles previos y posteriores de confirmación.',
            en: 'Automated MEP sells: from order-by-order to bulk sends with pre-trade and post-trade confirmation controls.',
          },
          {
            es: 'APIs (Postman) y Python para optimizar operatoria; reportería para C-Level con Power BI.',
            en: 'APIs (Postman) and Python to optimize operations; C-level reporting with Power BI.',
          },
          {
            es: 'Ejecución y posición en EOMM+, OMS, SENEBI/SISTACO y TWS.',
            en: 'Execution and position management across EOMM+, OMS, SENEBI/SISTACO, and TWS.',
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
            es: 'Base de dominio de mercado de capitales: operatoria diaria y uso de Python/SQL para análisis y decisión.',
            en: 'Capital-markets domain foundation: day-to-day trading ops plus Python/SQL for analysis and decisions.',
          },
          {
            es: 'Plataformas: E-Trader, Millenium, Sicolp y Senebi.',
            en: 'Platforms: E-Trader, Millenium, Sicolp, and Senebi.',
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
  navSummary: { es: 'Resumen', en: 'About' },
  navMilestones: { es: 'Hitos', en: 'Milestones' },
  navSkills: { es: 'Skills', en: 'Skills' },
  navExperience: { es: 'Experiencia', en: 'Experience' },
  navEducation: { es: 'Educación', en: 'Education' },
  navContact: { es: 'Contacto', en: 'Contact' },
  downloadCv: { es: 'Descargar CV (PDF)', en: 'Download CV (PDF)' },
  viewLinkedIn: { es: 'LinkedIn', en: 'LinkedIn' },
  summaryTitle: { es: 'Sobre mí', en: 'About me' },
  milestonesTitle: { es: 'Hitos de ingeniería', en: 'Engineering milestones' },
  skillsTitle: { es: 'Stack y dominio', en: 'Stack & domain' },
  experienceTitle: { es: 'Experiencia', en: 'Experience' },
  otherTitle: { es: 'Otras experiencias', en: 'Other experience' },
  educationTitle: { es: 'Educación', en: 'Education' },
  contactTitle: { es: 'Contacto', en: 'Contact' },
  contactChannelsTitle: { es: 'Canales directos', en: 'Direct channels' },
  contactChannelsLead: {
    es: 'Elegí cómo querés conectar — reviso estos canales a diario.',
    en: 'Pick how you want to connect — I check these channels daily.',
  },
  contactEmailLabel: { es: 'Email', en: 'Email' },
  contactPhoneLabel: { es: 'Teléfono', en: 'Phone' },
  contactLinkedInLabel: { es: 'LinkedIn', en: 'LinkedIn' },
  contactGitHubLabel: { es: 'GitHub', en: 'GitHub' },
  contactCopy: { es: 'Copiar', en: 'Copy' },
  contactCopied: { es: 'Copiado', en: 'Copied' },
  contactCall: { es: 'Llamar', en: 'Call' },
  contactViewProfile: { es: 'Ver perfil', en: 'View profile' },
  impactLabel: { es: 'Impacto', en: 'Impact' },
  languageLabel: { es: 'Idioma', en: 'Language' },
  footer: {
    es: 'Backend Go/AWS · bridge negocio ↔ tech · Guido Gabriele Peruilh',
    en: 'Go/AWS backend · business ↔ tech bridge · Guido Gabriele Peruilh',
  },
} as const
