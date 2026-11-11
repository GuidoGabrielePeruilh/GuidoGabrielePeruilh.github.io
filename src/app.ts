import {
  education,
  experience,
  milestones,
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
    .map((group) => {
      const tags = group.items
        .map((item) => {
          const classes = item.highlight ? 'skill-tag skill-tag-hot' : 'skill-tag'
          return `<span class="${classes}">${escapeHtml(t(item.label, locale))}</span>`
        })
        .join('')
      return `
      <article class="skill-group surface-card reveal">
        <h3>${escapeHtml(t(group.title, locale))}</h3>
        <p>${escapeHtml(t(group.description, locale))}</p>
        <div class="skill-tags">${tags}</div>
      </article>`
    })
    .join('')
}

function renderMilestones(): string {
  return milestones
    .map((item) => {
      const highlights = item.highlights
        .map((highlight) => `<li>${escapeHtml(t(highlight, locale))}</li>`)
        .join('')
      return `
        <article class="milestone surface-card reveal">
          <h3>${escapeHtml(t(item.title, locale))}</h3>
          <p>${escapeHtml(t(item.summary, locale))}</p>
          <ul>${highlights}</ul>
        </article>`
    })
    .join('')
}

function timelineIcon(kind: 'company' | 'role'): string {
  if (kind === 'company') {
    return `
      <span class="timeline-node timeline-node-company" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="8" width="18" height="12" rx="2"></rect>
          <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <path d="M3 13h18"></path>
        </svg>
      </span>`
  }

  return `
    <span class="timeline-node timeline-node-role" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="8" width="18" height="12" rx="2"></rect>
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <path d="M3 13h18"></path>
      </svg>
    </span>`
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
              ${timelineIcon('role')}
              <div class="role-body">
                <div class="role-head">
                  <h4>${escapeHtml(t(role.title, locale))}</h4>
                  <p class="meta">${escapeHtml(t(role.period, locale))}</p>
                </div>
                <ul>${bullets}</ul>
                ${impact}
              </div>
            </article>`
        })
        .join('')

      return `
        <div class="company surface-card reveal">
          <div class="company-timeline">
            <div class="company-head">
              ${timelineIcon('company')}
              <div class="company-head-copy">
                <h3>${escapeHtml(company.company)}</h3>
                <p class="meta">${escapeHtml(t(company.period, locale))} · ${escapeHtml(t(company.location, locale))}</p>
              </div>
            </div>
            <div class="role-track">${roles}</div>
          </div>
        </div>`
    })
    .join('')
}

function renderOther(): string {
  const items = otherExperience
    .map(
      (item) => `
      <article class="role">
        ${timelineIcon('role')}
        <div class="role-body">
          <div class="role-head">
            <h4>${escapeHtml(item.title)}</h4>
            <p class="meta">${escapeHtml(t(item.period, locale))} · ${escapeHtml(t(item.location, locale))}</p>
          </div>
        </div>
      </article>`,
    )
    .join('')

  return `
    <div class="company surface-card reveal">
      <div class="company-timeline">
        <div class="company-head">
          ${timelineIcon('company')}
          <div class="company-head-copy">
            <h3>${escapeHtml(t(ui.otherTitle, locale))}</h3>
          </div>
        </div>
        <div class="role-track">${items}</div>
      </div>
    </div>`
}

function renderEducation(): string {
  const items = education
    .map(
      (item) => `
      <li>
        <strong>${escapeHtml(t(item.title, locale))}</strong>
        <span>${escapeHtml(t(item.detail, locale))}</span>
      </li>`,
    )
    .join('')

  return `
    <div class="education-panel surface-card reveal">
      <ul class="plain-list">${items}</ul>
    </div>`
}

function contactIcon(kind: 'linkedin' | 'github' | 'email' | 'phone'): string {
  if (kind === 'linkedin') {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M7.5 9.5v8"></path>
        <circle cx="7.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle>
        <path d="M11.5 17.5v-5.2a2.8 2.8 0 0 1 5.6 0v5.2"></path>
        <path d="M11.5 12.2v5.3"></path>
      </svg>`
  }
  if (kind === 'github') {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.5 9.5 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z"></path>
      </svg>`
  }
  if (kind === 'email') {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2"></rect>
        <path d="m5 8 7 5 7-5"></path>
      </svg>`
  }
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M7.5 4.5h2.2l1.1 3.2-1.5 1.1a11.5 11.5 0 0 0 5.9 5.9l1.1-1.5 3.2 1.1v2.2a2 2 0 0 1-2.2 2 14.5 14.5 0 0 1-12-12 2 2 0 0 1 2.2-2Z"></path>
    </svg>`
}

function renderApp(): string {
  return `
  <header class="site-header">
    <a class="brand-mark" href="#top">${escapeHtml(profile.name.split(' ')[0])}</a>
    <nav class="site-nav" aria-label="Primary">
      <a href="#summary">${escapeHtml(t(ui.navSummary, locale))}</a>
      <a href="#milestones">${escapeHtml(t(ui.navMilestones, locale))}</a>
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
      <p class="hero-headline reveal">${escapeHtml(t(profile.headline, locale))}</p>
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

    <section id="milestones" class="section">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.milestonesTitle, locale))}</h2>
        <div class="milestones-grid">${renderMilestones()}</div>
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
        <div class="other-experience">${renderOther()}</div>
      </div>
    </section>

    <section id="education" class="section">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.educationTitle, locale))}</h2>
        ${renderEducation()}
      </div>
    </section>

    <section id="contact" class="section section-contact">
      <div class="section-copy">
        <h2 class="reveal">${escapeHtml(t(ui.contactTitle, locale))}</h2>
        <div class="contact-shell reveal">
          <div class="contact-shell-head">
            <h3>${escapeHtml(t(ui.contactChannelsTitle, locale))}</h3>
            <p>${escapeHtml(t(ui.contactChannelsLead, locale))}</p>
          </div>
          <div class="contact-channels">
            <article class="contact-channel surface-card">
              <span class="contact-channel-icon">${contactIcon('email')}</span>
              <div class="contact-channel-copy">
                <p class="contact-channel-label">${escapeHtml(t(ui.contactEmailLabel, locale))}</p>
                <p class="contact-channel-value">${escapeHtml(profile.email)}</p>
              </div>
              <button type="button" class="contact-channel-action" data-copy="${escapeHtml(profile.email)}">
                ${escapeHtml(t(ui.contactCopy, locale))}
              </button>
            </article>
            <article class="contact-channel surface-card">
              <span class="contact-channel-icon">${contactIcon('phone')}</span>
              <div class="contact-channel-copy">
                <p class="contact-channel-label">${escapeHtml(t(ui.contactPhoneLabel, locale))}</p>
                <p class="contact-channel-value">${escapeHtml(profile.phone)}</p>
              </div>
              <a class="contact-channel-action" href="${profile.phoneHref}">${escapeHtml(t(ui.contactCall, locale))}</a>
            </article>
            <article class="contact-channel surface-card">
              <span class="contact-channel-icon">${contactIcon('linkedin')}</span>
              <div class="contact-channel-copy">
                <p class="contact-channel-label">${escapeHtml(t(ui.contactLinkedInLabel, locale))}</p>
                <p class="contact-channel-value">in/guido-gabriele-peruilh</p>
              </div>
              <a class="contact-channel-action" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(t(ui.contactViewProfile, locale))}
              </a>
            </article>
            <article class="contact-channel surface-card">
              <span class="contact-channel-icon">${contactIcon('github')}</span>
              <div class="contact-channel-copy">
                <p class="contact-channel-label">${escapeHtml(t(ui.contactGitHubLabel, locale))}</p>
                <p class="contact-channel-value">github.com/GuidoGabrielePeruilh</p>
              </div>
              <a class="contact-channel-action" href="${profile.github}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(t(ui.contactViewProfile, locale))}
              </a>
            </article>
          </div>
          <div class="contact-download">
            <a class="btn btn-primary" href="${profile.cvPdf}" download="Guido_Gabriele_Peruilh_CV.pdf">${escapeHtml(t(ui.downloadCv, locale))}</a>
          </div>
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

  root.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copy
      if (!value) return
      try {
        await navigator.clipboard.writeText(value)
        const previous = button.textContent
        button.textContent = t(ui.contactCopied, locale)
        window.setTimeout(() => {
          button.textContent = previous
        }, 1600)
      } catch {
        window.prompt(t(ui.contactCopy, locale), value)
      }
    })
  })
}

export function render(): void {
  const app = document.querySelector<HTMLDivElement>('#app')
  if (!app) return
  document.documentElement.lang = locale
  document.title = `${profile.name} · Backend / Cloud`
  app.innerHTML = renderApp()
  observeReveals(app)
  bindEvents(app)
}

export function boot(): void {
  locale = getInitialLocale()
  render()
}
