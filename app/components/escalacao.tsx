import PosicaoEnum from "~/enums/posicaoEnum";
import Campo from "./campo";
import Jogador from "./jogador";

export default function Escalacao() {
  return (
    <div className="flex justify-center items-center h-full w-full relative">
      <Campo className=""></Campo>
      <article className="h-2/3 max-h-[50rem] w-full max-w-[35rem] absolute grid grid-rows-7 pt-5">
        {/* CENTROAVANTE */}
        <section className="flex flex-1 justify-center gap-3">
          <Jogador posicao={PosicaoEnum.CENTRO_AVANTE}></Jogador>
        </section>
        {/* PONTAS */}
        <section className="flex flex-1 justify-between gap-4">
          <Jogador posicao={PosicaoEnum.PONTA_ESQUERDA}></Jogador>
          <Jogador posicao={PosicaoEnum.PONTA_DIREITA}></Jogador>
        </section>
        {/* MEIO DE CAMPO */}
        <section className="flex flex-1 justify-evenly">
          <Jogador posicao={PosicaoEnum.MEIA_ATACANTE}></Jogador>
        </section>
        {/* VOLANTES */}
        <section className="flex flex-1 justify-center gap-5">
          <Jogador posicao={PosicaoEnum.VOLANTE}></Jogador>
          <Jogador posicao={PosicaoEnum.VOLANTE}></Jogador>
        </section>
        {/* LATERAIS */}
        <section className="flex flex-1 justify-between gap-5">
          <Jogador posicao={PosicaoEnum.LATERAL_ESQUERDO}></Jogador>
          <Jogador posicao={PosicaoEnum.LATERAL_DIREITO}></Jogador>
        </section>
        {/* ZAGUEIROS */}
        <section className="flex flex-1 justify-evenly">
          <Jogador posicao={PosicaoEnum.ZAGUEIRO}></Jogador>
          <Jogador posicao={PosicaoEnum.ZAGUEIRO}></Jogador>
        </section>
        {/* GOLEIRO */}
        <section className="flex flex-1 justify-center">
          <Jogador posicao={PosicaoEnum.GOLEIRO}></Jogador>
        </section>
      </article>
    </div>
  );
}
