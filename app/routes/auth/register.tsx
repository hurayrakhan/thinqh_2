import { RegisterPage } from "~/components/RegisterPage";
import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register | Thinqh" },
    { name: "description", content: "Register to Thinqh" },
  ];
}

export default function Register() {
  return <RegisterPage />;
}
