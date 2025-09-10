import { LoginPage } from "../../components/LoginPage";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | Thinqh" },
    { name: "description", content: "Login to your Thinqh account" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
