/* Nexify — Cómo funciona */

const NXP = {};

NXP.Head = function Head() {
  return (
    <section className="nx-page-head">
      <div className="nx-page-head__bg" />
      <div className="nx-page-head__inner">
        <div className="nx-page-head__crumb">
          <a href="Landing Page.html">Inicio</a> <span>/</span> Cómo funciona
        </div>
        <h1>Del brief a<br /><em>viral</em> en 4 pasos.</h1>
        <p className="nx-page-head__lead">
          Analizamos, creamos, lanzamos y medimos. Sin roadmaps eternos ni agencias intermediarias.
          La cuenta atrás empieza el día cero del brief y termina con tu marca siendo jugada.
        </p>
        <div className="nx-page-head__meta">
          <span>Sprint estándar<b>4 semanas</b></span>
          <span>Sprint exprés<b>2 — 3 semanas</b></span>
          <span>Live-ops<b>ongoing</b></span>
        </div>
      </div>
    </section>
  );
};

/* Detailed 4-step process with deeper deliverables */
NXP.ProcessDeep = function ProcessDeep() {
  const steps = [
    {
      num: '01', day: 'DÍA 0 — 2', t: 'Analizamos tus necesidades',
      tone: 'paper',
      d: 'Sesión de descubrimiento con tu equipo. Definimos marca, audiencia, objetivo de negocio y métricas que importan. En 48h tienes tres direcciones creativas con mecánica y look & feel sobre la mesa.',
      deliverables: ['Brief consolidado', 'Tres direcciones creativas', 'Estimación de presupuesto'],
    },
    {
      num: '02', day: 'SEMANAS 1 — 3', t: 'Creamos la experiencia',
      tone: 'ink',
      d: 'Diseñamos una mecánica jugable integrada al 100% con tu identidad de marca. Arte, desarrollo y game design, todo dentro del estudio — sin subcontratar ni una línea de código. Demos parciales cada tres días para que tu equipo valide en tiempo real.',
      deliverables: ['Prototipo jugable', 'Arte final + UI', 'Build QA + assets para canales'],
    },
    {
      num: '03', day: 'SEMANA 4', t: 'Lanzamos la campaña',
      tone: 'yellow',
      d: 'Activamos la experiencia con una campaña 360: creadores del roster Nexify, contenido de lanzamiento producido por nosotros y distribución coordinada en redes para maximizar el impacto desde el primer minuto.',
      deliverables: ['Activación con creadores', 'Contenido de lanzamiento', 'Distribución en redes'],
    },
    {
      num: '04', day: 'ONGOING', t: 'Viralizas tu marca',
      tone: 'cream',
      d: 'Tu audiencia pasa de espectadora a participante activa. Comenta, vota, juega y comparte — la mecánica hace el resto. Monitorizamos métricas reales, no impresiones, y operamos el juego en vivo con temporadas y drops para mantenerlo vivo.',
      deliverables: ['Dashboard en vivo', 'Temporadas y drops', 'Reporting mensual real'],
    },
  ];
  return (
    <section className="nx-section nx-section--mixed">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">Proceso · 4 pasos cerrados</span>
            <h2>Del brief a viral<br />en cuatro semanas.</h2>
          </div>
          <p>Cada paso entrega algo concreto. Cada paso tiene un decisor en tu equipo y uno en el nuestro. Sin roadmaps eternos.</p>
        </div>
        <div className="nx-process-deep">
          {steps.map((s, i) => (
            <div key={s.num} className={"nx-process-deep__row nx-process-deep__row--" + (s.tone || 'paper')}>
              <div className="nx-process-deep__num">
                <div className="num">{s.num}</div>
                <div className="day">{s.day}</div>
              </div>
              <div className="nx-process-deep__body">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <ul>
                  {s.deliverables.map(d => <li key={d}><span className="check">✓</span>{d}</li>)}
                </ul>
              </div>
              <div className="nx-process-deep__rail" aria-hidden="true">
                <span className="dot" />
                {i < steps.length - 1 && <span className="line" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Mechanics — what makes our games "social" */
NXP.MechanicsSection = function MechanicsSection() {
  const mechanics = [
    { num: '01', title: 'Comentarios → personajes', copy: 'La audiencia comenta el post para entrar al juego. Cada nombre que comenta se convierte en un jugador real dentro del round, estilo Squid Game.' },
    { num: '02', title: 'Likes y shares → power-ups', copy: 'Las interacciones del feed se traducen en vidas, mejoras o desbloqueos durante la partida. Cuanta más comunidad, más mecánicas.' },
    { num: '03', title: 'El chat decide en vivo', copy: 'En stream, los espectadores votan reglas, twists y eliminaciones. El juego cambia minuto a minuto según lo que pida la audiencia.' },
    { num: '04', title: 'Creadores como protagonistas', copy: 'Los creators del roster Nexify entran como concursantes, narradores o presentadores. La audiencia juega con quienes ya siguen.' },
  ];
  return (
    <section className="nx-section nx-section--yellow">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">Mecánicas · Lo que pasa cuando tu audiencia interactúa</span>
            <h2>Tu audiencia no mira.<br />Tu audiencia juega.</h2>
          </div>
          <p>Los juegos que producimos integran las redes sociales como parte del gameplay. Comentar, votar o compartir no es CTA — es la mecánica.</p>
        </div>
        <div className="nx-mechanics nx-mechanics--on-yellow">
          {mechanics.map(m => (
            <div key={m.num} className="nx-mechanic">
              <div className="nx-mechanic__num">{m.num}</div>
              <div className="nx-mechanic__title">{m.title}</div>
              <div className="nx-mechanic__copy">{m.copy}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* What's included — independent vertical lists so 360 is visually longer */
NXP.WhatsIncluded = function WhatsIncluded() {
  const juego = [
    'Brief + dirección creativa',
    'Concept y game design completo',
    'Arte, UI y motion design',
    'Build jugable + QA',
    'Hand-off de creadores (tú los activas)',
    'Manual de operación + 30 días de soporte',
    'Dashboard básico de métricas',
    'Plazo de entrega: 3 — 4 semanas',
    'Desde €25K',
  ];
  const campana = [
    'Brief + dirección creativa + planning de creadores y plataformas',
    'Concept, game design y guion adaptado a creator y audiencia',
    'Arte, UI, motion + identidad gráfica específica para los creators',
    'Build jugable + integraciones live (Twitch / TikTok / Instagram)',
    'Producción audiovisual end-to-end: grabación, edición y montaje',
    'Streams en directo operados por nuestro equipo de producción',
    'Casting curado del roster Nexify (+200 creadores verificados)',
    'Briefing y producción con cada creator: guion, sets, atrezzo',
    'Activación coordinada cross-plataforma (TikTok, IG, YouTube, Twitch, Kick)',
    'Plan de paid media + amplificación cross-plataforma',
    'Community management durante el live y la cola post-activación',
    'Moderación humana del chat durante streams largos',
    'Operación live-ops 24/7 durante toda la campaña',
    'Dashboard en vivo con métricas reales (no impresiones infladas)',
    'Reporting semanal + readout final con benchmarks por sector',
    'UGC compilation entregado en assets reutilizables',
    'Drops de continuidad post-campaña (temporadas, twists, eventos)',
    'Sesión de transferencia interna con tu equipo de marketing',
    'Plazo de entrega: 4 — 6 semanas',
    'Desde €60K',
  ];
  return (
    <section className="nx-section nx-section--dark">
      <div className="nx-section__inner">
        <div className="nx-section__head">
          <div>
            <span className="nx-overline">Qué incluye cada formato</span>
            <h2>Solo el juego, o<br />la campaña entera.</h2>
          </div>
          <p>Mismo equipo, mismo proceso. La diferencia es hasta dónde nos dejas llegar contigo.</p>
        </div>
        <div className="nx-compare2">
          <div className="nx-compare2__col">
            <header>
              <span className="tag">Formato A</span>
              <h4>Solo el juego</h4>
              <p>Diseñamos y construimos. Tú activas.</p>
              <div className="meta">{juego.length} entregables</div>
            </header>
            <ul>
              {juego.map((i, k) => <li key={k}><span className="check">✓</span>{i}</li>)}
            </ul>
            <footer>
              <NX.Btn variant="ghost" onDark href="Contacto.html">Pídenos el juego →</NX.Btn>
            </footer>
          </div>
          <div className="nx-compare2__col nx-compare2__col--featured">
            <header>
              <span className="tag">Formato B · Más pedido</span>
              <h4>Campaña 360</h4>
              <p>Juego + creadores + producción + live-ops + reporting.</p>
              <div className="meta">{campana.length} entregables · {Math.round((campana.length / juego.length) * 10) / 10}× más que Formato A</div>
            </header>
            <ul>
              {campana.map((i, k) => <li key={k}><span className="check">✓</span>{i}</li>)}
            </ul>
            <footer>
              <NX.Btn variant="primary" href="Contacto.html">Quiero la campaña 360 →</NX.Btn>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, NXP);
