import Timeline, { Step } from "./Timeline";

const day: Step[] = [
  ["5:00 am", "The Market", "Chef Étienne is at the wholesale market before the lights are fully on, choosing fish, shellfish and whatever the growers brought in overnight."],
  ["9:00 am", "The Stocks", "Bones are roasted, sauces begun and reduced. A veal jus takes three days; a lobster bisque, a morning. Nothing is hurried and nothing is bought in."],
  ["12:00 pm", "Family Meal", "The whole brigade — twenty-two cooks, pastry and front of house — eats together. It is where new dishes are first tasted, and argued over."],
  ["3:00 pm", "Mise en Place", "Every garnish is cut, every herb picked, every plate warmed. The pass is wiped down twice. The first tasting menu is tested by Chef himself."],
  ["6:00 pm", "Service Begins", "The kitchen goes quiet. Orders are called in French, and answered in a single word: “Oui.” For the next five hours, nothing exists outside the plate."],
  ["11:30 pm", "The Last Plate", "Chef walks the dining room, thanks the last table, and tastes tomorrow’s first sauce — before anyone goes home."],
];

export default function Principles() {
  return (
    <Timeline
      eyebrow="A Day in the Kitchen"
      title={<>Eighteen hours, <em className="text-gold2">one plate</em></>}
      intro="What you taste in four hours has taken eighteen to prepare. This is a day in the life of the Maison Aurelia kitchen — from the first delivery to the last sauce."
      steps={day}
      dark={false}
    />
  );
}
