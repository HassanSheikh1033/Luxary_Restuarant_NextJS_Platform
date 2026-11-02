"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import Magnetic from "./Magnetic";
import ScrollTilt from "./Tilt";

const field =
  "border-0 border-b border-line bg-transparent px-1 py-3.5 font-light text-ink outline-none transition-colors duration-300 [color-scheme:dark] placeholder:text-muted focus:border-gold";

export default function Reserve() {
  const [sent, setSent] = useState(false);

  return (
    <section id="reserve" className="section bg-bg2 text-center">
      <div className="wrap">
        <Reveal><p className="eyebrow">Reservations</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">Join us <em className="text-gold2">this evening</em></h2></Reveal>
        <ScrollTilt angle={10} className="mx-auto max-w-[760px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mx-auto mt-12 grid max-w-[760px] gap-5 md:grid-cols-2"
          >
            <input className={field} type="text" placeholder="Full name" required />
            <input className={field} type="email" placeholder="Email" required />
            <input className={field} type="date" required />
            <select className={field} required defaultValue="">
              <option value="" disabled>Guests</option>
              {[2, 3, 4, 5, 6].map((n) => (
                <option key={n} className="bg-bg">{n}</option>
              ))}
            </select>
            <div className="mt-5 md:col-span-2">
              <Magnetic><button className="btn" type="submit">{sent ? "Request Received ✓" : "Request Table"}</button></Magnetic>
            </div>
          </form>
        </ScrollTilt>
      </div>
    </section>
  );
}
