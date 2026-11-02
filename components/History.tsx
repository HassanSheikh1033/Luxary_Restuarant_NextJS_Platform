import Timeline, { Step } from "./Timeline";

const steps: Step[] = [
  ["1998", "Twenty-two seats", "Étienne Laurent opens Maison Aurelia above a Left Bank wine merchant with borrowed copper pans, one tasting menu and a handwritten wine list."],
  ["2004", "The first star", "After six years of cooking only what the market allowed, the Michelin Guide awards a first star. The dining room doubles to forty seats."],
  ["2011", "A new home", "The restaurant moves to 12 Rue de la Paix. The dining room is rebuilt around an open pass, and a limestone cellar is dug beneath it. A second star follows within the year."],
  ["2019", "The Green Star", "Recognition for a zero-waste kitchen: every scrap composted or returned to the farms that grew it, and a sixty-kilometre sourcing radius for vegetables and herbs."],
  ["2025", "The Chef’s Table", "Six seats inside the kitchen, no printed menu. Chef Étienne cooks, explains and improvises — the purest expression of the house."],
];

export default function History() {
  return (
    <Timeline
      eyebrow="Our History"
      title={<>Twenty-seven years, <em className="text-gold2">one idea</em></>}
      intro="What began as a twenty-two-seat room has become one of Paris’s most admired tables — without ever changing the original idea: cook with fewer ingredients and more attention."
      steps={steps}
      dark={false}
    />
  );
}
