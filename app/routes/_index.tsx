import type { MetaFunction } from "@remix-run/node";
import Escalacao from "~/components/escalacao";

export const meta: MetaFunction = () => {
  return [{ title: "Presidente FC" }];
};

export default function Index() {
  return (
    <main className="h-screen flex items-center justify-center px-5">
      <Escalacao></Escalacao>
    </main>
  );
}
