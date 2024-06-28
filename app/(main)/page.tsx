import getData from "@/hooks/getHomeData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import HeroSection from "./(sections)/hero";
import IntroSection from "./(sections)/intro";
import JegoPodSection from "./(sections)/jego_pod";
import PowerPodSection from "./(sections)/power_pod";

async function Main() {
  const data = await getData();

  if (!data) {
    return notFound();
  }

  const { hero, intro, powerPod, jegoPod } = data;
  return (
    <>
      <HeroSection hero={hero} />
      <IntroSection intro={intro} />
      <PowerPodSection powerPod={powerPod} />
      <JegoPodSection jegoPod={jegoPod} />
      <SpeedInsights />
    </>
  );
}

export default Main;
