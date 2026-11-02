import Timeline, { Step } from "./Timeline";

const steps: Step[] = [
  ["Step 01", "Enquire", "Tell us the date, the number of guests and the spirit of the evening. Our events director replies within one working day."],
  ["Step 02", "Design", "You meet Chef Étienne and Camille to build the menu and pairings. We sketch the room — flowers, candles, music, seating — and share a full proposal."],
  ["Step 03", "Refine", "Two weeks before, we host a tasting for up to four people. Every course can be adjusted until it is exactly right."],
  ["Step 04", "Celebrate", "On the night, our team handles everything. You only have to arrive — and enjoy the people you invited."],
];

export default function Process() {
  return (
    <Timeline
      eyebrow="How It Works"
      title={<>From enquiry to <em className="text-gold2">evening</em></>}
      intro="Every private dinner is designed from scratch. Here is how we take an idea and turn it into an unforgettable night."
      steps={steps}
    />
  );
}
