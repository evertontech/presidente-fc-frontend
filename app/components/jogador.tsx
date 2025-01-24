import { avataaars } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";

interface Props {
  className: string,
}

export default function Jogador(props: Props) {
  const avatar = useMemo(() => {
    return createAvatar(avataaars, {
      size: 128,
      seed: Math.random().toString(),
      clothing: ["collarAndSweater"],
      eyes: ["squint"],
      eyebrows: ["defaultNatural"],
      mouth: ["twinkle"],
      facialHairProbability: 25,
      top: ["dreads01", "frizzle", "dreads02", "fro", "shaggy", "shortCurly", "shortFlat", "shortRound", "theCaesar", "shortWaved"],
      topProbability: 85,
      accessoriesProbability: 0
    }).toDataUri();
  }, []);

  return <img src={avatar} alt="Avatar" className={`${props.className}`} />;
}
