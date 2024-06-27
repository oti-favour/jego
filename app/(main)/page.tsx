import { Home } from "@/types/generated-types";
import { fetchDocument } from "@/utils/actions/actions";
import { GetHomePage } from "@/utils/queries/queries";
import { notFound } from "next/navigation";
import { cache } from "react";
import HeroSection from "./(sections)/hero";
import IntroSection from "./(sections)/intro";

const getData = cache(async () => {
  const data = await fetchDocument<Home>({
    query: GetHomePage,
  });

  return data;
});

async function Main() {
  const data = await getData();

  if (!data) {
    return notFound();
  }

  const { hero, intro } = data;

  return (
    <>
      <HeroSection hero={hero} />
      <IntroSection intro={intro} />
    </>
  );
}

export default Main;
