import { HeroSection } from "~/components/HeroSection";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home || Thinqh" },
    { name: "description", content: "Welcome to React Thinqh!" },
  ];
}


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* 🔜 Next sections like About, Services, etc. */}
    </>
  );
}
