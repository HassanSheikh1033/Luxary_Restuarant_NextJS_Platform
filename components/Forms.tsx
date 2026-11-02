"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { field, label } from "@/lib/ui";
import { EASE } from "@/lib/motion";
import Magnetic from "./Magnetic";

function Done({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="border border-gold/50 bg-bg2/60 p-12 text-center"
    >
      <span className="font-serif text-5xl text-gold2">✦</span>
      <h3 className="mb-3 mt-4 font-serif text-[2.2rem] font-light">{title}</h3>
      <p className="mx-auto max-w-[420px] text-muted">{text}</p>
    </motion.div>
  );
}

function Pick({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`border px-4 py-2.5 text-[.74rem] uppercase tracking-[.18em] transition-all duration-500 ${
            value === o ? "border-gold bg-gold text-bg" : "border-line text-muted hover:border-gold hover:text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function ReservationForm() {
  const [sent, setSent] = useState(false);
  const [time, setTime] = useState("7:30 pm");
  const [guests, setGuests] = useState(2);
  const [exp, setExp] = useState("Tasting Menu");

  if (sent)
    return <Done title="Request received" text={`We will confirm your table for ${guests} (${exp}, ${time}) by email within the day.`} />;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-9"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div><span className={label}>Date</span><input className={field} type="date" required /></div>
        <div>
          <span className={label}>Guests</span>
          <div className="flex items-center gap-6 border-b border-line py-2.5">
            <button type="button" aria-label="Fewer" onClick={() => setGuests((g) => Math.max(1, g - 1))} className="h-9 w-9 border border-line text-gold transition-colors hover:border-gold">−</button>
            <span className="w-8 text-center font-serif text-3xl text-gold2">{guests}</span>
            <button type="button" aria-label="More" onClick={() => setGuests((g) => Math.min(12, g + 1))} className="h-9 w-9 border border-line text-gold transition-colors hover:border-gold">+</button>
            <span className="text-sm text-muted">{guests > 6 ? "Large party — we will call you" : "guests"}</span>
          </div>
        </div>
      </div>

      <div><span className={label}>Time</span><Pick options={["6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm"]} value={time} onChange={setTime} /></div>
      <div><span className={label}>Experience</span><Pick options={["Tasting Menu", "Prélude", "Végétarien", "Chef’s Table", "Private Dining"]} value={exp} onChange={setExp} /></div>

      <div className="grid gap-6 md:grid-cols-2">
        <div><span className={label}>Full name</span><input className={field} type="text" required placeholder="Your name" /></div>
        <div><span className={label}>Email</span><input className={field} type="email" required placeholder="you@email.com" /></div>
        <div><span className={label}>Phone</span><input className={field} type="tel" placeholder="+33…" /></div>
        <div>
          <span className={label}>Occasion</span>
          <select className={field} defaultValue="">
            <option value="" className="bg-bg">None in particular</option>
            {["Birthday", "Anniversary", "Proposal", "Business", "Celebration"].map((o) => <option key={o} className="bg-bg">{o}</option>)}
          </select>
        </div>
      </div>
      <div><span className={label}>Allergies & notes</span><textarea className={`${field} min-h-[90px] resize-none`} placeholder="Anything we should know" /></div>

      <Magnetic><button className="btn" type="submit">Request Table</button></Magnetic>
    </form>
  );
}

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [kind, setKind] = useState("Le Salon Privé");

  if (sent) return <Done title="Enquiry sent" text="Our events director will reply within one working day with availability and a proposal." />;

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-9">
      <div><span className={label}>Space</span><Pick options={["Le Salon Privé", "The Chef’s Table", "La Maison Entière"]} value={kind} onChange={setKind} /></div>
      <div className="grid gap-6 md:grid-cols-2">
        <div><span className={label}>Full name</span><input className={field} required placeholder="Your name" /></div>
        <div><span className={label}>Email</span><input className={field} type="email" required placeholder="you@email.com" /></div>
        <div><span className={label}>Preferred date</span><input className={field} type="date" /></div>
        <div><span className={label}>Guests</span><input className={field} type="number" min={2} max={40} placeholder="e.g. 12" /></div>
      </div>
      <div><span className={label}>Tell us about the evening</span><textarea className={`${field} min-h-[110px] resize-none`} placeholder="The occasion, the mood, anything we should know" /></div>
      <Magnetic><button className="btn" type="submit">Send Enquiry</button></Magnetic>
    </form>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <Done title="Message sent" text="Thank you — a member of the team will reply within a day." />;

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-9">
      <div className="grid gap-6 md:grid-cols-2">
        <div><span className={label}>Full name</span><input className={field} required placeholder="Your name" /></div>
        <div><span className={label}>Email</span><input className={field} type="email" required placeholder="you@email.com" /></div>
      </div>
      <div>
        <span className={label}>Subject</span>
        <select className={field} defaultValue="General">
          {["General", "Press", "Careers", "Gift cards", "Feedback"].map((o) => <option key={o} className="bg-bg">{o}</option>)}
        </select>
      </div>
      <div><span className={label}>Message</span><textarea className={`${field} min-h-[130px] resize-none`} required placeholder="How can we help?" /></div>
      <Magnetic><button className="btn" type="submit">Send Message</button></Magnetic>
    </form>
  );
}

