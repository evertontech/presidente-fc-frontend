import { Button } from "~/components/ui/button";
import { MdOutlineHome } from "react-icons/md";
import { GiSoccerField } from "react-icons/gi";
import { ImClipboard } from "react-icons/im";
import { BsTrophy } from "react-icons/bs";
import { PiSoccerBallFill } from "react-icons/pi";

export default function BarraDeNavegacao() {
  return (
    <nav className="flex justify-around items-center bg-white w-full h-20 fixed bottom-0">
      <Button variant="ghost" className="flex flex-col">
        <MdOutlineHome /> Início
      </Button>
      <Button variant="ghost" className="flex flex-col">
        <PiSoccerBallFill /> Escalação
      </Button>
      <Button variant="ghost" className="flex flex-col">
        <ImClipboard /> Tática
      </Button>
      <Button variant="ghost" className="flex flex-col">
        <BsTrophy /> Ligas
      </Button>
    </nav>
  );
}
