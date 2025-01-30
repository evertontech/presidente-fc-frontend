import Campo from "./campo";
import Jogador from "./jogador";

export default function Escalacao() {
  return (
    <div className="flex justify-center items-center h-full w-full relative">
      <Campo className=""></Campo>
      <article className="h-2/3 max-h-[50rem] w-full max-w-[35rem] absolute grid grid-rows-7 pt-5">
        {/* CENTROAVANTE */}
        <section className="flex flex-1 justify-center gap-3">
          <Jogador className=""></Jogador>
        </section>
        {/* PONTAS */}
        <section className="flex flex-1 justify-between px-10">
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
        </section>
        {/* MEIO DE CAMPO */}
        <section className="flex flex-1 justify-evenly">
          <Jogador className=""></Jogador>
        </section>
        {/* VOLANTES */}
        <section className="flex flex-1 justify-center gap-5">
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
        </section>
        {/* LATERAIS */}
        <section className="flex flex-1 justify-between px-7">
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
        </section>
        {/* ZAGUEIROS */}
        <section className="flex flex-1 justify-evenly">
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
        </section>
        {/* GOLEIRO */}
        <section className="flex flex-1 justify-center">
          <Jogador className=""></Jogador>
        </section>
      </article>
    </div>
  );
}
