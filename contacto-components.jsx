/* Nexify — Contacto page · multi-step form */

const STEPS = [
  { id: 'contacto', label: 'Contacto',   tag: 'PASO 01 · QUIÉN ERES' },
  { id: 'marca',    label: 'Tu marca',   tag: 'PASO 02 · TU MARCA' },
  { id: 'objetivo', label: 'Objetivo',   tag: 'PASO 03 · QUÉ BUSCAS' },
  { id: 'pack',     label: 'Pack',       tag: 'PASO 04 · QUÉ TENÍAS EN MENTE' },
  { id: 'mensaje',  label: 'Mensaje',    tag: 'PASO 05 · CUÉNTANOS' },
  { id: 'resumen',  label: 'Resumen',    tag: 'PASO FINAL · REPASO' },
];

const OBJETIVOS = [
  { id: 'visibilidad', title: 'Aumentar visibilidad',  desc: 'Más alcance, más conversación, más TOP-of-mind para la marca.' },
  { id: 'leads',       title: 'Conseguir leads',        desc: 'Captar registros, suscripciones o intención de compra cualificada.' },
  { id: 'ventas',      title: 'Impulsar ventas',        desc: 'Activación con CTA directo a tienda, app o conversión transaccional.' },
  { id: 'otro',        title: 'Otro objetivo',          desc: 'Lanzamiento, hiring, B2B, charity… Cuéntanos en el siguiente paso.' },
];

const PACKS = [
  { id: 'juego',    title: 'Experiencia interactiva',   tag: 'FORMATO A',  desc: 'Diseñamos y construimos el juego de marca. Te lo entregamos listo para activar en tus canales.' },
  { id: 'campana',  title: 'Campaña 360',               tag: 'FORMATO B',  desc: 'Juego + creadores del roster Nexify + producción + live-ops + reporting. End-to-end.' },
];

const SECTORES = ['', 'Bebidas', 'Alimentación', 'Beauty', 'Sportswear', 'Telco', 'eCommerce', 'Gaming', 'Streaming', 'Fashion', 'Banca / Fintech', 'Auto', 'Otros'];

const NXF = {};

const initialState = {
  nombre: '', apellido: '', email: '',
  marca: '', sector: '', pais: '', web: '',
  objetivo: '',
  pack: '',
  mensaje: '',
  newsletter: false,
};

NXF.Form = function Form() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState(initialState);
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [ticket, setTicket] = React.useState('');

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const canAdvance = () => {
    if (step === 0) return data.nombre.trim() && data.email.includes('@');
    if (step === 1) return data.marca.trim() && data.sector;
    if (step === 2) return !!data.objetivo;
    if (step === 3) return !!data.pack;
    return true;
  };

  const next = () => { if (canAdvance() && step < STEPS.length - 1) setStep(step + 1); };
  const back = () => { if (step > 0) setStep(step - 1); };

  React.useEffect(() => {
    const onKey = e => {
      if (sent) return;
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.type !== 'submit') {
        e.preventDefault();
        if (step === STEPS.length - 1) submit();
        else next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const submit = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      const t = 'NX-' + (Math.floor(Math.random() * 90000) + 10000);
      setTicket(t);
    }, 1400);
  };

  const objLabel = OBJETIVOS.find(o => o.id === data.objetivo)?.title || '—';
  const packLabel = PACKS.find(p => p.id === data.pack)?.title || '—';

  if (sent) {
    return (
      <div className="nx-form-card" id="form-card">
        <div className="nx-form-sent">
          <div className="nx-form-sent__icon">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2>¡Recibido, {data.nombre}!</h2>
          <p>Tu brief acaba de entrar a la cola del estudio. Te respondemos en menos de 24h con tres direcciones creativas y un presupuesto orientativo.</p>
          <div className="nx-form-sent__meta">
            <div>Ticket · <b style={{color:'var(--nx-black)'}}>{ticket}</b></div>
            <div style={{marginTop: 8}}>Email · <b style={{color:'var(--nx-black)'}}>{data.email}</b></div>
          </div>
          <div style={{marginTop: 32, display:'flex', gap: 12}}>
            <NX.Btn variant="ink" href="Landing Page.html">Volver al home</NX.Btn>
            <NX.Btn variant="primary" href="Casos.html">Ver casos →</NX.Btn>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nx-form-card" id="form-card">
      <div className="nx-form-card__head">
        <span className="step-tag">{STEPS[step].tag}</span>
        <span className="step-count">{String(step + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}</span>
      </div>

      {step === 0 && (
        <>
          <h2>Cuéntanos quién eres.</h2>
          <p className="nx-form-card__sub">Empezamos por lo básico. Te respondemos a este email en menos de 24h.</p>
          <div className="nx-form-fields nx-form-fields--2col">
            <div className="nx-form-field">
              <label>Nombre</label>
              <input type="text" value={data.nombre} onChange={e => set('nombre', e.target.value)} placeholder="Ana" autoFocus />
            </div>
            <div className="nx-form-field">
              <label>Apellido</label>
              <input type="text" value={data.apellido} onChange={e => set('apellido', e.target.value)} placeholder="Ríos" />
            </div>
            <div className="nx-form-field" style={{gridColumn:'1 / -1'}}>
              <label>Correo profesional</label>
              <input type="email" value={data.email} onChange={e => set('email', e.target.value)} placeholder="ana@tumarca.com" />
            </div>
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h2>¿Para qué marca trabajamos?</h2>
          <p className="nx-form-card__sub">Esto nos ayuda a entender el sector, el mercado y el tipo de audiencia.</p>
          <div className="nx-form-fields nx-form-fields--2col">
            <div className="nx-form-field">
              <label>Nombre de la marca</label>
              <input type="text" value={data.marca} onChange={e => set('marca', e.target.value)} placeholder="Mondelez · Red Bull · Nike…" autoFocus />
            </div>
            <div className="nx-form-field">
              <label>Sector</label>
              <select value={data.sector} onChange={e => set('sector', e.target.value)}>
                {SECTORES.map(s => <option key={s} value={s}>{s || 'Selecciona sector'}</option>)}
              </select>
            </div>
            <div className="nx-form-field">
              <label>País / mercado principal</label>
              <input type="text" value={data.pais} onChange={e => set('pais', e.target.value)} placeholder="España, LATAM, Global…" />
            </div>
            <div className="nx-form-field">
              <label>Web (opcional)</label>
              <input type="url" value={data.web} onChange={e => set('web', e.target.value)} placeholder="https://" />
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2>¿Qué quieres conseguir?</h2>
          <p className="nx-form-card__sub">No nos sirven KPI vanity. Dinos el resultado de negocio que mide tu jefe.</p>
          <div className="nx-form-choices">
            {OBJETIVOS.map(o => (
              <button key={o.id} type="button"
                className={"nx-form-choice" + (data.objetivo === o.id ? ' is-active' : '')}
                onClick={() => set('objetivo', o.id)}>
                <div className="title">{o.title}</div>
                <div className="desc">{o.desc}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2>¿Qué tenías en mente?</h2>
          <p className="nx-form-card__sub">Elige el formato. Puedes encargarnos solo el juego o la campaña entera con creadores del roster.</p>
          <div className="nx-form-choices nx-form-choices--1col">
            {PACKS.map(p => (
              <button key={p.id} type="button"
                className={"nx-form-choice" + (data.pack === p.id ? ' is-active' : '')}
                onClick={() => set('pack', p.id)}>
                <span className="badge">{p.tag}</span>
                <div className="title">{p.title}</div>
                <div className="desc">{p.desc}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2>Cuéntanos la idea.</h2>
          <p className="nx-form-card__sub">Texto libre. Referencias, restricciones, fechas clave o pistas de audiencia que tengas.</p>
          <div className="nx-form-fields">
            <div className="nx-form-field">
              <label>Mensaje</label>
              <textarea value={data.mensaje} onChange={e => set('mensaje', e.target.value)} placeholder="Queremos activar el lanzamiento de la nueva línea de cero azúcar en Q3 con foco LATAM, target Gen-Z, presupuesto orientativo de €80K…" autoFocus />
              <span className="hint">Opcional. Mejor un párrafo que muchas palabras.</span>
            </div>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h2>Repasamos antes de enviar.</h2>
          <p className="nx-form-card__sub">Si algo no cuadra, edita el paso. Cuando esté, dale a enviar y entras a la cola del estudio.</p>
          <div className="nx-form-summary">
            <SummaryRow tag="Contacto" val={`${data.nombre} ${data.apellido}`.trim() || '—'} sub={data.email} onEdit={() => setStep(0)} />
            <SummaryRow tag="Marca" val={data.marca || '—'} sub={[data.sector, data.pais].filter(Boolean).join(' · ') || ''} onEdit={() => setStep(1)} />
            <SummaryRow tag="Objetivo" val={objLabel} onEdit={() => setStep(2)} />
            <SummaryRow tag="Pack" val={packLabel} onEdit={() => setStep(3)} />
            <SummaryRow tag="Mensaje" val={data.mensaje ? data.mensaje.slice(0, 90) + (data.mensaje.length > 90 ? '…' : '') : '—'} onEdit={() => setStep(4)} />
            <div className="nx-form-extras">
              <label>
                <input type="checkbox" checked={data.newsletter} onChange={e => set('newsletter', e.target.checked)} />
                <span>Quiero recibir novedades del estudio por correo (no spam, max 1 al mes).</span>
              </label>
            </div>
          </div>
        </>
      )}

      <div className="nx-form-nav">
        {step > 0 && !sending && (
          <NX.Btn variant="ghost" onClick={back}>← Atrás</NX.Btn>
        )}
        {step === 0 && <span className="nx-form-nav__hint">Pulsa <kbd>Enter</kbd> para avanzar</span>}
        <div style={{marginLeft:'auto', display:'flex', gap: 12, alignItems:'center'}}>
          {step < STEPS.length - 1 && (
            <NX.Btn variant="primary" onClick={next} style={!canAdvance() ? {opacity: 0.5, pointerEvents:'none'} : {}}>
              Siguiente →
            </NX.Btn>
          )}
          {step === STEPS.length - 1 && (
            <NX.Btn variant="ink" onClick={submit} style={sending ? {opacity: 0.7, pointerEvents:'none'} : {}}>
              {sending ? 'Enviando…' : 'Enviar brief →'}
            </NX.Btn>
          )}
        </div>
      </div>
    </div>
  );
};

function SummaryRow({ tag, val, sub, onEdit }) {
  return (
    <div className="nx-summary-block">
      <span className="nx-summary-block__tag">{tag}</span>
      <span className="nx-summary-block__val">
        {val}
        {sub && <span className="multi">{sub}</span>}
      </span>
      <button type="button" className="nx-summary-block__edit" onClick={onEdit}>Editar</button>
    </div>
  );
}

NXF.Progress = function Progress({ current, onJump }) {
  return (
    <div className="nx-form-progress">
      {STEPS.map((s, i) => {
        const state = i === current ? 'is-active' : i < current ? 'is-done' : '';
        return (
          <button key={s.id} type="button"
            className={"nx-form-progress__step " + state}
            onClick={() => i <= current && onJump(i)}
          >
            <span className="pill">
              {i < current
                ? <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                : String(i + 1).padStart(2, '0')
              }
            </span>
            <span>{s.label}</span>
          </button>
        );
      })}
    </div>
  );
};

/* Stateful wrapper so Progress can talk to Form */
NXF.ContactSection = function ContactSection() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState(initialState);
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [ticket, setTicket] = React.useState('');

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const canAdvance = () => {
    if (step === 0) return data.nombre.trim() && data.email.includes('@');
    if (step === 1) return data.marca.trim() && data.sector;
    if (step === 2) return !!data.objetivo;
    if (step === 3) return !!data.pack;
    return true;
  };

  const next = () => { if (canAdvance() && step < STEPS.length - 1) setStep(step + 1); };
  const back = () => { if (step > 0) setStep(step - 1); };

  React.useEffect(() => {
    const onKey = e => {
      if (sent) return;
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'BUTTON') {
        e.preventDefault();
        if (step === STEPS.length - 1) submit();
        else next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const submit = () => {
    if (sent || sending) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTicket('NX-' + (Math.floor(Math.random() * 90000) + 10000));
    }, 1400);
  };

  return (
    <section className="nx-form-section">
      <div className="nx-form-section__inner">
        {!sent && (
          <NXF.Progress current={step} onJump={setStep} />
        )}
        {sent && (
          <div className="nx-form-progress">
            <div className="nx-form-progress__step is-done">
              <span className="pill">
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
              </span>
              <span>Brief enviado</span>
            </div>
          </div>
        )}
        <NXF.FormInner
          step={step} setStep={setStep}
          data={data} set={set}
          sending={sending} sent={sent} ticket={ticket}
          canAdvance={canAdvance} next={next} back={back} submit={submit}
        />
      </div>
    </section>
  );
};

NXF.FormInner = function FormInner({ step, setStep, data, set, sending, sent, ticket, canAdvance, next, back, submit }) {
  const objLabel = OBJETIVOS.find(o => o.id === data.objetivo)?.title || '—';
  const packLabel = PACKS.find(p => p.id === data.pack)?.title || '—';

  if (sent) {
    return (
      <div className="nx-form-card">
        <div className="nx-form-sent">
          <div className="nx-form-sent__icon">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2>¡Recibido, {data.nombre}!</h2>
          <p>Tu brief acaba de entrar a la cola del estudio. Te respondemos en menos de 24h con tres direcciones creativas y un presupuesto orientativo.</p>
          <div className="nx-form-sent__meta">
            <div>Ticket · <b style={{color:'var(--nx-black)'}}>{ticket}</b></div>
            <div style={{marginTop: 8}}>Email · <b style={{color:'var(--nx-black)'}}>{data.email}</b></div>
          </div>
          <div style={{marginTop: 32, display:'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center'}}>
            <NX.Btn variant="ink" href="Landing Page.html">Volver al home</NX.Btn>
            <NX.Btn variant="primary" href="Casos.html">Ver casos →</NX.Btn>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nx-form-card">
      <div className="nx-form-card__head">
        <span className="step-tag">{STEPS[step].tag}</span>
        <span className="step-count">{String(step + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}</span>
      </div>

      {step === 0 && (
        <>
          <h2>Cuéntanos quién eres.</h2>
          <p className="nx-form-card__sub">Empezamos por lo básico. Te respondemos a este email en menos de 24h.</p>
          <div className="nx-form-fields nx-form-fields--2col">
            <div className="nx-form-field">
              <label>Nombre</label>
              <input type="text" value={data.nombre} onChange={e => set('nombre', e.target.value)} placeholder="Ana" autoFocus />
            </div>
            <div className="nx-form-field">
              <label>Apellido</label>
              <input type="text" value={data.apellido} onChange={e => set('apellido', e.target.value)} placeholder="Ríos" />
            </div>
            <div className="nx-form-field" style={{gridColumn:'1 / -1'}}>
              <label>Correo profesional</label>
              <input type="email" value={data.email} onChange={e => set('email', e.target.value)} placeholder="ana@tumarca.com" />
            </div>
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h2>¿Para qué marca trabajamos?</h2>
          <p className="nx-form-card__sub">Esto nos ayuda a entender el sector, el mercado y el tipo de audiencia.</p>
          <div className="nx-form-fields nx-form-fields--2col">
            <div className="nx-form-field">
              <label>Nombre de la marca</label>
              <input type="text" value={data.marca} onChange={e => set('marca', e.target.value)} placeholder="Mondelez · Red Bull · Nike…" autoFocus />
            </div>
            <div className="nx-form-field">
              <label>Sector</label>
              <select value={data.sector} onChange={e => set('sector', e.target.value)}>
                {SECTORES.map(s => <option key={s} value={s}>{s || 'Selecciona sector'}</option>)}
              </select>
            </div>
            <div className="nx-form-field">
              <label>País / mercado principal</label>
              <input type="text" value={data.pais} onChange={e => set('pais', e.target.value)} placeholder="España, LATAM, Global…" />
            </div>
            <div className="nx-form-field">
              <label>Web (opcional)</label>
              <input type="url" value={data.web} onChange={e => set('web', e.target.value)} placeholder="https://" />
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2>¿Qué quieres conseguir?</h2>
          <p className="nx-form-card__sub">No nos sirven KPI vanity. Dinos el resultado de negocio que mide tu jefe.</p>
          <div className="nx-form-choices">
            {OBJETIVOS.map(o => (
              <button key={o.id} type="button"
                className={"nx-form-choice" + (data.objetivo === o.id ? ' is-active' : '')}
                onClick={() => set('objetivo', o.id)}>
                <div className="title">{o.title}</div>
                <div className="desc">{o.desc}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2>¿Qué tenías en mente?</h2>
          <p className="nx-form-card__sub">Elige el formato. Puedes encargarnos solo el juego o la campaña entera con creadores del roster.</p>
          <div className="nx-form-choices nx-form-choices--1col">
            {PACKS.map(p => (
              <button key={p.id} type="button"
                className={"nx-form-choice" + (data.pack === p.id ? ' is-active' : '')}
                onClick={() => set('pack', p.id)}>
                <span className="badge">{p.tag}</span>
                <div className="title">{p.title}</div>
                <div className="desc">{p.desc}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2>Cuéntanos la idea.</h2>
          <p className="nx-form-card__sub">Texto libre. Referencias, restricciones, fechas clave o pistas de audiencia.</p>
          <div className="nx-form-fields">
            <div className="nx-form-field">
              <label>Mensaje</label>
              <textarea value={data.mensaje} onChange={e => set('mensaje', e.target.value)} placeholder="Queremos activar el lanzamiento de la nueva línea de cero azúcar en Q3 con foco LATAM, target Gen-Z, presupuesto orientativo de €80K…" autoFocus />
              <span className="hint">Opcional. Mejor un párrafo que muchas palabras.</span>
            </div>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h2>Repasamos antes de enviar.</h2>
          <p className="nx-form-card__sub">Si algo no cuadra, edita el paso. Cuando esté, dale a enviar y entras a la cola del estudio.</p>
          <div className="nx-form-summary">
            <SummaryRow tag="Contacto" val={`${data.nombre} ${data.apellido}`.trim() || '—'} sub={data.email} onEdit={() => setStep(0)} />
            <SummaryRow tag="Marca" val={data.marca || '—'} sub={[data.sector, data.pais].filter(Boolean).join(' · ') || ''} onEdit={() => setStep(1)} />
            <SummaryRow tag="Objetivo" val={objLabel} onEdit={() => setStep(2)} />
            <SummaryRow tag="Pack" val={packLabel} onEdit={() => setStep(3)} />
            <SummaryRow tag="Mensaje" val={data.mensaje ? data.mensaje.slice(0, 90) + (data.mensaje.length > 90 ? '…' : '') : '—'} onEdit={() => setStep(4)} />
            <div className="nx-form-extras">
              <label>
                <input type="checkbox" checked={data.newsletter} onChange={e => set('newsletter', e.target.checked)} />
                <span>Quiero recibir novedades del estudio por correo (no spam, máx 1 al mes).</span>
              </label>
            </div>
          </div>
        </>
      )}

      <div className="nx-form-nav">
        {step > 0 && !sending && (
          <NX.Btn variant="ghost" onClick={back}>← Atrás</NX.Btn>
        )}
        {step === 0 && <span className="nx-form-nav__hint">Pulsa <kbd>Enter</kbd> para avanzar</span>}
        <div style={{marginLeft:'auto', display:'flex', gap: 12, alignItems:'center'}}>
          {step < STEPS.length - 1 && (
            <NX.Btn variant="primary" onClick={next} style={!canAdvance() ? {opacity: 0.5, pointerEvents:'none'} : {}}>
              Siguiente →
            </NX.Btn>
          )}
          {step === STEPS.length - 1 && (
            <NX.Btn variant="ink" onClick={submit} style={sending ? {opacity: 0.7, pointerEvents:'none'} : {}}>
              {sending ? 'Enviando…' : 'Enviar brief →'}
            </NX.Btn>
          )}
        </div>
      </div>
    </div>
  );
};

/* ============ HEADER ============ */
NXF.Head = function Head() {
  return (
    <section className="nx-page-head">
      <div className="nx-page-head__bg" />
      <div className="nx-page-head__inner">
        <div className="nx-page-head__crumb">
          <a href="Landing Page.html">Inicio</a> <span>/</span> Contacto
        </div>
        <h1>Cuéntanos<br />qué <em>necesitas</em>.</h1>
        <p className="nx-page-head__lead">
          Cuéntanos tu marca y en unos pasos te proponemos una experiencia integrada.
          Te respondemos en menos de 24h con tres direcciones creativas.
        </p>
        <div className="nx-page-head__meta">
          <span>Respuesta<b>24h</b></span>
          <span>Sin compromiso<b>—</b></span>
          <span>hola@nexifystudio.es</span>
          <span>Valencia, España</span>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, NXF);
