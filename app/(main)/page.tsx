import getData from "@/hooks/getHomeData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import HeroSection from "./(sections)/hero";
import IntroSection from "./(sections)/intro";

async function Main() {
  const data = await getData();

  if (!data) {
    return notFound();
  }

  const { hero, intro, powerPod } = data;
  return (
    <>
      <HeroSection hero={hero} />
      <IntroSection intro={intro} />
      {/* <PowerPodSection powerPod={powerPod}/> */}
      <SpeedInsights />
    </>
  );
}

export default Main;
