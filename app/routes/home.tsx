
import { LandingPage } from "~/pages/landing";
import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Proffice" },
    { name: "description", content: "Organizational platform for teachers!" },
  ];
}

export default function Index() {
  return (
    <LandingPage/>
  );
}
