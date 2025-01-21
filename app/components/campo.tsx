export default function Campo() {
  return (
    <article
      className="h-2/3 w-full flex flex-col justify-between"
      style={{
        background:
          "repeating-linear-gradient(#2d561c, #2d561c 9.09%, #356029 9.09%, #356029 18.18%)",
      }}
    >
      <section className="flex justify-center">
        <div className="flex justify-center h-[8.56rem] w-[20.14rem] border-2 border-t-0 border-white">
          <div className="h-[3.0rem] w-[10.0rem] border-2 border-t-0 border-white"></div>
        </div>
      </section>
      <section className="flex justify-center items-center relative">
        <div className="bg-white h-0.5 w-full absolute "></div>
        <div className="h-[9.15rem] w-[9.15rem] rounded-full border-2 border-white"></div>
      </section>
      <section className="flex justify-center ">
        <div className="flex justify-center h-[8.56rem] w-[20.14rem] border-2 border-b-0 border-white items-end">
          <div className="h-[3.0rem] w-[10.0rem] border-2 border-b-0 border-white"></div>
        </div>
      </section>
    </article>
  );
}
