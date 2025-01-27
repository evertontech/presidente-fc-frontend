import { avataaars } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";
import { faker } from "@faker-js/faker";

interface Props {
  className: string;
}

export default function Jogador(props: Props) {
  const dados = {
    nome: faker.person.firstName("male"),
    abreviacaoSobrenome: faker.person.lastName("male").charAt(0),
    pontuacao: faker.number.int({ min: -30, max: 100 }),
  };
  const avatar = useMemo(() => {
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
  }, []);

  return (
    <article className={`flex flex-col items-center ${props.className}`}>
      <img src={avatar} alt="Avatar" />
      <section className="flex -m-5">
        <span className="text-sm bg-gray-300 text-black px-2 py-1 rounded-xl w-fit text-center font-bold rounded-r-none">
          {dados.nome}
        </span>
        <span className="text-sm bg-blue-800 text-white px-2 py-1 rounded-xl w-fit text-center font-bold rounded-l-none">
          {dados.pontuacao} pts.
        </span>
      </section>
    </article>
  );
}
