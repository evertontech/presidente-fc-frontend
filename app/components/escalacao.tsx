import Campo from "./campo";
import Jogador from "./jogador";

export default function Escalacao() {
  return (
    <div className="flex justify-center items-center h-full w-full relative">
      <Campo className=""></Campo>
      <article className="h-2/3 max-h-[50rem] w-full max-w-[35rem] absolute grid grid-rows-5 pt-5">
        <section className="flex flex-1 justify-center gap-3">
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
        </section>
        <section className="flex flex-1 justify-evenly">
          <Jogador className=""></Jogador>
        </section>
        <section className="flex flex-1 justify-center gap-3">
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
        </section>
        <section className="flex flex-1 justify-evenly gap-3">
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
          <Jogador className=""></Jogador>
        </section>
        <section className="flex flex-1 justify-evenly">
          <Jogador className=""></Jogador>
        </section>
      </article>
    </div>
  );
}
