/* Nexify — Casos de éxito page */

const CASOS = [
  {
    id: 'redbull-arena',
    brand: 'Red Bull',
    title: 'Una arcade coin-op en stream durante 72 horas.',
    objective: 'Activar la audiencia de Twitch alrededor del lanzamiento de Red Bull Sugarfree con un coin-op clásico interpretado por streamers.',
    platform: 'Twitch + IG Reels',
    sector: 'Bebidas',
    size: 'wide',
    img: 'assets/photo-arcade-tv.jpg',
    style: 'image',
    pillType: 'Stream Game',
    metric: '72h',
    metricLbl: 'En vivo',
    results: [
      { num: '480K', lbl: 'Espectadores únicos' },
      { num: '3.2M', lbl: 'Plays' },
      { num: '24min', lbl: 'Sesión media' },
      { num: '+42%', lbl: 'Ventas spot' },
    ],
    facts: { Año: '2025', Mercado: 'EU + LATAM', Creators: '12', Duración: '72h live' },
  },
  {
    id: 'mondelez-trivia',
    brand: 'Mondelez',
    title: 'Trivia diaria en 9 mercados de LATAM.',
    objective: 'Reactivar el TOP-of-mind de Trident en LATAM con una trivia interactiva diaria dentro de TikTok Live y comments-driven gameplay.',
    platform: 'TikTok Live',
    sector: 'Alimentación',
    size: 'half',
    style: 'yellow',
    pillType: 'Playable',
    metric: '2.1M',
    metricLbl: 'Plays totales',
    results: [
      { num: '2.1M', lbl: 'Plays' },
      { num: '9', lbl: 'Mercados' },
      { num: '84%', lbl: 'Tasa de finalización' },
      { num: '+18pts', lbl: 'Brand recall' },
    ],
    facts: { Año: '2026', Mercado: 'LATAM', Creators: '36', Duración: '9 días' },
  },
  {
    id: 'loreal-mirror',
    brand: "L'Oréal",
    title: 'Try-on como speed-run en filtro AR.',
    objective: 'Convertir el try-on de máscaras en una experiencia social donde la audiencia se reta a completar el look antes que el bestie.',
    platform: 'Instagram AR',
    sector: 'Beauty',
    size: 'half',
    img: 'assets/photo-vr.jpg',
    style: 'image',
    pillType: 'AR Filter',
    metric: '8.4M',
    metricLbl: 'Try-ons',
    results: [
      { num: '8.4M', lbl: 'Try-ons' },
      { num: '+9.2%', lbl: 'CTR a tienda' },
      { num: '32K', lbl: 'UGC posts' },
      { num: '02:14', lbl: 'Avg session' },
    ],
    facts: { Año: '2025', Mercado: 'EU + US', Creators: '8', Duración: '6 semanas' },
  },
  {
    id: 'mercadolibre-drop',
    brand: 'Mercado Libre',
    title: 'Drop con creadores: el chat decide los descuentos.',
    objective: 'Black Friday gamificado donde la audiencia vota descuentos en vivo y los creadores compiten por el mejor combo.',
    platform: 'Twitch',
    sector: 'eCommerce',
    size: 'wide',
    style: 'ink',
    pillType: 'Live Voting',
    metric: '14M',
    metricLbl: 'Interacciones',
    results: [
      { num: '14M', lbl: 'Interacciones' },
      { num: '+228%', lbl: 'Tráfico app' },
      { num: '€8.4M', lbl: 'GMV stream' },
      { num: '4h', lbl: 'Live' },
    ],
    facts: { Año: '2024', Mercado: 'AR + BR + MX', Creators: '6', Duración: '1 noche' },
  },
  {
    id: 'mahou-arcade',
    brand: 'Mahou',
    title: 'Arcade físico en festivales: 5 ciudades.',
    objective: 'Una experiencia coin-op real en festivales de verano con leaderboard en vivo y prizes desbloqueados por comments en redes.',
    platform: 'On-site + IG',
    sector: 'Bebidas',
    size: 'half',
    style: 'paper',
    pillType: 'On-site',
    metric: '124K',
    metricLbl: 'Plays físicas',
    results: [
      { num: '124K', lbl: 'Plays' },
      { num: '5', lbl: 'Ciudades' },
      { num: '38K', lbl: 'Leads' },
      { num: '+62%', lbl: 'Engagement IG' },
    ],
    facts: { Año: '2025', Mercado: 'España', Creators: '4', Duración: '8 fines de semana' },
  },
  {
    id: 'nike-runner',
    brand: 'Nike',
    title: 'Endless runner con tu Strava sincronizado.',
    objective: 'Un endless runner mobile-web donde tus km reales se traducen en boosters dentro del juego durante el lanzamiento de la Pegasus 41.',
    platform: 'Web App',
    sector: 'Sportswear',
    size: 'half',
    style: 'ink',
    pillType: 'Web Game',
    metric: '+612K',
    metricLbl: 'Strava conexiones',
    results: [
      { num: '612K', lbl: 'Strava conexiones' },
      { num: '11min', lbl: 'Sesión media' },
      { num: '+34%', lbl: 'App installs' },
      { num: '4.8★', lbl: 'NPS' },
    ],
    facts: { Año: '2025', Mercado: 'Global', Creators: '14', Duración: '4 semanas' },
  },
  {
    id: 'spotify-quest',
    brand: 'Spotify',
    title: 'Quest de descubrimiento musical con creators.',
    objective: 'Convertir el Wrapped en una quest jugable durante diciembre: cada creator tiene su misión y pistas en stories.',
    platform: 'IG + Web',
    sector: 'Streaming',
    size: 'half',
    style: 'yellow',
    pillType: 'AR + Web',
    metric: '+2.4M',
    metricLbl: 'Quests',
    results: [
      { num: '2.4M', lbl: 'Quests iniciadas' },
      { num: '88%', lbl: 'Completion' },
      { num: '+19%', lbl: 'Premium signups' },
      { num: '600+', lbl: 'Playlists UGC' },
    ],
    facts: { Año: '2024', Mercado: 'Global', Creators: '24', Duración: '3 semanas' },
  },
  {
    id: 'movistar-tower',
    brand: 'Movistar',
    title: 'Tower defense colaborativo en YouTube Live.',
    objective: 'Tower defense donde el chat construye torres con superchats y los streamers defienden la base. Hype-train de la nueva fibra.',
    platform: 'YouTube Live',
    sector: 'Telco',
    size: 'half',
    img: 'assets/photo-stats-post.jpg',
    style: 'image',
    pillType: 'Co-op Live',
    metric: '180K',
    metricLbl: 'Concurrentes peak',
    results: [
      { num: '180K', lbl: 'Concurrentes peak' },
      { num: '5h', lbl: 'Live' },
      { num: '+74%', lbl: 'Leads fibra' },
      { num: '€124K', lbl: 'Donations charity' },
    ],
    facts: { Año: '2025', Mercado: 'España + LATAM', Creators: '9', Duración: '1 noche' },
  },
];

const NXC = {};

/* ============ HEADER ============ */
NXC.Head = function Head() {
  return (
    <section className="nx-page-head">
      <div className="nx-page-head__bg" />
      <div className="nx-page-head__inner">
        <div className="nx-page-head__crumb">
          <a href="Landing Page.html">Inicio</a> <span>/</span> Casos de éxito
        </div>
        <h1>Casos donde<br />la audiencia <em>juega</em><br />a tu marca.</h1>
        <p className="nx-page-head__lead">
          Una selección de campañas gamificadas que llevamos al live entre 2024 y 2026.
          Cada caso mide finalización, sesión media y UGC — no impresiones infladas.
        </p>
        <div className="nx-page-head__meta">
          <span>Estudio activo desde 2022</span>
          <span>Casos publicados<b>28</b></span>
          <span>Mercados<b>14</b></span>
          <span>Creadores roster<b>+200</b></span>
        </div>
      </div>
    </section>
  );
};

/* ============ FILTERS + GRID ============ */
NXC.Grid = function Grid({ onOpen }) {
  const [filter, setFilter] = React.useState('all');
  const filters = [
    { id: 'all',       label: 'Todos',         test: () => true },
    { id: 'stream',    label: 'Stream Games',  test: c => /stream|live/i.test(c.pillType) || /Twitch|YouTube/i.test(c.platform) },
    { id: 'social',    label: 'Social / AR',   test: c => /AR|tiktok|ig/i.test(c.pillType + ' ' + c.platform) },
    { id: 'onsite',    label: 'On-site',       test: c => /on-site/i.test(c.pillType + ' ' + c.platform) },
    { id: 'web',       label: 'Web Games',     test: c => /web/i.test(c.pillType + ' ' + c.platform) },
  ];
  const counts = Object.fromEntries(filters.map(f => [f.id, CASOS.filter(f.test).length]));
  const filtered = CASOS.filter(filters.find(f => f.id === filter).test);

  return (
    <section className="nx-section" style={{paddingTop: 64}}>
      <div className="nx-section__inner">
        <div className="nx-casos-filters">
          {filters.map(f => (
            <button
              key={f.id}
              className={"nx-casos-filter" + (filter === f.id ? ' is-active' : '')}
              onClick={() => setFilter(f.id)}
            >
              {f.label}<span className="count">({counts[f.id]})</span>
            </button>
          ))}
        </div>
        <div className="nx-casos-grid">
          {filtered.map((c, idx) => {
            const num = String(CASOS.indexOf(c) + 1).padStart(2, '0');
            const visualStyle = c.img
              ? { backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : c.style === 'yellow' ? { background: 'var(--nx-yellow)' }
              : c.style === 'paper' ? { background: 'var(--nx-bone)' }
              : { background: 'var(--nx-ink)' };
            return (
              <button key={c.id} className={"nx-caso nx-caso--" + c.size} onClick={() => onOpen(c)}>
                <div className="nx-caso__visual" style={visualStyle}>
                  <div className="nx-caso__visual-tags">
                    <span className="nx-caso__num">CASO · {num}</span>
                    <span className="nx-caso__platform">{c.platform}</span>
                  </div>
                  <div className="nx-caso__visual-kpi">
                    <div className="metric">{c.metric}</div>
                    <div className="metric-lbl">{c.metricLbl}</div>
                  </div>
                  <div className="nx-caso__visual-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </div>
                </div>
                <div className="nx-caso__meta">
                  <div className="nx-caso__row">
                    <span className="nx-caso__brand-name">{c.brand}</span>
                    <span className="nx-caso__sector">{c.sector}</span>
                  </div>
                  <h3 className="nx-caso__campaign">{c.title}</h3>
                  <p className="nx-caso__objective">{c.objective}</p>
                  <div className="nx-caso__foot">
                    <span className="nx-caso__pill-type">{c.pillType}</span>
                    <span className="nx-caso__year">{c.facts['Año']} · {c.facts['Mercado']}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============ MODAL ============ */
NXC.Modal = function Modal({ caso, onClose }) {
  React.useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  if (!caso) return null;
  return (
    <div className="nx-modal-backdrop" onClick={onClose}>
      <div className="nx-modal" onClick={e => e.stopPropagation()}>
        <button className="nx-modal__close" onClick={onClose} aria-label="Cerrar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <div
          className="nx-modal__hero"
          style={caso.img ? {backgroundImage: `url(${caso.img})`} : (caso.style === 'yellow' ? {background: 'var(--nx-yellow)'} : caso.style === 'paper' ? {background: 'var(--nx-bone)', color: 'var(--nx-black)'} : undefined)}
        >
          <div>
            <NX.Pill variant="ink" dot live>{caso.pillType} · {caso.platform}</NX.Pill>
            <h2>{caso.title}</h2>
            <div className="meta" style={{marginTop: 16}}>{caso.brand} · {caso.facts['Año']} · {caso.facts['Mercado']}</div>
          </div>
        </div>
        <div className="nx-modal__body">
          <div>
            <h3>Objetivo</h3>
            <p>{caso.objective}</p>
            <h3>Resultados</h3>
            <div className="nx-modal__results">
              {caso.results.map(r => (
                <div key={r.lbl}>
                  <div className="r-num">{r.num}</div>
                  <div className="r-lbl">{r.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="nx-modal__side">
            <h4>Ficha técnica</h4>
            {Object.entries(caso.facts).map(([k, v]) => (
              <div key={k} className="fact">
                <span className="lbl">{k}</span>
                <span className="val">{v}</span>
              </div>
            ))}
            <div className="fact">
              <span className="lbl">Sector</span>
              <span className="val">{caso.sector}</span>
            </div>
            <NX.Btn variant="primary" href="Contacto.html" style={{marginTop: 16}}>Quiero algo así →</NX.Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, NXC);
window.CASOS = CASOS;
