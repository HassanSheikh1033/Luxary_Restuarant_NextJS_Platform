import { Reveal } from "./Reveal";
import { TiltCard } from "./Tilt";

const cards = [
  ["Reservations", "+33 1 42 00 00 00", "reserve@maisonaurelia.com", "Daily 10am – 6pm"],
  ["Private Events", "+33 1 42 00 00 01", "events@maisonaurelia.com", "Reply within one working day"],
  ["Press & Partners", "+33 1 42 00 00 02", "press@maisonaurelia.com", "Images and menus on request"],
];

const hours = [
  ["Tuesday – Wednesday", "6:00 pm – 11:00 pm", "Prélude & Tasting"],
  ["Thursday – Saturday", "6:00 pm – 11:30 pm", "Tasting Menu"],
  ["Sunday – Monday", "Closed", "—"],
];

const getting = [
  ["By Métro", "Opéra (lines 3, 7, 8) — a four-minute walk along Rue de la Paix."],
  ["By Car", "Complimentary valet from 5:45 pm. Public parking at Place Vendôme, two minutes away."],
  ["By Taxi", "Ask for 12 Rue de la Paix — the doorman will meet you at the kerb."],
];

export default function ContactInfo() {
  return (
    <>
      <section className="section">
        <div className="wrap grid gap-6 md:grid-cols-3">
          {cards.map(([t, tel, mail, note], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="h-full border border-line bg-bg2/60 p-9">
                  <p className="text-[.72rem] uppercase tracking-[.3em] text-gold">{t}</p>
                  <p className="mt-4 font-serif text-[1.9rem] font-light leading-tight text-gold2">{tel}</p>
                  <p className="mt-2 text-ink/90">{mail}</p>
                  <p className="mt-5 border-t border-line pt-4 text-sm text-muted">{note}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-bg2">
        <div className="wrap grid items-center gap-[clamp(40px,7vw,100px)] md:grid-cols-2">
          <div>
            <Reveal><p className="eyebrow">Visit</p></Reveal>
            <Reveal delay={0.08}><h2 className="h2">12 Rue de <em className="text-gold2">la Paix</em></h2></Reveal>
            <Reveal><p className="mb-8 text-[1.05rem] text-muted">75002 Paris, France — steps from Place Vendôme and the Opéra Garnier.</p></Reveal>

            <div className="border-t border-line">
              {hours.map(([d, t, n]) => (
                <Reveal key={d}>
                  <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line py-5">
                    <div>
                      <p className="font-serif text-[1.5rem] font-light">{d}</p>
                      <p className="text-sm text-muted">{n}</p>
                    </div>
                    <p className="self-center text-gold2">{t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="relative aspect-square w-full overflow-hidden border border-line bg-bg">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-label="Map">
                <g stroke="rgba(201,164,92,.18)" fill="none">
                  {[60, 130, 200, 270, 340].map((p) => (
                    <g key={p}><line x1={p} y1="0" x2={p + 30} y2="400" /><line x1="0" y1={p} x2="400" y2={p - 20} /></g>
                  ))}
                </g>
                <path d="M0 250 L400 210" stroke="rgba(201,164,92,.5)" strokeWidth="5" fill="none" />
                <path d="M205 0 L235 400" stroke="rgba(201,164,92,.3)" strokeWidth="3" fill="none" />
                <circle cx="215" cy="232" r="46" fill="none" stroke="rgba(201,164,92,.25)" />
                <text x="30" y="242" fill="rgba(230,201,133,.7)" fontSize="11" letterSpacing="3" transform="rotate(-5 30 242)">RUE DE LA PAIX</text>
              </svg>
              <div className="absolute left-[53.5%] top-[56%] -translate-x-1/2 -translate-y-1/2">
                <span className="absolute -inset-5 animate-ping rounded-full bg-gold/30" />
                <span className="relative block h-4 w-4 rounded-full border-2 border-bg bg-gold2" />
              </div>
              <p className="absolute bottom-5 left-5 font-serif text-xl italic text-gold2">Maison Aurelia</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="mb-14 max-w-[700px]">
            <Reveal><p className="eyebrow">Getting Here</p></Reveal>
            <Reveal delay={0.08}><h2 className="h2">Arriving <em className="text-gold2">with ease</em></h2></Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {getting.map(([t, text], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="h-full border-t border-gold/60 pt-6">
                  <h3 className="mb-2 font-serif text-[1.9rem] font-light">{t}</h3>
                  <p className="text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
