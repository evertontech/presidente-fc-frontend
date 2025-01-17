import type { MetaFunction } from "@remix-run/node";
import Campo from "~/components/campo";
import Campo from './../components/campo';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Campo></Campo>
    </div>
  );
}

