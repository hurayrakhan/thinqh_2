import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home || Thinqh" },
    { name: "description", content: "Welcome to React Thinqh!" },
  ];
}

export default function Home() {
  return <div className="flex items-center justify-center min-h-screen flex-col space-y-6">
      <h1 className="text-5xl font-bold text-gradient glow">
        🚀 Welcome to Thinqh
      </h1>
      <p className="text-lg text-purple-accent">
        Building scalable & innovative digital products
      </p>
    </div>;
}
