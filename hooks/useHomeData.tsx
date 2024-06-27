"use client";
import { Home } from "@/types/generated-types";
import { fetchDocument } from "@/utils/actions/actions";
import { GetHomePage } from "@/utils/queries/queries";
import { cache, createContext } from "react";
import useSWR from "swr";

export const HomePageContext = createContext<HomeData>({
  data: null,
  isLoading: true,
});

const getData = cache(async () => {
  const data = await fetchDocument<Home>({
    query: GetHomePage,
  });

  return data;
});

function HomeDataProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useSWR("home", getData);

  return (
    <HomePageContext.Provider value={{ data, isLoading }}>
      {children}
    </HomePageContext.Provider>
  );
}

export default HomeDataProvider;

export type HomeData = {
  data?: Home | null;
  isLoading: boolean;
};
