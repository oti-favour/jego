import getData from "@/hooks/getHomeData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import AboutUsSection from "./(sections)/about_us";
import ElectricVehiclesSection from "./(sections)/electric_vehicles";
import FAQSection from "./(sections)/faq";
import GallerySection from "./(sections)/gallery";
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

  return (
    <>
      <HeroSection hero={data.hero} />
      <IntroSection intro={data.intro} />
      <PowerPodSection powerPod={data.powerPod} />
      <ElectricVehiclesSection electricVehicle={data.electricVehicles} />
      <JegoPodSection jegoPod={data.jegoPod} />
      <MobileAppSection mobileApp={data.mobileApp} />
      <AboutUsSection about={data.about} />
      <FAQSection faqs={data.faqs} />
      <GallerySection gallery={data.gallery} />
      <SpeedInsights />
    </>
  );
}

export default Main;
