"use client";
import { HomePageContext } from "@/hooks/useHomeData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useContext } from "react";
import HeroSection from "./(sections)/hero";
import IntroSection from "./(sections)/intro";

function Main() {
  const { data } = useContext(HomePageContext);
  if (!data) {
    return null;
  }

  const { hero, intro } = data;
  return (
    <>
      <HeroSection hero={hero} />
      <IntroSection intro={intro} />
      <SpeedInsights />
    </>
  );
}

export default Main;
