const firstPart = [
  "Adjudicator",
  "Advocate",
  "Aegis",
  "Agent",
  "Arbiter",
  "Banner",
  "Beacon",
  "Blade",
  "Bringer",
  "Champion",
  "Citizen",
  "Claw",
  "Colossus",
  "Comptroller",
  "Courier",
  "Custodian",
  "Dawn",
  "Defender",
  "Diamond",
  "Distributor",
  "Dream",
  "Elected Representative",
  "Emperor",
  "Executor",
  "Eye",
  "Father",
  "Fist",
  "Flame",
  "Force",
  "Forerunner",
  "Founding Father",
  "Gauntlet",
  "Giant",
  "Guardian",
  "Halo",
  "Hammer",
  "Harbinger",
  "Herald",
  "Judge",
  "Keeper",
  "King",
  "Knight",
  "Lady",
  "Legislator",
  "Leviathan",
  "Light",
  "Lord",
  "Magistrate",
  "Marshal",
  "Martyr",
  "Mirror",
  "Mother",
  "Octagon",
  "Ombudsman",
  "Panther",
  "Paragon",
  "Patriot",
  "Pledge",
  "Power",
  "Precursor",
];

const secondPart = [
  "of Allegiance",
  "of Audacity",
  "of Authority",
  "of Battle",
  "of Benevolence",
  "of Conquest",
  "of Conviction",
  "of Conviviality",
  "of Courage",
  "of Dawn",
  "of Democracy",
  "of Destiny",
  "of Destruction",
  "of Determination",
  "of Equality",
  "of Eternity",
  "of Family Values",
  "of Fortitude",
  "of Freedom",
  "of Glory",
  "of Gold",
  "of Honor",
  "of Humankind",
  "of Independence",
  "of Individual Merit",
  "of Integrity",
  "of Iron",
  "of Judgment",
  "of Justice",
  "of Law",
  "of Liberty",
  "of Mercy",
  "of Midnight",
  "of Morality",
  "of Morning",
  "of Opportunity",
  "of Patriotism",
  "of Peace",
  "of Perseverance",
  "of Pride",
  "of Redemption",
  "of Science",
  "of Self-Determination",
  "of Selfless Service",
  "of Serenity",
  "of Starlight",
  "of Steel",
  "of Super Earth",
  "of Supremacy",
  "of the Constitution",
  "of the People",
  "of the Regime",
  "of the Stars",
  "of the State",
  "of Truth",
  "of Twilight",
  "of Victory",
  "of Vigilance",
  "of War",
  "of Wrath",
];

function generateRandomName() {
  const first = firstPart[Math.floor(Math.random() * firstPart.length)];
  const second = secondPart[Math.floor(Math.random() * secondPart.length)];
  return (first + " " + second).toUpperCase();
}

export default generateRandomName;
