"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { EASE } from "@/lib/motion";

const faqs = [
  ["How far in advance should I reserve?", "Tables open sixty days ahead at 10am Paris time. Weekends fill within hours, so we recommend booking as early as possible. For parties of seven or more, please contact us directly."],
  ["Is there a dress code?", "We ask for smart, elegant attire. Jackets are encouraged but not required for gentlemen; we do not permit sportswear, shorts or beachwear."],
  ["Can you accommodate allergies and dietary needs?", "Yes — tell us when you book and the kitchen will adapt every course. Vegetarian and pescatarian menus are always available with 48 hours’ notice; vegan and gluten-free menus with 72."],
  ["How long does the tasting menu last?", "Plan for around four hours. The Chef’s Table runs closer to seven. There is only one seating, so you will never be asked to leave."],
  ["What is the cancellation policy?", "Reservations can be changed or cancelled free of charge up to 72 hours before. Within 72 hours, a deposit of 100 per guest is retained."],
  ["Do you offer a shorter menu?", "A seven-course “Prélude” is available on Tuesday and Wednesday evenings at 135 per guest, with a shorter wine pairing."],
  ["Is the restaurant accessible?", "The dining room and restrooms are step-free. Please let us know of any requirements and we will prepare your table accordingly."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="wrap grid gap-16 md:grid-cols-[4fr_7fr]">
        <div>
          <Reveal><p className="eyebrow">Good to Know</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Before you <em className="text-gold2">arrive</em></h2></Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted">Anything else? Write to reserve@maisonaurelia.com and the team will reply within a day.</p>
          </Reveal>
        </div>

        <div className="border-t border-line">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-serif text-[clamp(1.3rem,2vw,1.7rem)] font-light transition-colors duration-500 ${isOpen ? "text-gold2" : ""}`}>{q}</span>
                    <span className="relative h-4 w-4 shrink-0">
                      <span className="absolute left-0 top-1/2 h-px w-full bg-gold" />
                      <span className={`absolute left-1/2 top-0 h-full w-px bg-gold transition-transform duration-500 ${isOpen ? "scale-y-0" : ""}`} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[620px] pb-7 text-muted">{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
