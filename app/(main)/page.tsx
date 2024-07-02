import getData from "@/hooks/getHomeData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import ElectricVehiclesSection from "./(sections)/electric_vehicles";
import HeroSection from "./(sections)/hero";
import IntroSection from "./(sections)/intro";
import JegoPodSection from "./(sections)/jego_pod";
import MobileAppSection from "./(sections)/mobile_app";
import PowerPodSection from "./(sections)/power_pod";

async function Main() {
  const data = await getData();

  if (!data) {
    return notFound();
  }

  const { hero, intro, powerPod, jegoPod, electricVehicles, mobileApp } = data;
  return (
    <>
      <HeroSection hero={hero} />
      <IntroSection intro={intro} />
      <PowerPodSection powerPod={powerPod} />
      <ElectricVehiclesSection electricVehicle={electricVehicles} />
      <JegoPodSection jegoPod={jegoPod} />
      <MobileAppSection mobileApp={mobileApp} />
      <SpeedInsights />
    </>
  );
}

export default Main;
