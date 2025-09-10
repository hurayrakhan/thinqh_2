import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export function HeroAnimation() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/hero.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData)
    return (
      <div className="w-[400px] h-[400px] bg-gray-800 rounded-xl animate-pulse" />
    );

  return <Lottie animationData={animationData} loop />;
}
