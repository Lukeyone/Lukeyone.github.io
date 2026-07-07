const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

function setHeaderState() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 16);
}

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

async function syncProfile() {
  try {
    const response = await fetch('profile.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Profile request failed: ${response.status}`);

    const profile = await response.json();
    const heroTitle = document.querySelector('.hero h1');
    const heroSummary = document.querySelector('.hero-lede');
    const availability = document.querySelector('.availability');
    const portrait = document.querySelector('.portrait-wrap img');
    const profileName = document.querySelector('.profile-caption strong');
    const profileLocation = document.querySelector('.profile-caption span');
    const aboutSummary = document.querySelector('.about-lede');

    if (heroTitle && profile.headline) heroTitle.textContent = profile.headline;
    if (heroSummary && profile.summary) heroSummary.textContent = profile.summary;
    if (availability && profile.availability) {
      availability.innerHTML = `<span></span> ${profile.location} · ${profile.availability}`;
    }
    if (portrait && profile.avatar) {
      portrait.src = profile.avatar;
      portrait.alt = profile.name || 'Lachlan McDonald';
    }
    if (profileName && profile.name) profileName.textContent = profile.name;
    if (profileLocation && profile.location) profileLocation.textContent = profile.location;
    if (aboutSummary && profile.about) aboutSummary.textContent = profile.about;

    document.querySelectorAll('a[href="https://github.com/Lukeyone"]').forEach((link) => {
      if (profile.github) link.href = profile.github;
    });
    document.querySelectorAll('a[href="https://www.linkedin.com/in/lachlanmcdonaldtech"]').forEach((link) => {
      if (profile.linkedin) link.href = profile.linkedin;
    });
    document.querySelectorAll('a[href="mailto:lachornot@gmail.com"]').forEach((link) => {
      if (profile.email) link.href = profile.email;
    });
  } catch (error) {
    console.warn('Portfolio profile sync was skipped.', error);
  }
}

syncProfile();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}
