import type { MetaFunction } from "@remix-run/node";
import BarraDeNavegacao from "~/components/barraDeNavegacao";
import Escalacao from "~/components/escalacao";

export const meta: MetaFunction = () => {
  return [
    { title: "Presidente FC" },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    },
  ];
};

export default function Index() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <Escalacao />
      <BarraDeNavegacao />
    </main>
  );
}
