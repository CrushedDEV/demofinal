/* Nexify — Creadores page */

const PLATFORM_BASE = {
  Twitch:    'https://www.twitch.tv/',
  YouTube:   'https://www.youtube.com/',
  TikTok:    'https://www.tiktok.com/',
  Instagram: 'https://www.instagram.com/',
  Kick:      'https://kick.com/',
};

function profileUrl(c) {
  const slug = (c.handle || '').replace(/^@/, '');
  const base = PLATFORM_BASE[c.platform] || 'https://';
  if (!slug) return base;
  if (c.platform === 'TikTok' || c.platform === 'YouTube') return base + '@' + slug;
  return base + slug;
}

const CREADORES = [
  { name: 'Lía Romero',   handle: '@liaplays',     platform: 'Twitch',    country: 'ES', followers: '480K', initials: 'LR', tone: 'yellow', tag: 'Variety',   type: 'Gaming · Just Chatting' },
  { name: 'Daniel Quem',  handle: '@danielquem',   platform: 'YouTube',   country: 'BR', followers: '1.2M', initials: 'DQ', tone: 'ink',    tag: 'Tech',      type: 'Tech reviews · vlogs' },
  { name: 'Mireia Vox',   handle: '@mireia.vox',   platform: 'TikTok',    country: 'ES', followers: '920K', initials: 'MV', tone: 'paper',  tag: 'Lifestyle', type: 'Moda · Beauty' },
  { name: 'Bruno Caz',    handle: '@brunocaz',     platform: 'Twitch',    country: 'AR', followers: '210K', initials: 'BC', tone: 'paper',  tag: 'Esports',   type: 'CS2 · Valorant' },
  { name: 'Vega Llanos',  handle: '@vegall',       platform: 'Instagram', country: 'MX', followers: '680K', initials: 'VL', tone: 'yellow', tag: 'Fashion',   type: 'Streetwear · Drops' },
  { name: 'Tito Ruz',     handle: '@titoruz',      platform: 'Kick',      country: 'BR', followers: '340K', initials: 'TR', tone: 'ink',    tag: 'Variety',   type: 'IRL · Reactions' },
  { name: 'Carla Páez',   handle: '@carlapaez',    platform: 'TikTok',    country: 'CL', followers: '1.6M', initials: 'CP', tone: 'yellow', tag: 'Comedy',    type: 'Sketches · Memes' },
  { name: 'Yago Velasco', handle: '@yagovel',      platform: 'YouTube',   country: 'ES', followers: '880K', initials: 'YV', tone: 'paper',  tag: 'Gaming',    type: 'Speedrun · Retro' },
  { name: 'Anuk Pereira', handle: '@anukperz',     platform: 'Twitch',    country: 'BR', followers: '420K', initials: 'AP', tone: 'ink',    tag: 'Music',     type: 'DJ sets · Producers' },
  { name: 'Iker Nole',    handle: '@ikernole',     platform: 'Instagram', country: 'ES', followers: '290K', initials: 'IN', tone: 'paper',  tag: 'Fitness',   type: 'Training · Reels' },
  { name: 'Sofi Trax',    handle: '@sofitrax',     platform: 'TikTok',    country: 'MX', followers: '2.1M', initials: 'ST', tone: 'yellow', tag: 'Dance',     type: 'Dance · Trends' },
  { name: 'Rama Otto',    handle: '@ramaotto',     platform: 'YouTube',   country: 'AR', followers: '560K', initials: 'RO', tone: 'ink',    tag: 'Food',      type: 'Food · Travel' },
];

const PLATFORMS = ['Todas', 'Twitch', 'YouTube', 'TikTok', 'Instagram', 'Kick'];
const COUNTRIES = ['Todos', 'ES', 'BR', 'MX', 'AR', 'CL'];

const NXR = {};

/* ============ HEADER ============ */
NXR.Head = function Head() {
  return (
    <section className="nx-page-head">
      <div className="nx-page-head__bg" />
      <div className="nx-page-head__inner">
        <div className="nx-page-head__crumb">
          <a href="Landing Page.html">Inicio</a> <span>/</span> Creadores
        </div>
        <h1>Nuestros<br /><em>creadores</em>.</h1>
        <p className="nx-page-head__lead">
          Red de streamers, tiktokers e influencers que viralizarán tu marca.
          +200 talentos verificados en LATAM y España, briefados y producidos por Nexify.
        </p>
        <div className="nx-page-head__meta">
          <span>Talentos roster<b>+200</b></span>
          <span>Plataformas<b>5</b></span>
          <span>Mercados<b>14</b></span>
          <span>Time-to-drop<b>14 días</b></span>
        </div>
      </div>
    </section>
  );
};

/* ============ HOW WE WORK WITH CREATORS ============ */
NXR.HowWeWork = function HowWeWork() {
  const steps = [
    { num: '01', t: 'Match con tu brief', d: 'Tú nos pasas marca, mercado y audiencia. Te proponemos un shortlist de creadores filtrado por encaje real, no por followers.' },
    { num: '02', t: 'Briefing y guion', d: 'Producimos el brief y el guion con el creador. Mantenemos su tono y voz — lo que mejor convierte. Tú validas la pieza antes de grabar.' },
    { num: '03', t: 'Producción & live-ops', d: 'Grabación, edición y publicación. Si es campaña 360, operamos el stream o el live en directo y reportamos métricas en tiempo real.' },
  ];
  return (
    <section className="nx-creators-howwework nx-creators-howwework--yellow">
      <div className="nx-section__inner">
        <div className="nx-creators-howwework__head">
          <span className="nx-overline">Cómo trabajamos con creadores</span>
          <h2>Tú no eliges followers.<br />Eliges <em>resultado.</em></h2>
        </div>
        <div className="nx-creators-howwework__steps">
          {steps.map(s => (
            <div key={s.num} className="nx-creators-howwework__step">
              <div className="step-num">{s.num}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ DIRECTORY ============ */
NXR.Directory = function Directory() {
  const [platform, setPlatform] = React.useState('Todas');
  const [country, setCountry] = React.useState('Todos');

  const filtered = CREADORES.filter(c =>
    (platform === 'Todas' || c.platform === platform) &&
    (country === 'Todos' || c.country === country)
  );

  return (
    <section className="nx-section" style={{paddingTop: 96}}>
      <div className="nx-section__inner">
        <div className="nx-section__head" style={{marginBottom: 24}}>
          <div>
            <span className="nx-overline">Directorio · {CREADORES.length} de +200 talentos visibles</span>
            <h2>El roster activo<br />de Nexify.</h2>
          </div>
          <p>Una muestra del roster. Pídenos la lista completa filtrada por brief — incluye stats por creator y benchmarks por categoría.</p>
        </div>

        <div className="nx-creators-filters">
          <div className="nx-creators-filter-group">
            <span className="nx-creators-filter-group__lbl">Plataforma</span>
            <div className="nx-creators-filter-group__btns">
              {PLATFORMS.map(p => (
                <button key={p} className={"nx-creators-filter-chip" + (platform === p ? ' is-active' : '')} onClick={() => setPlatform(p)}>{p}</button>
              ))}
            </div>
          </div>
          <div className="nx-creators-filter-group">
            <span className="nx-creators-filter-group__lbl">País</span>
            <div className="nx-creators-filter-group__btns">
              {COUNTRIES.map(c => (
                <button key={c} className={"nx-creators-filter-chip" + (country === c ? ' is-active' : '')} onClick={() => setCountry(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div className="nx-creators-filter-count">{filtered.length} resultado{filtered.length === 1 ? '' : 's'}</div>
        </div>

        <div className="nx-creators-grid">
          {filtered.length === 0 && (
            <div className="nx-creators-empty">
              Sin coincidencias para ese filtro.
              <p>Prueba otra combinación o pide la lista completa.</p>
            </div>
          )}
          {filtered.map(c => (
            <a key={c.name} className="nx-creator" href={profileUrl(c)} target="_blank" rel="noopener noreferrer" aria-label={`Abrir perfil de ${c.name} en ${c.platform}`}>
              <div className={"nx-creator__avatar nx-creator__avatar--" + c.tone + (c.tone !== 'yellow' ? ' nx-creator__avatar--pattern' : '')}>
                {c.initials}
                <span className="nx-creator__platform">{c.platform}</span>
              </div>
              <div className="nx-creator__body">
                <div className="nx-creator__name">{c.name} <span className="nx-creator__ext" aria-hidden="true">↗</span></div>
                <div className="nx-creator__handle">{c.handle} · {c.country}</div>
                <div className="nx-creator__stats">
                  <div className="nx-creator__followers">{c.followers}<span className="unit">followers</span></div>
                  <span className="nx-creator__tag">{c.tag}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ CAMPAÑA 360 BANNER ============ */
NXR.Campaign360 = function Campaign360() {
  const avatars = [
    { in: 'LR', t: 'yellow' }, { in: 'DQ', t: 'ink' }, { in: 'MV', t: 'paper' },
    { in: 'BC', t: 'paper' }, { in: 'VL', t: 'yellow' }, { in: 'TR', t: 'ink' },
    { in: 'CP', t: 'yellow' }, { in: 'YV', t: 'paper' },
  ];
  return (
    <section className="nx-section nx-section--seamless" style={{paddingTop: 0}}>
      <div className="nx-section__inner">
        <div className="nx-360-banner">
          <div className="nx-360-banner__bg" />
          <div className="nx-360-banner__main">
            <NX.Pill variant="ink">Nosotros nos encargamos de todo</NX.Pill>
            <h2>Campaña <em>360</em> con<br />el roster Nexify.</h2>
            <p>Si nos dejas organizar la campaña entera, esta red es tuya. Te seleccionamos los creadores, escribimos los briefs, producimos las piezas, operamos el live y entregamos reporting en tiempo real.</p>

            <div className="nx-360-banner__avatars" aria-hidden="true">
              {avatars.map((a, i) => (
                <span key={i} className={"nx-360-avatar nx-360-avatar--" + a.t}>{a.in}</span>
              ))}
              <span className="nx-360-avatar nx-360-avatar--more">+192</span>
            </div>

            <div className="nx-360-banner__buttons">
              <NX.Btn variant="ink" href="Contacto.html">Pídenos una propuesta 360 →</NX.Btn>
              <NX.Btn variant="ghost" href="Como funciona.html">Cómo trabajamos</NX.Btn>
            </div>
          </div>
          <div className="nx-360-banner__side">
            <div className="nx-360-banner__side-stat">
              <div className="num">+200</div>
              <div className="lbl">Talentos en roster<br />ya verificados</div>
            </div>
            <ul>
              <li>Selección y casting por brief</li>
              <li>Briefing y guiones con el creador</li>
              <li>Producción audiovisual end-to-end</li>
              <li>Operación de live / streams</li>
              <li>Reporting en tiempo real</li>
              <li>Live-ops post-campaña</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, NXR);
window.CREADORES = CREADORES;
