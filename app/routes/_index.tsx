import type { MetaFunction } from "@remix-run/node";
import { Home, Presentation, Trophy, User, UserRoundCog } from "lucide-react";
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
    <main className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <Escalacao></Escalacao>
      <nav className="flex justify-around items-center bg-white w-full h-20 fixed bottom-0">
        <Button variant="ghost" className="flex flex-col">
          <Home />
          Início
        </Button>
        <Button variant="ghost" className="flex flex-col">
          <UserRoundCog />
          Escalação
        </Button>
        <Button variant="ghost" className="flex flex-col">
          <Presentation />
          Tática
        </Button>
        <Button variant="ghost" className="flex flex-col">
          <Trophy />
          Ligas
        </Button>
      </nav>
    </main>
  );
}
