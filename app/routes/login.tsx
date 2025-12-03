
import LoginPage from "~/pages/login";
import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Proffice | Login" },
    { name: "description", content: "Organizational platform for teachers!" },
  ];
}

export default function LoginRoute() {

  return <LoginPage />;
}