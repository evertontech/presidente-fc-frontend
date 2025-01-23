import { avataaars } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";

interface Props {
    corDaCamisa: string,
}

export default function Jogador( props: Props ) {
  const avatar = useMemo(() => {
    return createAvatar(avataaars, {
      size: 128,
      seed: Math.random().toString(),
      clothesColor: [props.corDaCamisa],
      clothing: ["collarAndSweater"],
      eyes: ["surprised"],
      eyebrows: ["default"],
      mouth: ["serious"],
      facialHairProbability: 25,
      top: ["bun", "dreads01", "frizzle", "dreads02", "fro", "shaggy", "shortCurly", "shortFlat", "shortRound", "theCaesar", "shortWaved", "sides"],
      accessoriesProbability: 0
    }).toDataUri();
  }, []);

  return <img src={avatar} alt="Avatar" />;
}
