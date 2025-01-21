export default function Campo() {
  return (
    <article
      className="h-2/3 w-full flex flex-col justify-between"
      style={{
        background:
          "repeating-linear-gradient(#2d561c, #2d561c 9.09%, #356029 9.09%, #356029 18.18%)",
      }}
    >
      <section className="flex justify-center flex-1">
        <div className="flex justify-center h-1/2 w-1/2 border-2 border-t-0 border-white">
          <div className="h-2/5 w-1/2 border-2 border-t-0 border-white"></div>
        </div>
      </section>
      <section className="flex justify-center items-center relative flex-1">
        <div className="bg-white h-0.5 w-full absolute "></div>
        <div className="h-[9.15rem] w-[9.15rem] rounded-full border-2 border-white"></div>
      </section>
      <section className="flex justify-center flex-1 items-end">
        <div className="flex justify-center h-1/2 w-1/2 border-2 border-b-0 border-white items-end">
          <div className="h-2/5 w-1/2 border-2 border-b-0 border-white"></div>
        </div>
      </section>
    </article>
  );
}
