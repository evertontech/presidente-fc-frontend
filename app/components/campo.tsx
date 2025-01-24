interface Props {
  className: string;
}

export default function Campo(props: Props) {
  return (
    <article
      className={`h-2/3 max-h-[50rem] w-full max-w-[35rem] flex flex-col justify-between ${props.className}`}
      style={{
        background:
          "repeating-linear-gradient(#2d561c, #2d561c 9.09%, #356029 9.09%, #356029 18.18%)",
      }}
    >
      <section className="flex justify-center flex-1">
        <div className="flex justify-center h-1/2 w-1/2 border-4 border-t-0 border-gray-300">
          <div className="h-2/5 w-1/2 border-4 border-t-0 border-gray-300"></div>
        </div>
      </section>
      <section className="flex justify-center items-center relative flex-1">
        <div className="bg-gray-300 h-1 w-full absolute "></div>
        <div className="w-1/4 aspect-square rounded-full border-4 border-gray-300"></div>
      </section>
      <section className="flex justify-center flex-1 items-end">
        <div className="flex justify-center h-1/2 w-1/2 border-4 border-b-0 border-gray-300 items-end">
          <div className="h-2/5 w-1/2 border-4 border-b-0 border-gray-300"></div>
        </div>
      </section>
    </article>
  );
}
