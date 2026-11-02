import Timeline, { Step } from "./Timeline";

const steps: Step[] = [
  ["6:00 pm", "Arrival & Aperitif", "You are met at the door, coats are taken, and a glass of vintage champagne is poured in the salon. Three amuse-bouches — oyster, gougère, beetroot tartlet — set the tone."],
  ["6:45 pm", "The Opening Acts", "Four cold and raw courses: caviar, langoustine tartare, cured sea bream and a chilled garden consommé. Light, bright, precise."],
  ["7:45 pm", "The Heart of the Sea", "Hokkaido scallop, saffron-butter salmon, and lobster in its own bisque. The first wine pairing deepens from Chablis to white Burgundy."],
  ["8:45 pm", "The Fire", "The kitchen turns to flame: truffle risotto, then A5 wagyu with bone-marrow jus. Reds from the Rhône and Piedmont arrive, decanted at the table."],
  ["9:45 pm", "A Quiet Interval", "A trolley of twenty-four aged cheeses, then a palate-cleansing sorbet of garden herbs. Conversation tends to slow here — as intended."],
  ["10:30 pm", "Sweet Endings", "The gold-leaf parfait, a trolley of mignardises, and a cognac or tisane of your choice. Chef Étienne usually walks the room before the last guests leave."],
];

export default function Evening() {
  return (
    <Timeline
      eyebrow="The Evening"
      title={<>Four hours, <em className="text-gold2">unhurried</em></>}
      intro="The tasting menu is paced like a piece of music — twelve courses over four hours, with a slow opening, a long middle and a gentle close. There is no rush and no second seating. The table is yours until you decide otherwise."
      steps={steps}
    />
  );
}
