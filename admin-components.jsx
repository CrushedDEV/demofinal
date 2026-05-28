/* Nexify — Admin (Login + Dashboard) */

/* ─────────── localStorage helpers ─────────── */
const STORE = {
  creators: 'nx_creators_v1',
  cases:    'nx_cases_v1',
  auth:     'nx_auth_v1',
};

const SEED_CREATORS = [
  { id: 'c1', name: 'Lía Romero',   handle: '@liaplays',   platform: 'Twitch',    country: 'ES', followers: '480K', engagement: '8.4%',  tag: 'Variety',   type: 'Gaming · Just Chatting',  bio: 'Streamer variety enfocada en juegos cooperativos y just chatting. Comunidad muy activa en horario europeo.',  avatar: 'assets/photo-pickup-yellow.jpg', email: 'lia@nexifystudio.es',   featured: true },
  { id: 'c2', name: 'Daniel Quem',  handle: '@danielquem', platform: 'YouTube',   country: 'BR', followers: '1.2M', engagement: '5.1%',  tag: 'Tech',      type: 'Tech reviews · vlogs',    bio: 'Tech reviewer top en Brasil con foco en gadgets, smartphones y experiencias gamer.',                       avatar: 'assets/photo-lockup.jpg',         email: 'dq@nexifystudio.es',   featured: false },
  { id: 'c3', name: 'Mireia Vox',   handle: '@mireia.vox', platform: 'TikTok',    country: 'ES', followers: '920K', engagement: '11.2%', tag: 'Lifestyle', type: 'Moda · Beauty',           bio: 'Creator de lifestyle con audiencia femenina entre 18-30 muy comprometida en moda y beauty drops.',         avatar: 'assets/photo-arcade-tv.jpg',      email: 'mv@nexifystudio.es',   featured: true },
  { id: 'c4', name: 'Bruno Caz',    handle: '@brunocaz',   platform: 'Twitch',    country: 'AR', followers: '210K', engagement: '14.6%', tag: 'Esports',   type: 'CS2 · Valorant',          bio: 'Caster y jugador competitivo de FPS. Engagement muy alto en franja LATAM.',                                  avatar: 'assets/photo-vr.jpg',             email: 'bc@nexifystudio.es',   featured: false },
  { id: 'c5', name: 'Vega Llanos',  handle: '@vegall',     platform: 'Instagram', country: 'MX', followers: '680K', engagement: '6.8%',  tag: 'Fashion',   type: 'Streetwear · Drops',      bio: 'Referente de streetwear en CDMX. Trabaja con marcas de moda urbana y drops limitados.',                     avatar: 'assets/photo-pickup-yellow.jpg', email: 'vl@nexifystudio.es',   featured: false },
  { id: 'c6', name: 'Tito Ruz',     handle: '@titoruz',    platform: 'Kick',      country: 'BR', followers: '340K', engagement: '9.2%',  tag: 'Variety',   type: 'IRL · Reactions',         bio: 'Streamer IRL y reactions. Estilo gonzo, fanbase muy joven.',                                                avatar: 'assets/photo-lockup.jpg',         email: 'tr@nexifystudio.es',   featured: false },
];

const SEED_CASES = [
  {
    id: 'k1', brand: 'Red Bull', title: 'Una arcade coin-op en stream durante 72 horas.',
    objective: 'Activar la audiencia de Twitch alrededor del lanzamiento de Red Bull Sugarfree con un coin-op clásico interpretado por streamers.',
    sector: 'Bebidas', platform: 'Twitch + IG Reels', pillType: 'Stream Game',
    year: '2025', market: 'EU + LATAM', creators: '12', duration: '72h live',
    cover: 'assets/photo-arcade-tv.jpg', variant: 'image', size: 'wide',
    metricBig: '72h', metricLbl: 'En vivo',
    r1n: '480K', r1l: 'Espectadores únicos',
    r2n: '3.2M', r2l: 'Plays',
    r3n: '24min', r3l: 'Sesión media',
    r4n: '+42%', r4l: 'Ventas spot',
    featured: true,
  },
  {
    id: 'k2', brand: 'Mondelez', title: 'Trivia diaria en 9 mercados de LATAM.',
    objective: 'Reactivar el TOP-of-mind de Trident en LATAM con una trivia interactiva diaria dentro de TikTok Live y comments-driven gameplay.',
    sector: 'Alimentación', platform: 'TikTok Live', pillType: 'Playable',
    year: '2026', market: 'LATAM', creators: '36', duration: '9 días',
    cover: '', variant: 'yellow', size: 'half',
    metricBig: '2.1M', metricLbl: 'Plays totales',
    r1n: '2.1M', r1l: 'Plays',
    r2n: '9', r2l: 'Mercados',
    r3n: '84%', r3l: 'Tasa finalización',
    r4n: '+18pts', r4l: 'Brand recall',
    featured: true,
  },
  {
    id: 'k3', brand: "L'Oréal", title: 'Try-on como speed-run en filtro AR.',
    objective: 'Convertir el try-on de máscaras en una experiencia social donde la audiencia se reta a completar el look antes que el bestie.',
    sector: 'Beauty', platform: 'Instagram AR', pillType: 'AR Filter',
    year: '2025', market: 'EU + US', creators: '8', duration: '6 semanas',
    cover: 'assets/photo-vr.jpg', variant: 'image', size: 'half',
    metricBig: '8.4M', metricLbl: 'Try-ons',
    r1n: '8.4M', r1l: 'Try-ons',
    r2n: '+9.2%', r2l: 'CTR a tienda',
    r3n: '32K', r3l: 'UGC posts',
    r4n: '02:14', r4l: 'Avg session',
    featured: false,
  },
];

function loadStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch (e) { return fallback; }
}
function saveStore(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}
function uid() { return 'i' + Math.random().toString(36).slice(2, 9); }

/* ─────────── shared UI ─────────── */
function Btn({ children, variant = 'primary', onClick, type, href, danger, full, sm }) {
  const cls = ['nx-adm-btn',
    variant === 'primary' && 'nx-adm-btn--primary',
    variant === 'ghost' && 'nx-adm-btn--ghost',
    variant === 'ink' && 'nx-adm-btn--ink',
    danger && 'nx-adm-btn--danger',
    full && 'nx-adm-btn--full',
    sm && 'nx-adm-btn--sm',
  ].filter(Boolean).join(' ');
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type || 'button'} className={cls} onClick={onClick}>{children}</button>;
}

function Field({ label, hint, children, full }) {
  return (
    <label className={'nx-adm-field' + (full ? ' nx-adm-field--full' : '')}>
      <span className="nx-adm-field__label">{label}</span>
      {children}
      {hint && <span className="nx-adm-field__hint">{hint}</span>}
    </label>
  );
}

function Thumb({ src, alt }) {
  const [err, setErr] = React.useState(false);
  React.useEffect(() => { setErr(false); }, [src]);
  if (!src || err) {
    return <span className="nx-adm__thumb nx-adm__thumb--empty" aria-label="Sin imagen">∅</span>;
  }
  return <img className="nx-adm__thumb" src={src} alt={alt || ''} onError={() => setErr(true)} />;
}

function KPISummary({ caso }) {
  const kpis = [
    { n: caso.r1n, l: caso.r1l },
    { n: caso.r2n, l: caso.r2l },
    { n: caso.r3n, l: caso.r3l },
    { n: caso.r4n, l: caso.r4l },
  ].filter(k => k.n);
  if (!kpis.length) return <span className="nx-adm__dim">—</span>;
  return (
    <span className="nx-adm__kpis" title={kpis.map(k => k.n + ' ' + (k.l || '')).join(' · ')}>
      {kpis.map((k, i) => <span key={i} className="nx-adm__kpi">{k.n}</span>)}
    </span>
  );
}

function ImageDrop({ value, onChange }) {
  const [drag, setDrag] = React.useState(false);
  const [err, setErr] = React.useState('');
  const fileRef = React.useRef(null);

  function handleFile(file) {
    if (!file) return;
    if (!file.type || !file.type.startsWith('image/')) {
      setErr('Formato no válido. Sólo JPG, PNG, WebP o SVG.');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setErr('Archivo demasiado pesado. Máximo 2 MB.');
      return;
    }
    setErr('');
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.onerror = () => setErr('No se pudo leer el archivo.');
    reader.readAsDataURL(file);
  }

  function onDrop(e) {
    e.preventDefault();
    setDrag(false);
    handleFile(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]);
  }

  function onSelect(e) {
    handleFile(e.target.files && e.target.files[0]);
    e.target.value = '';
  }

  function openPicker(e) {
    if (e) e.stopPropagation();
    if (fileRef.current) fileRef.current.click();
  }

  return (
    <div className="nx-adm-drop-wrap">
      <div
        className={'nx-adm-drop' + (drag ? ' is-drag' : '') + (value ? ' has-image' : '')}
        onDragOver={e => { e.preventDefault(); if (!drag) setDrag(true); }}
        onDragEnter={e => { e.preventDefault(); setDrag(true); }}
        onDragLeave={e => { e.preventDefault(); if (e.currentTarget.contains(e.relatedTarget)) return; setDrag(false); }}
        onDrop={onDrop}
        onClick={() => !value && openPicker()}
        role="button" tabIndex={0}
        onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && !value) { e.preventDefault(); openPicker(); } }}
      >
        <input ref={fileRef} type="file" accept="image/*" onChange={onSelect} style={{display:'none'}} />
        {value ? (
          <React.Fragment>
            <img className="nx-adm-drop__img" src={value} alt="preview" />
            <div className="nx-adm-drop__overlay">
              <button type="button" className="nx-adm-drop__btn" onClick={openPicker}>Reemplazar</button>
              <button type="button" className="nx-adm-drop__btn nx-adm-drop__btn--del" onClick={e => { e.stopPropagation(); onChange(''); }}>Quitar</button>
            </div>
            <div className="nx-adm-drop__badge">Imagen cargada</div>
          </React.Fragment>
        ) : (
          <div className="nx-adm-drop__empty">
            <span className="nx-adm-drop__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                <path d="M12 16V4M7 9l5-5 5 5" />
                <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
            </span>
            <span className="nx-adm-drop__title">{drag ? 'Suelta aquí' : 'Arrastra una imagen'}</span>
            <span className="nx-adm-drop__hint">o haz click para seleccionar · JPG · PNG · WebP · máx 2 MB</span>
          </div>
        )}
      </div>
      {err && <div className="nx-adm-err" style={{marginTop: 10}}>{err}</div>}
    </div>
  );
}

/* ─────────── LOGIN ─────────── */
function LoginPage() {
  const [email, setEmail] = React.useState('admin@nexifystudio.es');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(true);
  const [err, setErr] = React.useState('');

  function submit(e) {
    e.preventDefault();
    if (!email.includes('@') || password.length < 4) {
      setErr('Revisa el email y la contraseña (mínimo 4 caracteres).');
      return;
    }
    saveStore(STORE.auth, { email, ts: Date.now() });
    window.location.href = 'Dashboard.html';
  }

  return (
    <div className="nx-login">
      <div className="nx-login__dots" aria-hidden="true" />

      {/* LEFT — brand panel */}
      <aside className="nx-login__brand">
        <a href="Landing Page.html" className="nx-login__crumb">← Volver al sitio</a>
        <div className="nx-login__stamp">
          <div className="nx-login__stamp-row">
            <span>EST. 2023</span>
            <span>VLC · ES</span>
          </div>
          <div className="nx-login__stamp-body">
            Panel<br />interno del<br />estudio.
          </div>
          <div className="nx-login__stamp-row">
            <span>v1.0</span>
            <span>nexifystudio.es</span>
          </div>
        </div>
        <h1 className="nx-login__title">
          <span><em>Acceso</em></span>
          <span><em>restringido.</em></span>
        </h1>
        <p className="nx-login__lead">
          Gestiona el roster de creadores y los casos de éxito que se publican en la web.
        </p>
      </aside>

      {/* RIGHT — form */}
      <main className="nx-login__panel">
        <div className="nx-login__card">
          <div className="nx-login__card-head">
            <span className="nx-overline">Login · Equipo Nexify</span>
            <h2>Entra al estudio.</h2>
          </div>
          <form className="nx-login__form" onSubmit={submit}>
            <Field label="Correo">
              <input
                type="email" autoComplete="email" required
                value={email} onChange={e => setEmail(e.target.value)}
                placeholder="tunombre@nexifystudio.es"
                className="nx-adm-input"
              />
            </Field>
            <Field label="Contraseña" hint="Mínimo 4 caracteres (demo).">
              <input
                type="password" autoComplete="current-password" required
                value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="nx-adm-input"
              />
            </Field>
            <label className="nx-adm-check">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
              <span>Recordar este equipo</span>
            </label>
            {err && <div className="nx-adm-err">{err}</div>}
            <Btn type="submit" variant="primary" full>Entrar al panel →</Btn>
          </form>
          <div className="nx-login__foot">
            ¿Problemas para entrar? Escribe a <a href="mailto:hola@nexifystudio.es">hola@nexifystudio.es</a>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ─────────── DASHBOARD shell ─────────── */
function useHashRoute(defaultRoute) {
  const [route, setRoute] = React.useState(() => (window.location.hash || '').replace('#', '') || defaultRoute);
  React.useEffect(() => {
    const onHash = () => setRoute((window.location.hash || '').replace('#', '') || defaultRoute);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [defaultRoute]);
  return [route, (r) => { window.location.hash = r; }];
}

function Dashboard() {
  const [route, go] = useHashRoute('creadores');

  // Auth guard (very loose, demo only)
  React.useEffect(() => {
    const auth = loadStore(STORE.auth, null);
    if (!auth) window.location.href = 'Login.html';
  }, []);

  function logout() {
    try { localStorage.removeItem(STORE.auth); } catch (e) {}
    window.location.href = 'Login.html';
  }

  const nav = [
    { id: 'creadores', label: 'Creadores',       icon: '◆' },
    { id: 'casos',     label: 'Casos de éxito',  icon: '★' },
  ];

  return (
    <div className="nx-adm">
      <aside className="nx-adm__side">
        <a href="Landing Page.html" className="nx-adm__brand">
          <span className="nx-adm__brand-mark">NX</span>
          <span className="nx-adm__brand-name">Studio Panel</span>
        </a>
        <nav className="nx-adm__nav">
          {nav.map(n => (
            <button
              key={n.id}
              className={'nx-adm__nav-link' + (route === n.id ? ' is-active' : '')}
              onClick={() => go(n.id)}
            >
              <span className="nx-adm__nav-ico">{n.icon}</span>
              {n.label}
            </button>
          ))}
        </nav>
        <div className="nx-adm__side-foot">
          <div className="nx-adm__user">
            <span>Sesión activa</span>
            <b>{(loadStore(STORE.auth, {}) || {}).email || 'admin@nexifystudio.es'}</b>
          </div>
          <Btn variant="ghost" sm onClick={logout}>Salir</Btn>
        </div>
      </aside>

      <main className="nx-adm__main">
        {route === 'creadores' && <CreatorsAdmin />}
        {route === 'casos'     && <CasesAdmin />}
      </main>
    </div>
  );
}

/* ─────────── CRUD: CREADORES ─────────── */
const CREATOR_FIELDS = [
  { type: 'section', label: 'Identidad', num: '01' },
  { key: 'name',       label: 'Nombre completo', type: 'text', required: true },
  { key: 'handle',     label: 'Handle @',        type: 'text', placeholder: '@usuario', required: true },
  { key: 'avatar',     label: 'Avatar', type: 'image', hint: 'Sube la foto del creador. Se subirá al servidor al guardar.' },

  { type: 'section', label: 'Plataforma y audiencia', num: '02' },
  { key: 'platform',   label: 'Plataforma principal', type: 'select', options: ['Twitch','TikTok','YouTube','Instagram','Kick','X / Twitter'], required: true },
  { key: 'country',    label: 'País',          type: 'text', placeholder: 'ES, BR, MX…' },
  { key: 'followers',  label: 'Audiencia',     type: 'text', placeholder: '480K · 1.2M' },

  { type: 'section', label: 'Posicionamiento', num: '03' },
  { key: 'tag',        label: 'Categoría',     type: 'select', options: ['Variety','Gaming','Tech','Lifestyle','Esports','Fashion','Comedy','Dance','Food','Fitness','Music','Beauty'] },
  { key: 'type',       label: 'Tagline corto', type: 'text', placeholder: 'Gaming · Just Chatting' },
  { key: 'bio',        label: 'Bio',           type: 'textarea', placeholder: 'Descripción para el dossier interno…', full: true },

  { type: 'section', label: 'Contacto', num: '04' },
  { key: 'email',      label: 'Email manager', type: 'text', placeholder: 'nombre@nexifystudio.es' },
  { key: 'featured',   label: 'Destacado en home', type: 'checkbox' },
];

function CreatorsAdmin() {
  const [list, setList] = React.useState(() => loadStore(STORE.creators, SEED_CREATORS));
  const [editing, setEditing] = React.useState(null); // creator obj or 'new'
  const [query, setQuery] = React.useState('');

  function persist(next) { setList(next); saveStore(STORE.creators, next); }
  function save(data) {
    if (data.id) persist(list.map(c => c.id === data.id ? data : c));
    else         persist([{ ...data, id: uid() }, ...list]);
    setEditing(null);
  }
  function remove(id) {
    if (!window.confirm('¿Eliminar este creador? No se puede deshacer.')) return;
    persist(list.filter(c => c.id !== id));
  }

  const filtered = list.filter(c =>
    !query || (c.name + ' ' + c.handle + ' ' + c.platform + ' ' + c.tag).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <CrudShell
      title="Creadores"
      sub="Roster · se sincroniza con la página pública de Creadores"
      count={list.length}
      onAdd={() => setEditing({})}
      query={query}
      onQuery={setQuery}
      tableHead={['','Nombre','Handle','Plataforma','País','Audiencia','Categoría','Tagline','Email','★','']}
      rows={filtered.map(c => ({
        id: c.id,
        cells: [
          <Thumb key="t" src={c.avatar} alt={c.name} />,
          <b key="n">{c.name}</b>,
          <span key="h" className="nx-adm__mono">{c.handle}</span>,
          <span key="p" className="nx-adm__pill">{c.platform}</span>,
          c.country || '—',
          <b key="f">{c.followers || '—'}</b>,
          c.tag || '—',
          <span key="ty" className="nx-adm__truncate" title={c.type}>{c.type || '—'}</span>,
          c.email ? <a key="em" className="nx-adm__mono nx-adm__link" href={'mailto:' + c.email}>{c.email}</a> : <span key="em" className="nx-adm__dim">—</span>,
          c.featured ? <span key="fe" className="nx-adm__star" title="Destacado en home">★</span> : <span key="fe" className="nx-adm__dim">—</span>,
        ],
        onEdit:   () => setEditing(c),
        onDelete: () => remove(c.id),
      }))}
      empty="No hay creadores aún. Añade el primero."
    >
      {editing !== null && (
        <FormModal
          title={editing.id ? 'Editar creador' : 'Nuevo creador'}
          fields={CREATOR_FIELDS}
          value={editing}
          onSave={save}
          onClose={() => setEditing(null)}
        />
      )}
    </CrudShell>
  );
}

/* ─────────── CRUD: CASOS ─────────── */
const CASE_FIELDS = [
  { type: 'section', label: 'Identidad del caso', num: '01' },
  { key: 'brand',     label: 'Marca',     type: 'text', required: true, placeholder: 'Red Bull, L\'Oréal…' },
  { key: 'title',     label: 'Título del caso', type: 'text', required: true, placeholder: 'Una arcade coin-op durante 72h', full: true },
  { key: 'objective', label: 'Objetivo / brief', type: 'textarea', placeholder: 'Activar la audiencia de…', full: true },

  { type: 'section', label: 'Clasificación', num: '02' },
  { key: 'sector',    label: 'Sector marca', type: 'select', options: ['Bebidas','Alimentación','Beauty','Moda','eCommerce','Tecnología','Gaming','Auto','Banca','Telco','Entretenimiento'] },
  { key: 'platform',  label: 'Plataforma',   type: 'text', placeholder: 'Twitch + IG Reels' },
  { key: 'pillType',  label: 'Tipo de pieza',type: 'select', options: ['Stream Game','Playable','Playable Ad','AR Filter','Live Voting','On-site','Trivia','UGC','Brand World'] },

  { type: 'section', label: 'Cover y presentación', num: '03' },
  { key: 'cover',     label: 'Imagen cover', type: 'image', hint: 'Imagen principal de la card. Se subirá al servidor al guardar.' },
  { key: 'variant',   label: 'Estilo card', type: 'select', options: ['image','yellow','ink','paper'] },
  { key: 'size',      label: 'Tamaño en grid', type: 'select', options: ['wide','half'] },

  { type: 'section', label: 'Métrica destacada', num: '04' },
  { key: 'metricBig', label: 'Número destacado', type: 'text', placeholder: '72h · 8.4M · +228%' },
  { key: 'metricLbl', label: 'Label del número', type: 'text', placeholder: 'En vivo · Try-ons · Tráfico app' },

  { type: 'section', label: 'Resultados (4 KPIs)', num: '05' },
  { key: 'r1n', label: 'KPI 1 — número', type: 'text', placeholder: '480K' },
  { key: 'r1l', label: 'KPI 1 — label',  type: 'text', placeholder: 'Espectadores únicos' },
  { key: 'r2n', label: 'KPI 2 — número', type: 'text' },
  { key: 'r2l', label: 'KPI 2 — label',  type: 'text' },
  { key: 'r3n', label: 'KPI 3 — número', type: 'text' },
  { key: 'r3l', label: 'KPI 3 — label',  type: 'text' },
  { key: 'r4n', label: 'KPI 4 — número', type: 'text' },
  { key: 'r4l', label: 'KPI 4 — label',  type: 'text' },

  { type: 'section', label: 'Ficha técnica', num: '06' },
  { key: 'year',     label: 'Año',       type: 'text', placeholder: '2025' },
  { key: 'market',   label: 'Mercado',   type: 'text', placeholder: 'EU + LATAM' },
  { key: 'creators', label: 'Nº creadores involucrados', type: 'text', placeholder: '12' },
  { key: 'duration', label: 'Duración campaña', type: 'text', placeholder: '72h live · 6 semanas' },
  { key: 'featured', label: 'Destacar en home',  type: 'checkbox' },
];

function CasesAdmin() {
  const [list, setList] = React.useState(() => loadStore(STORE.cases, SEED_CASES));
  const [editing, setEditing] = React.useState(null);
  const [query, setQuery] = React.useState('');

  function persist(next) { setList(next); saveStore(STORE.cases, next); }
  function save(data) {
    if (data.id) persist(list.map(c => c.id === data.id ? data : c));
    else         persist([{ ...data, id: uid() }, ...list]);
    setEditing(null);
  }
  function remove(id) {
    if (!window.confirm('¿Eliminar este caso?')) return;
    persist(list.filter(c => c.id !== id));
  }

  const filtered = list.filter(c =>
    !query || (c.brand + ' ' + c.title + ' ' + c.category).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <CrudShell
      title="Casos de éxito"
      sub="Las campañas que se muestran en la sección pública de Casos"
      count={list.length}
      onAdd={() => setEditing({})}
      query={query}
      onQuery={setQuery}
      tableHead={['','Marca','Caso','Tipo','Sector','Plataforma','Año','Mercado','Creators','Duración','Métrica','KPIs','★','']}
      rows={filtered.map(c => ({
        id: c.id,
        cells: [
          <Thumb key="t" src={c.cover} alt={c.title} />,
          <b key="b">{c.brand}</b>,
          <span key="ti" className="nx-adm__case-title" title={c.title}>{c.title}</span>,
          <span key="ct" className="nx-adm__pill">{c.pillType || '—'}</span>,
          c.sector || '—',
          <span key="pl" className="nx-adm__truncate" title={c.platform}>{c.platform || '—'}</span>,
          c.year || '—',
          c.market || '—',
          <b key="cr">{c.creators || '—'}</b>,
          c.duration || '—',
          <span key="m" className="nx-adm__result">{c.metricBig || '—'}{c.metricBig && <em>{c.metricLbl}</em>}</span>,
          <KPISummary key="k" caso={c} />,
          c.featured ? <span key="fe" className="nx-adm__star" title="Destacado en home">★</span> : <span key="fe" className="nx-adm__dim">—</span>,
        ],
        onEdit:   () => setEditing(c),
        onDelete: () => remove(c.id),
      }))}
      empty="No hay casos aún. Añade el primero."
    >
      {editing !== null && (
        <FormModal
          title={editing.id ? 'Editar caso' : 'Nuevo caso'}
          fields={CASE_FIELDS}
          value={editing}
          onSave={save}
          onClose={() => setEditing(null)}
        />
      )}
    </CrudShell>
  );
}

/* ─────────── Reusable CRUD shell + modal ─────────── */
function CrudShell({ title, sub, count, onAdd, query, onQuery, tableHead, rows, empty, children }) {
  return (
    <div className="nx-crud">
      <header className="nx-crud__head">
        <div>
          <span className="nx-overline">{count} en total</span>
          <h1>{title}</h1>
          <p>{sub}</p>
        </div>
        <div className="nx-crud__head-actions">
          <input
            type="text" placeholder="Buscar…"
            value={query} onChange={e => onQuery(e.target.value)}
            className="nx-adm-input nx-adm-input--search"
          />
          <Btn variant="primary" onClick={onAdd}>+ Añadir nuevo</Btn>
        </div>
      </header>

      {rows.length === 0 ? (
        <div className="nx-crud__empty">
          <span>{empty}</span>
          <Btn variant="ink" sm onClick={onAdd}>Crear el primero</Btn>
        </div>
      ) : (
        <div className="nx-crud__tablewrap">
          <table className="nx-crud__table">
            <thead>
              <tr>{tableHead.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id}>
                  {r.cells.map((c, i) => <td key={i}>{c}</td>)}
                  <td className="nx-crud__row-actions">
                    <button className="nx-crud__act" onClick={r.onEdit} aria-label="Editar">Editar</button>
                    <button className="nx-crud__act nx-crud__act--danger" onClick={r.onDelete} aria-label="Eliminar">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {children}
    </div>
  );
}

function FormModal({ title, fields, value, onSave, onClose }) {
  const [data, setData] = React.useState(value || {});
  React.useEffect(() => { setData(value || {}); }, [value]);

  function set(k, v) { setData(d => ({ ...d, [k]: v })); }
  function submit(e) {
    e.preventDefault();
    const missing = fields.find(f => f.required && !String(data[f.key] || '').trim());
    if (missing) { alert('Falta: ' + missing.label); return; }
    onSave(data);
  }

  // close on Esc
  React.useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  function renderField(f, i) {
    if (f.type === 'section') {
      return (
        <div key={'s' + i} className="nx-modal__section">
          {f.num && <span className="nx-modal__section-num">{f.num}</span>}
          <span className="nx-modal__section-label">{f.label}</span>
          <span className="nx-modal__section-rule" aria-hidden="true" />
        </div>
      );
    }
    if (f.type === 'checkbox') {
      return (
        <div key={f.key} className="nx-adm-field nx-adm-field--full nx-adm-field--check">
          <label className="nx-adm-check">
            <input type="checkbox" checked={!!data[f.key]} onChange={e => set(f.key, e.target.checked)} />
            <span>{f.label}</span>
          </label>
          {f.hint && <span className="nx-adm-field__hint">{f.hint}</span>}
        </div>
      );
    }
    if (f.type === 'textarea') {
      return (
        <Field key={f.key} label={f.label} hint={f.hint} full={f.full}>
          <textarea
            className="nx-adm-input nx-adm-input--area"
            rows={3}
            placeholder={f.placeholder || ''}
            value={data[f.key] || ''}
            onChange={e => set(f.key, e.target.value)}
          />
        </Field>
      );
    }
    if (f.type === 'image') {
      return (
        <Field key={f.key} label={f.label} hint={f.hint} full>
          <ImageDrop value={data[f.key] || ''} onChange={v => set(f.key, v)} />
        </Field>
      );
    }
    if (f.type === 'select') {
      return (
        <Field key={f.key} label={f.label} hint={f.hint} full={f.full}>
          <select
            className="nx-adm-input"
            value={data[f.key] || ''}
            onChange={e => set(f.key, e.target.value)}
          >
            <option value="">— Elegir —</option>
            {f.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
      );
    }
    return (
      <Field key={f.key} label={f.label} hint={f.hint} full={f.full}>
        <input
          className="nx-adm-input"
          type={f.type || 'text'}
          placeholder={f.placeholder || ''}
          value={data[f.key] || ''}
          onChange={e => set(f.key, e.target.value)}
        />
      </Field>
    );
  }

  return (
    <div className="nx-modal" role="dialog" aria-modal="true">
      <div className="nx-modal__back" onClick={onClose} />
      <div className="nx-modal__panel">
        <header className="nx-modal__head">
          <h3>{title}</h3>
          <button className="nx-modal__close" onClick={onClose} aria-label="Cerrar">×</button>
        </header>
        <form className="nx-modal__form" onSubmit={submit}>
          <div className="nx-modal__grid">
            {fields.map((f, i) => renderField(f, i))}
          </div>
          <footer className="nx-modal__foot">
            <Btn variant="ghost" onClick={onClose}>Cancelar</Btn>
            <Btn type="submit" variant="primary">{data.id ? 'Guardar cambios' : 'Crear'}</Btn>
          </footer>
        </form>
      </div>
    </div>
  );
}

/* expose to window */
Object.assign(window, { LoginPage, Dashboard, CreatorsAdmin, CasesAdmin });
