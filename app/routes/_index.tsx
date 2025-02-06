import type { MetaFunction } from "@remix-run/node";
import Escalacao from "~/components/escalacao";
import { Button } from "~/components/ui/button";

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
    <main className="h-screen flex flex-col items-center justify-center">
      <Escalacao></Escalacao>
      <Button>pokemon</Button>
    </main>
  );
}
