/* Nexify Landing — components for the homepage */

const NX = {};

NX.Pill = function Pill({ children, variant = 'outline', dot = false, live = false, style, className }) {
  const cls = ['nx-pill',
    variant === 'ink' && 'nx-pill--ink',
    variant === 'yellow' && 'nx-pill--yellow',
    variant === 'ghost-light' && 'nx-pill--ghost-light',
    className
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} style={style}>
      {dot && <span className={"dot" + (live ? " live" : "")} />}
      {children}
    </span>
  );
};

NX.Btn = function Btn({ children, variant = 'primary', onDark = false, onClick, href, style, size }) {
  const cls = ['nx-btn',
    variant === 'primary' && 'nx-btn--primary',
    variant === 'ink' && 'nx-btn--ink',
    variant === 'ghost' && 'nx-btn--ghost',
    onDark && 'nx-btn--on-dark',
    size === 'sm' && 'nx-btn--sm'
  ].filter(Boolean).join(' ');
  if (href) return <a href={href} className={cls} style={style} onClick={onClick}>{children}</a>;
  return <button className={cls} style={style} onClick={onClick} type="button">{children}</button>;
};

/* ============ NAV ============ */
NX.Nav = function Nav({ logoVariant = 'white', active = 'inicio' }) {
  const items = [
    { id: 'inicio',     label: 'Inicio',         href: 'Landing Page.html' },
    { id: 'como',       label: 'Cómo funciona',  href: 'Como funciona.html' },
    { id: 'casos',      label: 'Casos de éxito', href: 'Casos.html' },
    { id: 'creadores',  label: 'Creadores',      href: 'Creadores.html' },
  ];
  return (
    <div className="nx-nav-wrap">
      <nav className="nx-nav">
        <a className="nx-nav__brand" href="Landing Page.html">
          <img src={"assets/logo-primary-" + logoVariant + ".png"} alt="Nexify Studio" />
        </a>
        <div className="nx-nav__links">
          {items.map(item => (
            <a key={item.id} href={item.href} className={active === item.id ? 'is-active' : ''}>{item.label}</a>
          ))}
        </div>
        <NX.Btn variant="primary" href="Contacto.html" size="sm">Empieza un proyecto →</NX.Btn>
      </nav>
    </div>
  );
};

/* ============ HERO ============ */
NX.Hero = function Hero({ variant = 'ink' }) {
  const isDark = variant === 'ink';
  const cls = 'nx-hero' + (variant !== 'ink' ? ' nx-hero--' + variant : '');
  return (
    <section className={cls} id="top">
      <div className="nx-hero__bg" aria-hidden="true">
        <div className="nx-hero__dots" />
        <div className="nx-hero__blur" />
      </div>
      <div className="nx-hero__inner">
        <div className="nx-hero__chip-row">
          <NX.Pill variant="yellow">Estudio creativo · Valencia, España</NX.Pill>
          <NX.Pill variant={isDark ? 'ghost-light' : undefined}>TikTok · Instagram · YouTube · Twitch</NX.Pill>
        </div>

        <div className="nx-hero__main">
          <h1 className="nx-hero__title">
            <span className="nx-hero__title-line">Tu audiencia</span>
            <span className="nx-hero__title-line">no mira.</span>
            <span className="nx-hero__title-line nx-hero__title-line--stamp">
              <em>Juega.</em>
            </span>
          </h1>

          <aside className="nx-hero__side">
            <div className="nx-hero__stamp" aria-hidden="true">
              <div className="nx-hero__stamp-row">
                <span>EST. 2023</span>
                <span>VLC · ES</span>
              </div>
              <div className="nx-hero__stamp-body">
                Campañas<br />jugables<br />en redes.
              </div>
              <div className="nx-hero__stamp-row">
                <span>100% in-house</span>
                <span>4 sem.</span>
              </div>
            </div>

            <p className="nx-hero__lead">
              Diseñamos campañas interactivas integradas con las plataformas de redes sociales donde comentar, votar y compartir no es un CTA — es la mecánica. Convertimos espectadores en participantes.
            </p>

            <div className="nx-hero__cta">
              <NX.Btn variant="primary" href="Contacto.html">Hablemos del proyecto →</NX.Btn>
              <NX.Btn variant="ghost" onDark={isDark} href="Casos.html">Ver casos de éxito</NX.Btn>
            </div>
          </aside>
        </div>
      </div>

      <div className="nx-hero__strip" aria-hidden="true">
        <div className="nx-hero__strip-track">
          {Array.from({length: 3}).map((_, k) => (
            <React.Fragment key={k}>
              <span>+50 marcas</span><i>✦</i>
              <span>+200 creators</span><i>✦</i>
              <span>12M plays/Q</span><i>✦</i>
              <span>brief → viral en 4 semanas</span><i>✦</i>
              <span>Valencia · España</span><i>✦</i>
              <span>100% in-house</span><i>✦</i>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ============ ¿QUÉ ES NEXIFY? ============ */
NX.WhatIsNexify = function WhatIsNexify() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <section className="nx-section nx-whatis" id="que-es">
      <div className="nx-section__inner">
        <div className="nx-whatis__grid">
          <div className="nx-whatis__copy">
            <span className="nx-overline">¿Qué es Nexify? · Manifesto</span>
            <h2>No hacemos anuncios.<br />Hacemos <em>jugar</em> a tu audiencia.</h2>
            <p className="nx-whatis__lead">
              Nexify diseña campañas interactivas donde la audiencia <strong>participa dentro de la experiencia</strong> a través de redes sociales. La audiencia comenta, vota, juega y comparte — y todo eso pasa a ser parte de la mecánica.
            </p>
            <p>
              Reinventamos el marketing para los nuevos formatos: integramos juegos con TikTok, Instagram, YouTube y Twitch, y fomentamos la interacción de la audiencia para convertir <strong>espectadores en participantes</strong> y campañas en contenido viral.
            </p>
            <ul className="nx-whatis__bullets">
              <li><span className="dot" />Engagement real, no impresiones infladas.</li>
              <li><span className="dot" />Contenido orgánico generado por la audiencia.</li>
              <li><span className="dot" />Viralidad por mecánica, no por presupuesto.</li>
            </ul>
          </div>
          <div className="nx-whatis__player" onClick={() => setPlaying(p => !p)} role="button" aria-label={playing ? 'Pausar reel' : 'Reproducir reel'}>
            <div className="nx-whatis__player-bg" style={{backgroundImage: 'url(' + ((window.__resources && window.__resources.photoLockup) || 'assets/photo-lockup.jpg') + ')'}} />
            <div className="nx-whatis__player-frame">
              {!playing && (
                <button type="button" className="nx-whatis__play" aria-label="Play">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </button>
              )}
              {playing && (
                <div className="nx-whatis__playing">
                  <div className="nx-whatis__playing-bar"><i /></div>
                  <span>Reproduciendo · 00:42 / 02:14</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ FAQ ============ */
NX.FAQ = function FAQ() {
  const faqs = [
    { q: '¿En cuánto tiempo lanzamos?', a: 'Sprint estándar de 4 semanas desde el brief al live. Si la campaña tiene fecha clave (lanzamiento de producto, evento, festival), comprimimos a 2-3 semanas con un equipo dedicado.' },
    { q: '¿Necesito tener creadores cerrados?', a: 'No. Tenemos un roster propio de +200 creadores en TikTok, Twitch, YouTube e Instagram. Te proponemos el match según marca, mercado y audiencia.' },
    { q: '¿En qué plataformas integramos los juegos?', a: 'TikTok (Live, Effect House), Instagram (Reels, AR), YouTube (Live, Shorts), Twitch (extensions, chat-driven), Kick y eventos físicos con totems o stream interactivo.' },
    { q: '¿Cómo se mide el éxito?', a: 'No medimos en impresiones. Medimos en tasa de finalización del juego, tiempo de sesión, shares orgánicos, UGC generado y retención D7. Te entregamos dashboard en vivo.' },
    { q: '¿Trabajáis fuera de LATAM y España?', a: 'Sí. Hemos hecho campañas en EU, US, México, Brasil y Chile. Producción remota o equipo on-site según el alcance.' },
    { q: '¿Qué presupuestos manejáis?', a: 'Formato A (solo juego) desde €25K. Formato B (campaña 360 con creators y live-ops) desde €60K. Hacemos también pilots low-cost si quieres testear la mecánica primero.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="nx-section nx-section--dark nx-faq nx-faq--dark" id="faq">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">FAQ · Lo que nos preguntan en el primer call</span>
            <h2>Preguntas frecuentes.</h2>
          </div>
          <p>¿Algo más? Te respondemos en 24h con tres direcciones creativas y un presupuesto orientativo.</p>
        </div>
        <div className="nx-faq__list">
          {faqs.map((f, i) => (
            <div key={f.q} className={"nx-faq__item" + (open === i ? ' is-open' : '')}>
              <button type="button" className="nx-faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="text">{f.q}</span>
                <span className="caret">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                </span>
              </button>
              <div className="nx-faq__a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ STATS ============ */
NX.Stats = function Stats({ dark = false }) {
  const items = [
    { num: '+50', lbl: 'Marcas en campaña' },
    { num: '+200', lbl: 'Creadores en roster' },
    { num: '12M', lbl: 'Plays este trimestre' },
    { num: '02:48', lbl: 'Sesión media' },
  ];
  return (
    <section style={{padding: dark ? '0 24px 64px' : '0 24px 96px', background: dark ? 'var(--nx-black)' : 'transparent', color: dark ? '#fff' : 'inherit'}}>
      <div className="nx-section__inner">
        <div className="nx-stats">
          {items.map(s => (
            <div key={s.lbl} className="nx-stat">
              <div className="nx-stat__num">{s.num}</div>
              <div className="nx-stat__lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ CÓMO FUNCIONA ============ */
NX.Process = function Process({ variant = 'timeline' }) {
  const steps = [
    { num: '01', t: 'Analizamos tus necesidades', d: 'Marca, audiencia y objetivos de negocio en una sesión. En 48h tienes tres direcciones creativas sobre la mesa.', hint: 'Día 0 — 2' },
    { num: '02', t: 'Creamos la experiencia', d: 'Diseñamos una mecánica jugable integrada al 100% con tu identidad de marca. Arte, dev y game design dentro del estudio, sin intermediarios.', hint: 'Semanas 1 — 3' },
    { num: '03', t: 'Lanzamos la campaña', d: 'Activamos la experiencia con una campaña 360: creadores del roster Nexify, contenido de lanzamiento y distribución en redes para maximizar el impacto.', hint: 'Semana 4' },
    { num: '04', t: 'Viralizas tu marca', d: 'Tu audiencia pasa de espectadora a participante. Comenta, juega y comparte — la mecánica hace el resto. Medimos resultados reales, no impresiones.', hint: 'Ongoing' },
  ];
  const cls = 'nx-process nx-process--' + variant;
  return (
    <section className="nx-section nx-section--yellow" id="como-funciona">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">Cómo funciona · De brief a viral en 4 pasos</span>
            <h2>Del brief a viral<br />en cuatro semanas.</h2>
          </div>
          <p>Sin roadmaps eternos. Analizamos, creamos, lanzamos y medimos en un sprint de cuatro semanas.</p>
        </div>
        <div className={cls}>
          {steps.map(s => (
            <div key={s.num} className="nx-step">
              <div className="nx-step__head">
                <div className="nx-step__num">{s.num}</div>
                <div className="nx-step__dot" />
              </div>
              <div>
                <div className="nx-step__title">{s.t}</div>
                <div className="nx-step__copy">{s.d}</div>
              </div>
              <div className="nx-step__hint">{s.hint}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ SERVICIOS ============ */
NX.Services = function Services() {
  const mechanics = [
    { num: '01', title: 'Comentarios → personajes', copy: 'Comentar en el post te mete dentro del juego como jugador real.' },
    { num: '02', title: 'Likes → power-ups', copy: 'Cada like o share del feed desbloquea ventajas durante la partida.' },
    { num: '03', title: 'El chat decide', copy: 'En stream, la audiencia vota reglas y twists en tiempo real.' },
    { num: '04', title: 'Creators como protagonistas', copy: 'Los creadores del roster entran al juego que su audiencia ya sigue.' },
  ];
  const packages = [
    {
      tag: 'Formato A',
      title: 'Solo el juego',
      copy: 'Diseñamos y construimos el juego de marca a medida. Tú lo activas en tus canales.',
      includes: ['Concepto y game design', 'Diseño visual y desarrollo', 'Integración con la red elegida', 'Manual de operación y métricas'],
      cta: 'Pídenos el juego',
      variant: 'white',
    },
    {
      tag: 'Formato B · Más pedido',
      title: 'Campaña 360',
      copy: 'El juego + toda la campaña. Creators, producción, live-ops y reporting. End-to-end.',
      includes: ['Todo lo del Formato A', 'Creators del roster Nexify', 'Producción de videos y streams', 'Operación en vivo y reporting'],
      cta: 'Quiero la campaña completa',
      variant: 'yellow',
    },
  ];
  return (
    <section className="nx-section nx-section--dark" id="servicios">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">Servicios · Un solo core, dos formatos</span>
            <h2>Juegos de marca que integran<br />a tu audiencia.</h2>
          </div>
          <p>Construimos juegos donde los comentarios, likes y votos pasan a ser parte de la mecánica. Como un Squid Game donde comentas para entrar y apareces dentro.</p>
        </div>

        <div className="nx-mechanics">
          {mechanics.map(m => (
            <div key={m.num} className="nx-mechanic">
              <div className="nx-mechanic__num">{m.num}</div>
              <div className="nx-mechanic__title">{m.title}</div>
              <div className="nx-mechanic__copy">{m.copy}</div>
            </div>
          ))}
        </div>

        <div className="nx-packages-head">
          <h3 className="nx-packages-title">Solo el juego, o la campaña entera.</h3>
        </div>
        <div className="nx-packages">
          {packages.map(p => (
            <div key={p.title} className={"nx-package nx-package--" + p.variant}>
              <div className="nx-package__head">
                <span className="nx-package__tag">{p.tag}</span>
                <h4 className="nx-package__title">{p.title}</h4>
                <p className="nx-package__copy">{p.copy}</p>
              </div>
              <ul className="nx-package__list">
                {p.includes.map(i => (
                  <li key={i}><span className="check">✓</span>{i}</li>
                ))}
              </ul>
              <div className="nx-package__cta">
                <NX.Btn variant={p.variant === 'yellow' ? 'ink' : 'primary'} href="Contacto.html">{p.cta} →</NX.Btn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ CREADORES ============ */
NX.Creators = function Creators() {
  const creators = [
    { name: 'Lía Romero',  meta: 'Twitch · 480K',  initials: 'LR', tone: 'yellow', url: 'https://www.twitch.tv/liaplays' },
    { name: 'Daniel Quem', meta: 'YouTube · 1.2M', initials: 'DQ', tone: 'ink',    url: 'https://www.youtube.com/@danielquem' },
    { name: 'Mireia Vox',  meta: 'TikTok · 920K',  initials: 'MV', tone: 'paper',  url: 'https://www.tiktok.com/@mireia.vox' },
    { name: 'Bruno Caz',   meta: 'Twitch · 210K',  initials: 'BC', tone: 'paper',  url: 'https://www.twitch.tv/brunocaz' },
    { name: 'Vega Llanos', meta: 'IG · 680K',      initials: 'VL', tone: 'yellow', url: 'https://www.instagram.com/vegall' },
    { name: 'Tito Ruz',    meta: 'Kick · 340K',    initials: 'TR', tone: 'ink',    url: 'https://kick.com/titoruz' },
  ];
  return (
    <section className="nx-section" id="creadores">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">Creadores · Roster propio</span>
            <h2>Una red de creadores<br />ya activada.</h2>
          </div>
          <p>+200 talentos en gaming, lifestyle y cultura digital. Los seleccionamos, los briefamos y producimos el drop con ellos.</p>
        </div>
        <div className="nx-creators">
          <div className="nx-creators__copy">
            <NX.Pill variant="yellow" style={{marginBottom: 18}}>200+ creadores activos</NX.Pill>
            <h3>Colaboraciones con creadores para campañas de marca.</h3>
            <p>Trabajamos con el creador idóneo para cada brief: streamers de Twitch, talento de TikTok, casters de esports y artistas digitales en LATAM y España.</p>
            <div className="nx-creators__stats">
              <div className="nx-creators__stat"><div className="num">200+</div><div className="lbl">Talentos roster</div></div>
              <div className="nx-creators__stat"><div className="num">86%</div><div className="lbl">Retorno cliente</div></div>
              <div className="nx-creators__stat"><div className="num">14d</div><div className="lbl">Time-to-drop</div></div>
            </div>
            <div style={{marginTop: 28}}>
              <NX.Btn variant="ink" href="Creadores.html">Pide el roster completo →</NX.Btn>
            </div>
          </div>
          <div className="nx-creators__grid">
            {creators.map(c => (
              <a key={c.name} className="nx-creator-card" href={c.url} target="_blank" rel="noopener noreferrer">
                <div className={"nx-creator-card__pic nx-creator-card__pic--" + c.tone}>
                  {c.initials}
                </div>
                <div>
                  <div className="nx-creator-card__name">{c.name} <span className="nx-creator-card__ext" aria-hidden="true">↗</span></div>
                  <div className="nx-creator-card__meta">{c.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ CASOS DE ÉXITO ============ */
NX.Cases = function Cases() {
  return (
    <section className="nx-section nx-section--dark" id="casos">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">Casos de éxito · 2024 — 2026</span>
            <h2>Casos de éxito en marketing<br />gamificado para marcas.</h2>
          </div>
          <p>Medimos resultados en tasa de finalización, no en impresiones. Cada proyecto es un juego hecho a medida.</p>
        </div>

        <div className="nx-work">
          <a href="#" className="nx-case nx-case--big" style={{backgroundImage: 'url(' + ((window.__resources && window.__resources.photoArcade) || 'assets/photo-arcade-tv.jpg') + ')'}}>
            <div className="nx-case__top">
              <NX.Pill dot>Twitch</NX.Pill>
            </div>
            <div className="nx-case__arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
            </div>
            <div className="nx-case__bottom">
              <span className="meta">Red Bull · Live Arena</span>
              <h3>Una arcade coin-op<br />en stream durante<br />72 horas.</h3>
            </div>
          </a>
          <div style={{display:'grid', gap:'18px'}}>
            <a href="#" className="nx-case nx-case--yellow">
              <div className="nx-case__top">
                <NX.Pill>Mondelez</NX.Pill>
              </div>
              <div className="nx-case__arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </div>
              <div className="nx-case__bottom">
                <div className="stat">2.1M</div>
                <span className="meta">Trivia plays · 9 días</span>
                <h3>Trivia en 9 mercados<br />de LATAM.</h3>
              </div>
            </a>
            <a href="#" className="nx-case" style={{backgroundImage: 'url(' + ((window.__resources && window.__resources.photoVR) || 'assets/photo-vr.jpg') + ')'}}>
              <div className="nx-case__top">
                <NX.Pill>L'Oréal</NX.Pill>
              </div>
              <div className="nx-case__arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </div>
              <div className="nx-case__bottom">
                <span className="meta">Mirror · AR Filter</span>
                <h3>Try-on como<br />speed-run.</h3>
              </div>
            </a>
          </div>
        </div>

        <div style={{marginTop: 32, display: 'flex', justifyContent: 'center'}}>
          <NX.Btn variant="ghost" onDark href="Casos.html">Ver los 28 casos →</NX.Btn>
        </div>
      </div>
    </section>
  );
};

/* ============ FINAL CTA — MEGA HABLAMOS? ============ */
NX.FinalCTA = function FinalCTA() {
  return (
    <section className="nx-final-cta" id="contacto-cta">
      <div className="nx-final-cta__bg" />
      <div className="nx-final-cta__inner">

        {/* Top strip: pill + intro */}
        <div className="nx-final-cta__strip">
          <NX.Pill style={{borderColor:'var(--nx-black)'}}>Empieza un proyecto · Respuesta en 24h</NX.Pill>
          <p>Cuéntanos brand, objetivo y plazos. Te respondemos en 24h con tres direcciones creativas y un presupuesto orientativo.</p>
        </div>

        {/* MEGA HABLAMOS? — fills the row, big arrow circle */}
        <a href="Contacto.html" className="nx-cta-mega" aria-label="Hablamos">
          <span className="nx-cta-mega__text">
            Hablamos<span className="nx-cta-mega__q">?</span>
          </span>
          <span className="nx-cta-mega__arr" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </a>

        {/* Bottom strip: contact details + buttons */}
        <div className="nx-final-cta__bottom">
          <div className="nx-final-cta__contact">
            <a href="mailto:hola@nexifystudio.es">hola@nexifystudio.es</a>
            <span>Valencia, España</span>
          </div>
          <div className="nx-final-cta__buttons">
            <NX.Btn variant="ink" href="Contacto.html">Agendar una llamada →</NX.Btn>
            <NX.Btn variant="ghost" href="Casos.html">Ver casos</NX.Btn>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ============ FOOTER ============ */
NX.Footer = function Footer() {
  return (
    <footer className="nx-footer">
      <div className="nx-footer__inner">
        <div className="nx-footer__top">
          <div>
            <img src={(window.__resources && window.__resources.logo_white) || "assets/logo-primary-white.svg"} alt="Nexify" style={{height: 28, marginBottom: 16}} />
            <p style={{maxWidth: 320, fontSize: 14, lineHeight: 1.55, margin: '0 0 20px'}}>
              Un estudio creativo en Valencia que convierte campañas de marketing en experiencias jugables.
            </p>
            <NX.Pill variant="yellow">nexifystudio.es</NX.Pill>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="Casos.html">Casos de éxito</a></li>
              <li><a href="Landing Page.html#servicios">Servicios</a></li>
              <li><a href="Landing Page.html#como-funciona">Proceso</a></li>
              <li><a href="Creadores.html">Creadores</a></li>
            </ul>
          </div>
          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href="mailto:hola@nexifystudio.es">hola@nexifystudio.es</a></li>
              <li><a>Valencia, España</a></li>
              <li><a>Press kit</a></li>
              <li><a>Carreras · 4 vacantes</a></li>
            </ul>
          </div>
          <div>
            <h5>Síguenos</h5>
            <ul>
              <li><a>Instagram</a></li>
              <li><a>LinkedIn</a></li>
              <li><a>Twitch</a></li>
              <li><a>YouTube</a></li>
            </ul>
          </div>
        </div>
        <div style={{overflow:'hidden'}}><h2 className="nx-footer__big">NEXIFY</h2></div>
        <div className="nx-footer__bottom">
          <span>© 2026 Studio Nexify · Todos los derechos reservados</span>
          <span>v2.4 · Built for play</span>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, NX);
