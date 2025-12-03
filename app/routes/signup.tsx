import SignupPage from "~/pages/signup";
import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Proffice | Sign Up" },
    { name: "description", content: "Organizational platform for teachers!" },
  ];
}

export default function SignupRoute() {

  return <SignupPage />;
}