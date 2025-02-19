import FooterSection from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import getData from "@/hooks/getData";
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
import getInvestorsData from '@/hooks/getData'

async function Main() {
  const { data, footer } = await getData();

  console.log(getInvestorsData)

  if (!data || !footer) {
    return notFound();
  }

  return (
    <SmoothScroll>
      <HeroSection hero={data.hero} />
      <PowerPodSection powerPod={data.powerPod} />
      <ElectricVehiclesSection electricVehicle={data.electricVehicles} />
      <JegoPodSection jegoPod={data.jegoPod} />
      <AboutUsSection about={data.about} />
      <IntroSection intro={data.intro} />
      <MobileAppSection mobileApp={data.mobileApp} />
      <FAQSection faqs={data.faqs} />
      <GallerySection gallery={data.gallery} />
      <FooterSection footer={footer} />
      <SpeedInsights />
    </SmoothScroll>
  );
}

export default Main;
