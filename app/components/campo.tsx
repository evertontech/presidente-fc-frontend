interface Props {
  className?: string;
}

export default function Campo(props: Props) {
  return (
    <article
      className={`relative h-2/3 max-h-[50rem] w-full max-w-[35rem] flex flex-col justify-between border-gray-300 border-4 rounded-lg ${props.className}` }
      style={{
        background:
          "repeating-linear-gradient(#2d561c, #2d561c 9.09%, #356029 9.09%, #356029 18.18%)",
      }}
    >
      <div className="absolute bg-gray-300 top-0 left-0 w-5 h-5 rounded-br-full"></div>
      <div className="absolute bg-gray-300 top-0 right-0 w-5 h-5 rounded-bl-full"></div>
      <div className="absolute bg-gray-300 bottom-0 left-0 w-5 h-5 rounded-tr-full"></div>
      <div className="absolute bg-gray-300 bottom-0 right-0 w-5 h-5 rounded-tl-full"></div>
      <section className="flex justify-center flex-1">
        <div className="flex justify-center h-1/2 w-1/2 border-4 border-t-0 border-gray-300 rounded-b-lg">
          <div className="h-2/5 w-1/2 border-4 border-t-0 border-gray-300 rounded-b-lg"></div>
        </div>
      </section>
      <section className="flex justify-center items-center relative flex-1">
        <div className="bg-gray-300 h-1 w-full absolute "></div>
        <div className="w-1/3 aspect-square rounded-full border-4 border-gray-300"></div>
        <div className="w-4 aspect-square rounded-full bg-gray-300 absolute"></div>
      </section>
      <section className="flex justify-center flex-1 items-end">
        <div className="flex justify-center h-1/2 w-1/2 border-4 border-b-0 border-gray-300 items-end rounded-t-lg">
          <div className="h-2/5 w-1/2 border-4 border-b-0 border-gray-300 rounded-t-lg"></div>
        </div>
      </section>
    </article>
  );
}
