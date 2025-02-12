import { Home, Presentation, Trophy, User, UserRoundCog } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function BarraDeNavegacao() {
  return (
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
  );
}
