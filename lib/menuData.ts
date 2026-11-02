export type Course = [name: string, description: string, pairing: string];

export type MenuTab = {
  id: string;
  label: string;
  price: string;
  note: string;
  courses: Course[];
};

export const menuTabs: MenuTab[] = [
  {
    id: "tasting",
    label: "Tasting Menu",
    price: "185",
    note: "Twelve courses over four hours. Wine pairing 120 · Reserve pairing 260.",
    courses: [
      ["Oscietra Caviar", "Hand-cut chive, crème fraîche, buckwheat blini", "Blanc de Blancs Grand Cru"],
      ["Langoustine Tartare", "Finger lime, shiso, cultured cream", "Chablis Premier Cru"],
      ["Cured Sea Bream", "Yuzu, fennel, green apple", "Sancerre"],
      ["Garden Consommé", "Chilled heirloom tomato, herb oil, basil flower", "Provence Rosé"],
      ["Hokkaido Scallop", "Brown butter, yuzu kosho, golden cauliflower", "Meursault"],
      ["Saffron Butter Salmon", "Lemon, fennel pollen, saffron beurre blanc", "Condrieu"],
      ["Lobster Bisque", "Cognac, tarragon, warm brioche", "Puligny-Montrachet"],
      ["Black Truffle Risotto", "Aged carnaroli, Périgord truffle, parmesan 36 months", "Barbaresco"],
      ["Iberico Pork Cutlet", "Caramelised apple, charred broccolini, pan jus", "Côte-Rôtie"],
      ["Wagyu A5 Tenderloin", "Bone-marrow jus, smoked pommes purée, winter greens", "Pauillac"],
      ["Aged Cheese Trolley", "Twenty-four cheeses, seasonal chutneys, walnut bread", "Vin Jaune"],
      ["Vanilla Gold Parfait", "Madagascan vanilla, salted caramel, Valrhona grand cru", "Sauternes"],
    ],
  },
  {
    id: "prelude",
    label: "Prélude",
    price: "135",
    note: "Seven courses, Tuesday and Wednesday evenings. Wine pairing 85.",
    courses: [
      ["Oscietra Caviar", "Hand-cut chive, crème fraîche, buckwheat blini", "Blanc de Blancs"],
      ["Cured Sea Bream", "Yuzu, fennel, green apple", "Sancerre"],
      ["Hokkaido Scallop", "Brown butter, yuzu kosho, golden cauliflower", "Meursault"],
      ["Black Truffle Risotto", "Aged carnaroli, Périgord truffle", "Barbaresco"],
      ["Iberico Pork Cutlet", "Caramelised apple, charred broccolini, pan jus", "Côte-Rôtie"],
      ["Aged Cheese Selection", "Five cheeses, seasonal chutney", "Vin Jaune"],
      ["Vanilla Gold Parfait", "Salted caramel, Valrhona grand cru", "Sauternes"],
    ],
  },
  {
    id: "vegetarian",
    label: "Végétarien",
    price: "165",
    note: "Eight courses, created daily from the farm. Please request 48 hours ahead.",
    courses: [
      ["Heirloom Beetroot Tartlet", "Goat curd, pickled shallot, walnut", "Chablis"],
      ["Garden Consommé", "Chilled tomato, herb oil, basil flower", "Provence Rosé"],
      ["Wild Mushroom Velouté", "Chestnut, thyme, truffle cream", "Savennières"],
      ["Roasted Celeriac", "Hazelnut brown butter, black garlic", "Meursault"],
      ["Black Truffle Risotto", "Aged carnaroli, Périgord truffle", "Barbaresco"],
      ["Charred Leek", "Smoked beurre blanc, caper, rye crumb", "Condrieu"],
      ["Aged Cheese Selection", "Five cheeses, seasonal chutney", "Vin Jaune"],
      ["Vanilla Gold Parfait", "Salted caramel, Valrhona grand cru", "Sauternes"],
    ],
  },
  {
    id: "sweet",
    label: "Desserts & Cheese",
    price: "à la carte",
    note: "Also available after any menu. Each pairs with a glass from the dessert cellar.",
    courses: [
      ["Vanilla Gold Parfait — 28", "Salted caramel, Valrhona grand cru, gold leaf", "Sauternes"],
      ["Grand Cru Chocolate Soufflé — 32", "Crème anglaise poured at the table", "Banyuls"],
      ["Tarte au Citron — 24", "Sicilian lemon, torched meringue, olive oil", "Moscato d’Asti"],
      ["Cheese Trolley — 36", "Twenty-four aged cheeses, chutneys, walnut bread", "Vin Jaune"],
      ["Mignardises & Digestif — 18", "Petits fours, chocolates, cognac or tisane", "Armagnac 1985"],
    ],
  },
];
