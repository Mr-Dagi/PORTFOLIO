'use strict';

/* =========================================================================
   Languages, UI text and default content (English, Amharic, Afaan Oromoo)
   ========================================================================= */

const LANGS = {
  en: { label: 'English', htmlLang: 'en' },
  am: { label: 'አማርኛ (Amharic)', htmlLang: 'am' },
  om: { label: 'Afaan Oromoo', htmlLang: 'om' }
};

const UI = {
  en: { summary: 'Summary', experience: 'Experience', projects: 'Projects & Ventures', skills: 'Skills', education: 'Education', languages: 'Languages', print: 'Print / Save PDF', rights: 'All rights reserved.', admin: 'Admin', contact: 'Contact links', email: 'Email', theme: 'Change colour theme' },
  am: { summary: 'ማጠቃለያ', experience: 'ልምድ', projects: 'ፕሮጀክቶችና ሥራዎች', skills: 'ክህሎቶች', education: 'ትምህርት', languages: 'ቋንቋዎች', print: 'አትም / እንደ PDF አስቀምጥ', rights: 'መብቱ በሕግ የተጠበቀ ነው።', admin: 'አስተዳዳሪ', contact: 'የመገናኛ አገናኞች', email: 'ኢሜይል', theme: 'የቀለም ገጽታ ቀይር' },
  om: { summary: 'Cuunfaa', experience: 'Muuxannoo', projects: 'Pirojektootaa fi Hojiiwwan', skills: 'Ogummaalee', education: 'Barnoota', languages: 'Afaanota', print: "Maxxansi / PDF godhii olkaa'i", rights: 'Mirgi seeraan eegameera.', admin: 'Bulchaa', contact: 'Hidhaawwan quunnamtii', email: 'Imeelii', theme: 'Bifa halluu jijjiiri' }
};

const CONTACT = {
  name: 'Dagmawi Alemayhu',
  email: 'dagia2061@gmail.com',
  github: 'https://github.com/Mr-Dagi',
  linkedin: 'https://www.linkedin.com/in/dagmawi-alemayhu-6b71861ab'
};

const DEFAULTS = {
  en: {
    ...CONTACT,
    title: 'Full-Stack Developer · AI & IT Specialist · Computer Scientist & Engineer',
    location: 'Addis Ababa, Ethiopia',
    summary: 'Full-stack developer and computer scientist based in Addis Ababa, Ethiopia, building web platforms, AI-assisted tools, and practical technology solutions for startups and communities. Founder of SA-Tech Startup, with hands-on experience across front-end development, IT consulting, networking, and cyber analytics.',
    experience: [
      { role: 'Founder & Full-Stack Developer', org: 'SA-Tech Startup', period: 'Ongoing', bullets: ['Founded and run a technology startup building web and software solutions for clients and communities.', 'Design, develop, and maintain full-stack web applications end to end.', 'Deliver community-focused websites and digital tools for local organizations.'] },
      { role: 'Instructor & Course Administrator', org: 'American College of Technology', period: 'Ongoing', bullets: ['Teach and administer courses related to IT and computer science.', 'Support students through coursework, guidance, and practical exercises.'] },
      { role: 'Freelance Web Developer', org: 'Afriwork', period: 'Ongoing', bullets: ['Deliver freelance web development projects for clients through the Afriwork platform.'] },
      { role: 'AI Translation & Teaching Volunteer', org: 'SBA', period: 'Ongoing', bullets: ['Volunteer contributing AI-related translation work.', 'Volunteer teaching support in AI and related technical topics.'] }
    ],
    education: [{ degree: 'BA in Computer Science', school: 'Unity University, Addis Ababa', period: '' }],
    projects: [{ name: 'SA-Tech Startup', url: 'https://github.com/Mr-Dagi/SA-TECH', description: 'Personal startup delivering web and software products.' }],
    skills: ['Full-Stack Development', 'Artificial Intelligence', 'IT', 'Front-End Development', 'Consulting', 'Networking', 'Cyber Analytics', 'Communication'],
    languages: ['Amharic (fluent)', 'English (fluent)']
  },
  am: {
    ...CONTACT,
    title: 'ፉል-ስታክ ገንቢ · የኤአይ እና የአይቲ ባለሙያ · የኮምፒውተር ሳይንቲስትና ኢንጂነር',
    location: 'አዲስ አበባ፣ ኢትዮጵያ',
    summary: 'በአዲስ አበባ ኢትዮጵያ የሚገኝ ፉል-ስታክ ገንቢና የኮምፒውተር ሳይንቲስት። ለጀማሪ ኩባንያዎችና ለማኅበረሰቦች የድር መድረኮችን፣ በኤአይ የታገዙ መሣሪያዎችንና ተግባራዊ የቴክኖሎጂ መፍትሔዎችን እገነባለሁ። የSA-Tech Startup መስራች ሲሆን በፊት-ለፊት ልማት፣ በአይቲ ማማከር፣ በኔትወርኪንግና በሳይበር ትንተና ተግባራዊ ልምድ አለኝ።',
    experience: [
      { role: 'መስራችና ፉል-ስታክ ገንቢ', org: 'SA-Tech Startup', period: 'በመካሄድ ላይ', bullets: ['ለደንበኞችና ለማኅበረሰቦች የድርና የሶፍትዌር መፍትሔዎችን የሚገነባ የቴክኖሎጂ ጀማሪ ኩባንያ መስርቼ እመራለሁ።', 'ሙሉ የድር መተግበሪያዎችን ከመጀመሪያ እስከ መጨረሻ እቀርጻለሁ፣ አበለጽጋለሁ፣ እጠብቃለሁ።', 'ለአካባቢ ድርጅቶች በማኅበረሰብ ላይ ያተኮሩ ድረ-ገጾችንና ዲጂታል መሣሪያዎችን አቀርባለሁ።'] },
      { role: 'መምህርና የኮርስ አስተዳዳሪ', org: 'አሜሪካን ኮሌጅ ኦፍ ቴክኖሎጂ', period: 'በመካሄድ ላይ', bullets: ['ከአይቲና ከኮምፒውተር ሳይንስ ጋር የተያያዙ ኮርሶችን አስተምራለሁ፣ አስተዳድራለሁም።', 'ተማሪዎችን በትምህርት፣ በምክርና በተግባራዊ ልምምዶች እደግፋለሁ።'] },
      { role: 'ፍሪላንስ ድር ገንቢ', org: 'አፍሪዎርክ', period: 'በመካሄድ ላይ', bullets: ['በአፍሪዎርክ መድረክ በኩል ለደንበኞች የፍሪላንስ ድር ልማት ፕሮጀክቶችን አቀርባለሁ።'] },
      { role: 'የኤአይ ትርጉምና ማስተማር በጎ ፈቃደኛ', org: 'SBA', period: 'በመካሄድ ላይ', bullets: ['በኤአይ ላይ የተመሠረተ የትርጉም ሥራ በበጎ ፈቃድ አበረክታለሁ።', 'በኤአይና በተያያዙ ቴክኒካዊ ርዕሶች የማስተማር ድጋፍ በበጎ ፈቃድ አደርጋለሁ።'] }
    ],
    education: [{ degree: 'የመጀመሪያ ዲግሪ በኮምፒውተር ሳይንስ', school: 'ዩኒቲ ዩኒቨርሲቲ፣ አዲስ አበባ', period: '' }],
    projects: [{ name: 'SA-Tech Startup', url: 'https://github.com/Mr-Dagi/SA-TECH', description: 'የድርና የሶፍትዌር ምርቶችን የሚያቀርብ የግል ጀማሪ ኩባንያ።' }],
    skills: ['ፉል-ስታክ ልማት', 'ሰው ሠራሽ አስተውሎት (ኤአይ)', 'አይቲ', 'ፊት-ለፊት ልማት', 'ማማከር', 'ኔትወርኪንግ', 'የሳይበር ትንተና', 'ግንኙነት'],
    languages: ['አማርኛ (አቀላጥፎ)', 'እንግሊዝኛ (አቀላጥፎ)']
  },
  om: {
    ...CONTACT,
    title: 'Developera Full-Stack · Ogeessa AI fi IT · Saayintistii fi Ininjinera Kompiitaraa',
    location: 'Finfinnee, Itiyoophiyaa',
    summary: "Developera full-stack fi saayintistii kompiitaraa Finfinnee, Itiyoophiyaatti argamu; dhaabbilee ijaaramaniifi hawaasaaf kuusaawwan marsariitii, meeshaalee AI'n deeggaraman fi furmaata teekinooloojii hojiirra oolan ijaara. Hundeessaa SA-Tech Startup yoo ta'u, developmentii fuulduraa, gorsa IT, networkii fi xiinxala saayibariitiin muuxannoo hojii qaba.",
    experience: [
      { role: 'Hundeessaa fi Developera Full-Stack', org: 'SA-Tech Startup', period: 'Itti fufee jira', bullets: ['Dhaabbata teekinooloojii jalqabaa maamiltootaa fi hawaasaaf furmaata weebii fi sooftiweerii ijaaru hundeessee geggeessa.', 'Appilikeeshinii weebii guutuu jalqabaa hanga dhumaatti dizaayinaan, ijaaraa fi kununsa.', 'Dhaabbilee naannoof marsariitii fi meeshaalee dijitaalaa hawaasa irratti xiyyeeffatan dhiheessa.'] },
      { role: 'Barsiisaa fi Bulchaa Koorsii', org: 'American College of Technology', period: 'Itti fufee jira', bullets: ['Koorsiiwwan IT fi saayinsii kompiitaraa wajjin walqabatan barsiisa, bulchas.', "Barattoota qo'annoo, qajeelfamaa fi shaakala hojiitiin deeggara."] },
      { role: 'Developera Weebii Bilisaa (Freelance)', org: 'Afriwork', period: 'Itti fufee jira', bullets: ['Karaa waltajjii Afriwork maamiltootaaf pirojektoota developmentii weebii bilisaa dhiheessa.'] },
      { role: 'Tola Ooltuu Hiikkaa fi Barsiisa AI', org: 'SBA', period: 'Itti fufee jira', bullets: ['Hojii hiikkaa AI irratti hundaa’e tola ooltummaan kenna.', 'Mata dureewwan AI fi teekinikaa wal-qabatan irratti deeggarsa barsiisuu tola ooltummaan kenna.'] }
    ],
    education: [{ degree: 'Digrii Duraa Saayinsii Kompiitaraa', school: 'Yuunivarsiitii Yuuniitii, Finfinnee', period: '' }],
    projects: [{ name: 'SA-Tech Startup', url: 'https://github.com/Mr-Dagi/SA-TECH', description: 'Dhaabbata jalqabaa dhuunfaa oomishoota weebii fi sooftiweerii dhiheessu.' }],
    skills: ['Developmentii Full-Stack', 'Sammuu Namtolchee (AI)', 'IT', 'Developmentii Fuulduraa', 'Gorsa', 'Networkii', 'Xiinxala Saayibarii', 'Quunnamtii'],
    languages: ['Afaan Amaaraa (sirriitti)', 'Afaan Ingiliffaa (sirriitti)']
  }
};

const STORAGE_KEYS = {
  dataPrefix: 'cv:data:',
  lang: 'cv:lang',
  theme: 'cv:theme',
  auth: 'cv:auth',
  attempts: 'cv:authAttempts'
};

function getLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEYS.lang);
    if (saved && LANGS[saved]) return saved;
  } catch { /* ignore */ }
  return 'en';
}
let currentLang = getLang();

function loadData(lang) {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.dataPrefix + lang);
    if (!raw) return structuredClone(DEFAULTS[lang]);
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return structuredClone(DEFAULTS[lang]);
    return { ...structuredClone(DEFAULTS[lang]), ...parsed };
  } catch {
    return structuredClone(DEFAULTS[lang]);
  }
}

function saveData(lang, data) {
  window.localStorage.setItem(STORAGE_KEYS.dataPrefix + lang, JSON.stringify(data));
}

let currentData = loadData(currentLang);

/* =========================================================================
   Small safe DOM helpers (textContent only — never innerHTML with data)
   ========================================================================= */

function el(tag, props, children) {
  const node = document.createElement(tag);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (key === 'className') node.className = value;
      else if (key === 'text') node.textContent = value;
      else node.setAttribute(key, value);
    }
  }
  (children || []).forEach((child) => {
    if (child) node.appendChild(child);
  });
  return node;
}

function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

/** Only allow http(s)/mailto links; anything else (e.g. javascript:) is blocked. */
function sanitizeUrl(url) {
  if (!url) return '';
  const trimmed = String(url).trim();
  try {
    const parsed = new URL(trimmed, window.location.href);
    if (['http:', 'https:', 'mailto:'].includes(parsed.protocol)) return trimmed;
  } catch {
    /* malformed URL */
  }
  return '';
}

const ICONS = {
  mail: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.2 7.3 6.1a.75.75 0 0 0 .96 0l7.3-6.1a.6.6 0 0 0-.38-1.06H4.58a.6.6 0 0 0-.38 1.06Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8H10V9Z"/></svg>'
};

function iconLink(kind, href, label) {
  const safeHref = sanitizeUrl(href);
  if (!safeHref) return null;
  const a = document.createElement('a');
  a.className = 'icon-link';
  a.href = safeHref;
  a.setAttribute('aria-label', label);
  if (safeHref.startsWith('http')) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
  // Static, author-authored SVG markup only — never derived from user data.
  a.innerHTML = ICONS[kind] || '';
  return a;
}

/* =========================================================================
   Public view rendering
   ========================================================================= */

function renderPublic(data) {
  const ui = UI[currentLang];
  document.documentElement.lang = LANGS[currentLang].htmlLang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (ui[key]) node.textContent = ui[key];
  });
  document.getElementById('contactIcons').setAttribute('aria-label', ui.contact);
  document.getElementById('themeOrb').setAttribute('aria-label', ui.theme);
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
  });

  document.getElementById('name').textContent = data.name;
  document.getElementById('footerName').textContent = data.name;
  document.getElementById('jobTitle').textContent = data.title;
  document.getElementById('location').textContent = data.location;
  document.getElementById('summary').textContent = data.summary;
  document.title = `${data.name} — ${data.title}`;

  const icons = document.getElementById('contactIcons');
  clear(icons);
  [
    iconLink('mail', data.email ? `mailto:${data.email}` : '', ui.email),
    iconLink('github', data.github, 'GitHub'),
    iconLink('linkedin', data.linkedin, 'LinkedIn')
  ].forEach((node) => node && icons.appendChild(node));

  const expList = document.getElementById('experienceList');
  clear(expList);
  (data.experience || []).forEach((entry) => {
    expList.appendChild(
      el('div', { className: 'entry' }, [
        el('div', { className: 'entry-title', text: `${entry.role} — ${entry.org}` }),
        el('div', { className: 'entry-sub', text: entry.period || '' }),
        el('ul', null, (entry.bullets || []).map((bullet) => el('li', { text: bullet })))
      ])
    );
  });

  const eduList = document.getElementById('educationList');
  clear(eduList);
  (data.education || []).forEach((entry) => {
    eduList.appendChild(
      el('div', { className: 'entry' }, [
        el('div', { className: 'entry-title', text: entry.degree }),
        el('div', { className: 'entry-sub', text: [entry.school, entry.period].filter(Boolean).join(' · ') })
      ])
    );
  });

  const projList = document.getElementById('projectsList');
  clear(projList);
  (data.projects || []).forEach((entry) => {
    const safeUrl = sanitizeUrl(entry.url);
    const titleNode = safeUrl
      ? el('a', { href: safeUrl, target: '_blank', rel: 'noopener noreferrer', text: entry.name })
      : el('span', { text: entry.name });
    projList.appendChild(
      el('div', { className: 'entry' }, [
        el('div', { className: 'entry-title' }, [titleNode]),
        el('div', { className: 'entry-sub', text: entry.description || '' })
      ])
    );
  });

  const skillsList = document.getElementById('skillsList');
  clear(skillsList);
  (data.skills || []).forEach((skill) => skillsList.appendChild(el('span', { className: 'tag', text: skill })));

  const langList = document.getElementById('languagesList');
  clear(langList);
  (data.languages || []).forEach((lang) => langList.appendChild(el('span', { className: 'tag', text: lang })));

  document.getElementById('year').textContent = String(new Date().getFullYear());
}

function setLanguage(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  try { window.localStorage.setItem(STORAGE_KEYS.lang, lang); } catch { /* ignore */ }
  currentData = loadData(lang);
  renderPublic(currentData);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

document.getElementById('themeOrb').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try { window.localStorage.setItem(STORAGE_KEYS.theme, next); } catch { /* ignore */ }
});

renderPublic(currentData);

document.getElementById('printBtn').addEventListener('click', () => window.print());

// Prevent the Enter key inside any text field from implicitly submitting
// (and thereby closing) the <dialog>'s <form method="dialog">.
document.getElementById('adminForm').addEventListener('submit', (event) => {
  event.preventDefault();
});

/* =========================================================================
   Local admin authentication (client-side gate only)
   -------------------------------------------------------------------------
   No server exists, so this only keeps casual visitors out of the editor.
   Anyone with DevTools can bypass it. Username is fixed; the password is
   stored only as a salted PBKDF2 hash (never plaintext) and can be changed
   from inside the panel.
   ========================================================================= */

const ADMIN_USERNAME = 'mrx';
const DEFAULT_AUTH = {
  salt: 'PRkmi/SX2W8zADi/oPlyqQ==',
  hash: 'XM8v5BgXXtXmteFJVv8oKDI+Lu98+EvjgsSOy2BTcNQ='
};

const PBKDF2_ITERATIONS = 150000;

function bufToBase64(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}
function base64ToBuf(b64) {
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)).buffer;
}

async function deriveHash(password, saltBuf) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: saltBuf, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    256
  );
  return bufToBase64(bits);
}

function getAuthRecord() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.auth);
    return raw ? JSON.parse(raw) : DEFAULT_AUTH;
  } catch {
    return DEFAULT_AUTH;
  }
}

async function setAdminPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await deriveHash(password, salt);
  window.localStorage.setItem(STORAGE_KEYS.auth, JSON.stringify({ salt: bufToBase64(salt), hash }));
}

async function verifyAdminPassword(password) {
  const record = getAuthRecord();
  if (!record) return false;
  const hash = await deriveHash(password, base64ToBuf(record.salt));
  return hash === record.hash;
}

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 60 * 1000;

function getAttempts() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.attempts) || '{}');
  } catch {
    return {};
  }
}
function setAttempts(value) {
  window.localStorage.setItem(STORAGE_KEYS.attempts, JSON.stringify(value));
}
function isLockedOut() {
  const { lockUntil } = getAttempts();
  return typeof lockUntil === 'number' && lockUntil > Date.now();
}
function registerFailedAttempt() {
  const attempts = getAttempts();
  const count = (attempts.count || 0) + 1;
  const next = { count };
  if (count >= MAX_ATTEMPTS) {
    next.lockUntil = Date.now() + LOCKOUT_MS;
    next.count = 0;
  }
  setAttempts(next);
  return next;
}
function clearAttempts() {
  window.localStorage.removeItem(STORAGE_KEYS.attempts);
}


let unlockedForSession = false;

/* =========================================================================
   Admin dialog wiring
   ========================================================================= */

const dialog = document.getElementById('adminDialog');
const authView = document.getElementById('adminAuthView');
const editView = document.getElementById('adminEditView');
const authError = document.getElementById('adminAuthError');
const usernameInput = document.getElementById('adminUsernameInput');
const passwordInput = document.getElementById('adminPasswordInput');

function openDialog() {
  authError.textContent = '';
  usernameInput.value = '';
  passwordInput.value = '';
  if (unlockedForSession) {
    showEditView();
  } else {
    editView.hidden = true;
    authView.hidden = false;
  }
  dialog.showModal();
}

document.getElementById('adminOpenBtn').addEventListener('click', openDialog);
document.getElementById('adminCancelBtn').addEventListener('click', () => dialog.close());
document.getElementById('adminEditCancelBtn').addEventListener('click', () => dialog.close());

async function trySignIn() {
  authError.textContent = '';
  if (!window.crypto || !window.crypto.subtle) {
    authError.textContent = 'Sign-in needs a secure page (https://, localhost, or opening the file directly).';
    return;
  }
  if (isLockedOut()) {
    authError.textContent = 'Too many attempts. Please wait a minute and try again.';
    return;
  }
  const userOk = usernameInput.value.trim().toLowerCase() === ADMIN_USERNAME;
  const passOk = await verifyAdminPassword(passwordInput.value);
  if (!userOk || !passOk) {
    registerFailedAttempt();
    authError.textContent = 'Incorrect username or password.';
    return;
  }
  clearAttempts();
  unlockedForSession = true;
  showEditView();
}

document.getElementById('adminSubmitBtn').addEventListener('click', trySignIn);
[usernameInput, passwordInput].forEach((input) =>
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') trySignIn();
  })
);

document.getElementById('adminLogoutBtn').addEventListener('click', () => {
  unlockedForSession = false;
  dialog.close();
});

/* =========================================================================
   Edit form (edits the content of the language currently selected)
   ========================================================================= */

function showEditView() {
  authView.hidden = true;
  editView.hidden = false;
  populateEditForm(currentData);
}

function populateEditForm(data) {
  document.getElementById('editLangNote').textContent = `Editing: ${LANGS[currentLang].label}`;
  document.getElementById('editName').value = data.name || '';
  document.getElementById('editTitle').value = data.title || '';
  document.getElementById('editLocation').value = data.location || '';
  document.getElementById('editEmail').value = data.email || '';
  document.getElementById('editGithub').value = data.github || '';
  document.getElementById('editLinkedin').value = data.linkedin || '';
  document.getElementById('editSummary').value = data.summary || '';
  document.getElementById('editSkills').value = (data.skills || []).join(', ');
  document.getElementById('editLanguages').value = (data.languages || []).join(', ');
  document.getElementById('adminSaveMsg').textContent = '';
  document.getElementById('passwordChangeMsg').textContent = '';
  document.getElementById('editCurrentPassword').value = '';
  document.getElementById('editNewPassword').value = '';

  renderRepeatList('editExperienceList', data.experience || [], fillExperience);
  renderRepeatList('editEducationList', data.education || [], fillEducation);
  renderRepeatList('editProjectsList', data.projects || [], fillProject);
}

function fillExperience(item, container) {
  container.appendChild(labeledInput('Role', 'role', item.role));
  container.appendChild(labeledInput('Organization', 'org', item.org));
  container.appendChild(labeledInput('Period (e.g. 2023 - Present)', 'period', item.period));
  container.appendChild(labeledTextarea('Bullet points (one per line)', 'bullets', (item.bullets || []).join('\n')));
}
function fillEducation(item, container) {
  container.appendChild(labeledInput('Degree', 'degree', item.degree));
  container.appendChild(labeledInput('School', 'school', item.school));
  container.appendChild(labeledInput('Period', 'period', item.period));
}
function fillProject(item, container) {
  container.appendChild(labeledInput('Name', 'name', item.name));
  container.appendChild(labeledInput('URL', 'url', item.url));
  container.appendChild(labeledInput('Description', 'description', item.description));
}

function labeledInput(labelText, field, value) {
  const label = el('label', { className: 'field' }, [el('span', { text: labelText })]);
  const input = el('input', { type: 'text' });
  input.dataset.field = field;
  input.value = value || '';
  label.appendChild(input);
  return label;
}

function labeledTextarea(labelText, field, value) {
  const label = el('label', { className: 'field' }, [el('span', { text: labelText })]);
  const textarea = el('textarea', { rows: '3' });
  textarea.dataset.field = field;
  textarea.value = value || '';
  label.appendChild(textarea);
  return label;
}

function renderRepeatList(containerId, items, fillFields) {
  const container = document.getElementById(containerId);
  clear(container);
  items.forEach((item) => {
    const wrapper = el('div', { className: 'repeat-item' });
    const head = el('div', { className: 'repeat-item-head' });
    const removeBtn = el('button', { type: 'button', className: 'remove-btn', text: 'Remove' });
    removeBtn.addEventListener('click', () => wrapper.remove());
    head.appendChild(removeBtn);
    wrapper.appendChild(head);
    fillFields(item, wrapper);
    container.appendChild(wrapper);
  });
}

function readRepeatList(containerId, fieldNames) {
  const container = document.getElementById(containerId);
  return Array.from(container.children).map((wrapper) => {
    const result = {};
    fieldNames.forEach((field) => {
      const input = wrapper.querySelector(`[data-field="${field}"]`);
      if (!input) return;
      if (field === 'bullets') {
        result.bullets = input.value.split('\n').map((line) => line.trim()).filter(Boolean);
      } else {
        result[field] = input.value.trim();
      }
    });
    return result;
  });
}

function addRow(listId, fields, blank, fill) {
  const items = readRepeatList(listId, fields);
  items.push(blank);
  renderRepeatList(listId, items, fill);
}
document.getElementById('addExperienceBtn').addEventListener('click', () =>
  addRow('editExperienceList', ['role', 'org', 'period', 'bullets'], { role: '', org: '', period: '', bullets: [] }, fillExperience));
document.getElementById('addEducationBtn').addEventListener('click', () =>
  addRow('editEducationList', ['degree', 'school', 'period'], { degree: '', school: '', period: '' }, fillEducation));
document.getElementById('addProjectBtn').addEventListener('click', () =>
  addRow('editProjectsList', ['name', 'url', 'description'], { name: '', url: '', description: '' }, fillProject));

document.getElementById('adminSaveBtn').addEventListener('click', () => {
  const next = {
    name: document.getElementById('editName').value.trim() || DEFAULTS[currentLang].name,
    title: document.getElementById('editTitle').value.trim(),
    location: document.getElementById('editLocation').value.trim(),
    email: document.getElementById('editEmail').value.trim(),
    github: document.getElementById('editGithub').value.trim(),
    linkedin: document.getElementById('editLinkedin').value.trim(),
    summary: document.getElementById('editSummary').value.trim(),
    skills: document.getElementById('editSkills').value.split(',').map((s) => s.trim()).filter(Boolean),
    languages: document.getElementById('editLanguages').value.split(',').map((s) => s.trim()).filter(Boolean),
    experience: readRepeatList('editExperienceList', ['role', 'org', 'period', 'bullets']),
    education: readRepeatList('editEducationList', ['degree', 'school', 'period']),
    projects: readRepeatList('editProjectsList', ['name', 'url', 'description'])
  };
  currentData = next;
  saveData(currentLang, currentData);
  renderPublic(currentData);
  document.getElementById('adminSaveMsg').textContent = 'Saved.';
});

document.getElementById('changePasswordBtn').addEventListener('click', async () => {
  const msg = document.getElementById('passwordChangeMsg');
  const current = document.getElementById('editCurrentPassword').value;
  const next = document.getElementById('editNewPassword').value;
  if (!next || next.length < 8) {
    msg.textContent = 'New password must be at least 8 characters.';
    return;
  }
  if (!(await verifyAdminPassword(current))) {
    msg.textContent = 'Current password is incorrect.';
    return;
  }
  await setAdminPassword(next);
  msg.textContent = 'Password updated.';
  document.getElementById('editCurrentPassword').value = '';
  document.getElementById('editNewPassword').value = '';
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(currentData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cv-data-${currentLang}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById('importInput').addEventListener('change', async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    if (!parsed || typeof parsed !== 'object' || !parsed.name) throw new Error('Invalid file');
    currentData = { ...structuredClone(DEFAULTS[currentLang]), ...parsed };
    saveData(currentLang, currentData);
    renderPublic(currentData);
    populateEditForm(currentData);
    document.getElementById('adminSaveMsg').textContent = 'Imported.';
  } catch {
    document.getElementById('adminSaveMsg').textContent = 'That file could not be imported.';
  } finally {
    event.target.value = '';
  }
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (!window.confirm('Reset this language back to the original content? This cannot be undone.')) return;
  currentData = structuredClone(DEFAULTS[currentLang]);
  saveData(currentLang, currentData);
  renderPublic(currentData);
  populateEditForm(currentData);
  document.getElementById('adminSaveMsg').textContent = 'Reset to defaults.';
});
