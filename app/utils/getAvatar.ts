import { avataaars } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

export default function getAvatar() {
  return createAvatar(avataaars, {
    size: 128,
    seed: Math.random().toString(),
    clothing: ["collarAndSweater"],
    eyes: ["squint"],
    eyebrows: ["defaultNatural"],
    mouth: ["twinkle"],
    facialHairProbability: 25,
    top: [
      "dreads01",
      "frizzle",
      "dreads02",
      "fro",
      "shaggy",
      "shortCurly",
      "shortFlat",
      "shortRound",
      "theCaesar",
      "shortWaved",
    ],
    topProbability: 85,
    accessoriesProbability: 0,
  }).toDataUri();
}
