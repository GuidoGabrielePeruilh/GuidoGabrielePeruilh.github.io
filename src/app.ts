import {
  education,
  experience,
  otherExperience,
  profile,
  skillGroups,
  summary,
  ui,
  type Locale,
} from './content'
import { getInitialLocale, persistLocale, t } from './i18n'

let locale: Locale = getInitialLocale()

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function renderSkills(): string {
  return skillGroups
    .map(
      (group) => `
      <div class="skill-group reveal">
        <h3>${escapeHtml(t(group.title, locale))}</h3>
        <ul>
          ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </div>`,
    )
    .join('')
}

function renderExperience(): string {
  return experience
    .map((company) => {
      const roles = company.roles
        .map((role) => {
          const bullets = role.bullets
            .map((bullet) => `<li>${escapeHtml(t(bullet, locale))}</li>`)
            .join('')
          const impact = role.impact
            ? `<p class="impact"><span>${escapeHtml(t(ui.impactLabel, locale))}:</span> ${escapeHtml(t(role.impact, locale))}</p>`
            : ''
          return `
            <article class="role">
              <div class="role-head">
                <h3>${escapeHtml(t(role.title, locale))}</h3>
                <p class="meta">${escapeHtml(t(role.period, locale))}</p>
              </div>
              <ul>${bullets}</ul>
              ${impact}
            </article>`
        })
        .join('')

      return `
        <div class="company reveal">
          <div class="company-head">
            <h3>${escapeHtml(company.company)}</h3>
            <p class="meta">${escapeHtml(t(company.period, locale))} · ${escapeHtml(t(company.location, locale))}</p>
          </div>
          ${roles}
        </div>`
    })
    .join('')
}

function renderOther(): string {
  return otherExperience
    .map(
      (item) => `
      <li class="reveal">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(t(item.period, locale))} · ${escapeHtml(t(item.location, locale))}</span>
      </li>`,
    )
    .join('')
}

function renderEducation(): string {
  return education
    .map(
      (item) => `
      <li class="reveal">
        <strong>${escapeHtml(t(item.title, locale))}</strong>
        <span>${escapeHtml(t(item.detail, locale))}</span>
      </li>`,
    )
    .join('')
}

function renderApp(): string {
  return `
  <div class="page-bg" aria-hidden="true"></div>
  <header class="site-header">
    <a class="brand-mark" href="#top">${escapeHtml(profile.name.split(' ')[0])}</a>
    <nav class="site-nav" aria-label="Primary">
      <a href="#summary">${escapeHtml(t(ui.navSummary, locale))}</a>
      <a href="#skills">${escapeHtml(t(ui.navSkills, locale))}</a>
      <a href="#experience">${escapeHtml(t(ui.navExperience, locale))}</a>
      <a href="#education">${escapeHtml(t(ui.navEducation, locale))}</a>
      <a href="#contact">${escapeHtml(t(ui.navContact, locale))}</a>
    </nav>
    <div class="header-actions">
      <div class="lang-switch" role="group" aria-label="${escapeHtml(t(ui.languageLabel, locale))}">
        <button type="button" data-locale="es" class="${locale === 'es' ? 'active' : ''}" aria-pressed="${locale === 'es'}">ES</button>
        <button type="button" data-locale="en" class="${locale === 'en' ? 'active' : ''}" aria-pressed="${locale === 'en'}">EN</button>
      </div>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <p class="hero-kicker reveal">${escapeHtml(t(profile.location, locale))}</p>
      <h1 class="hero-name reveal">${escapeHtml(profile.name)}</h1>
      <p class="hero-role reveal">${escapeHtml(t(profile.role, locale))}</p>
      <p class="hero-lead reveal">${escapeHtml(t(summary, locale))}</p>
      <div class="hero-cta reveal">
        <a class="btn btn-primary" href="${profile.cvPdf}" download="Guido_Gabriele_Peruilh_CV.pdf">${escapeHtml(t(ui.downloadCv, locale))}</a>
        <a class="btn btn-ghost" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">${escapeHtml(t(ui.viewLinkedIn, locale))}</a>
      </div>
    </section>

    <section id="summary" class="section">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.summaryTitle, locale))}</h2>
        <p class="reveal lead">${escapeHtml(t(summary, locale))}</p>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.skillsTitle, locale))}</h2>
        <div class="skills-grid">${renderSkills()}</div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.experienceTitle, locale))}</h2>
        <div class="experience-list">${renderExperience()}</div>
        <h3 class="subheading reveal">${escapeHtml(t(ui.otherTitle, locale))}</h3>
        <ul class="plain-list">${renderOther()}</ul>
      </div>
    </section>

    <section id="education" class="section">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.educationTitle, locale))}</h2>
        <ul class="plain-list">${renderEducation()}</ul>
      </div>
    </section>

    <section id="contact" class="section section-contact">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.contactTitle, locale))}</h2>
        <div class="contact-row reveal">
          <a href="mailto:${profile.email}">${escapeHtml(profile.email)}</a>
          <a href="${profile.phoneHref}">${escapeHtml(profile.phone)}</a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div class="hero-cta reveal" style="margin-top:1.5rem">
          <a class="btn btn-primary" href="${profile.cvPdf}" download="Guido_Gabriele_Peruilh_CV.pdf">${escapeHtml(t(ui.downloadCv, locale))}</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>${escapeHtml(t(ui.footer, locale))}</p>
  </footer>`
}

function observeReveals(root: HTMLElement): void {
  const items = root.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  items.forEach((item) => observer.observe(item))
}

function bindEvents(root: HTMLElement): void {
  root.querySelectorAll<HTMLButtonElement>('[data-locale]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.locale
      if (next !== 'es' && next !== 'en') return
      if (next === locale) return
      locale = next
      persistLocale(locale)
      document.documentElement.lang = locale
      document.documentElement.classList.add('locale-fade')
      render()
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('locale-fade')
      })
    })
  })
}

export function render(): void {
  const app = document.querySelector<HTMLDivElement>('#app')
  if (!app) return
  document.documentElement.lang = locale
  document.title = `${profile.name} · CV`
  app.innerHTML = renderApp()
  observeReveals(app)
  bindEvents(app)
}

export function boot(): void {
  locale = getInitialLocale()
  render()
}
