import { avataaars } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";
import { faker } from "@faker-js/faker";
import PosicaoEnum from "~/enums/posicaoEnum";

interface Props {
  className?: string;
  posicao: (typeof PosicaoEnum) [keyof typeof PosicaoEnum];
}

export default function Jogador(props: Props) {
  const dados = {
    nome: faker.person.lastName("male"),
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
      <section className="flex">
        <span className="bg-black/40 text-[10px] text-nowrap  text-white px-1 rounded-xl w-fit text-center font-bold align-middle">
          {dados.pontuacao} pontos
        </span>
      </section>
      <img className="h-1/2" src={avatar} alt="Avatar" />
      <section className="flex -m-1 align-middle justify-center items-center">
        <span className={` align-middle text-[10px] px-1 rounded-xl w-fit font-bold rounded-r-none ${props.posicao.corFonte} ${props.posicao.corFundo}`}>
          {props.posicao.abreviacao}
        </span>
        <span className="text-[10px] bg-[#131921] text-white px-1 rounded-l-none w-fit text-center font-bold rounded-xl">
          {dados.nome}
        </span>
      </section>
    </article>
  );
}
