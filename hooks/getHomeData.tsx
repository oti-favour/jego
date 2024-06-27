import { Home } from "@/types/generated-types";
import { fetchDocument } from "@/utils/actions/actions";
import { GetHomePage } from "@/utils/queries/queries";
import { cache } from "react";

export const getData = cache(async () => {
  "use server";
  const data = await fetchDocument<Home>({
    query: GetHomePage,
  });

  return data;
});

export default getData;
