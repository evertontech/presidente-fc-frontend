import { Button } from "~/components/ui/button";

export default function BarraDeNavegacao() {
  return (
    <nav className="flex justify-around items-center bg-white w-full h-20 fixed bottom-0">
      <Button variant="ghost" className="flex flex-col">
        Início
      </Button>
      <Button variant="ghost" className="flex flex-col">
        Escalação
      </Button>
      <Button variant="ghost" className="flex flex-col">
        Tática
      </Button>
      <Button variant="ghost" className="flex flex-col">
        Ligas
      </Button>
    </nav>
  );
}
