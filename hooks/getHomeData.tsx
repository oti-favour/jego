import { Footer, Home } from "@/types/generated-types";
import { fetchDocument } from "@/utils/actions/actions";
import { GetFooter, GetHomePage } from "@/utils/queries/queries";
import { cache } from "react";

export const getData = cache(async () => {
  "use server";
  const data = await fetchDocument<Home>({
    query: GetHomePage,
  });

  const footer = await fetchDocument<Footer>({
    query: GetFooter,
  });

  return { data, footer };
});

export default getData;
