import { useEffect, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import PosicaoEnum from "~/enums/posicaoEnum";
import getAvatar from "~/utils/getAvatar";

interface Props {
  className?: string;
  posicao: (typeof PosicaoEnum)[keyof typeof PosicaoEnum];
}

export default function Jogador(props: Props) {
  const [avatarUrl, setAvatarUrl] = useState<string>();
  const [nome, setNome] = useState<string>();
  const [pontuacao, setPontuacao] = useState<number>();

  useEffect(() => {
    setAvatarUrl(getAvatar());
    setNome(faker.person.lastName("male"));
    setPontuacao(faker.number.int({ min: -30, max: 100 }));
  }, []);

  return (
    <article className={`flex flex-col items-center ${props.className}`}>
      <section className="flex">
        <span className="bg-black/40 text-[10px] text-nowrap  text-white px-1 rounded-xl w-fit text-center font-bold align-middle">
          {pontuacao} pontos
        </span>
      </section>
      <img className="h-1/2" src={avatarUrl} alt="Avatar" />
      <section className="flex -m-1 align-middle justify-center items-center">
        <span
          className={` align-middle text-[10px] px-1 rounded-xl w-fit font-bold rounded-r-none ${props.posicao.corFonte} ${props.posicao.corFundo}`}
        >
          {props.posicao.abreviacao}
        </span>
        <span className="text-[10px] bg-[#131921] text-white px-1 rounded-l-none w-fit text-center font-bold rounded-xl">
          {nome}
        </span>
      </section>
    </article>
  );
}
