import HeroLayout from "@/components/home/HeroLayout";
import { Home } from "@/types/generated-types";
import { fetchDocument } from "@/utils/actions/actions";
import { GetHomePage } from "@/utils/queries/queries";
import { notFound } from "next/navigation";
import { cache } from "react";
import HeroSection from "./(sections)/hero";

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

  const { hero } = data;

  return (
    <div>
      <HeroLayout>
        <HeroSection hero={hero} />
      </HeroLayout>
      <div className="h-96">adlk</div>
    </div>
  );
}

export default Main;
