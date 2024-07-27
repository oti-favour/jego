import {
  Footer,
  Home,
  Investors,
  News,
  Products,
  Reports,
} from "@/types/generated-types";
import { fetchDocument, fetchDocumentByRef } from "@/utils/actions/actions";
import {
  GetFooter,
  GetHomePage,
  GetInvestorsPage,
  GetNewsFromRef,
  GetNewsFromSlug,
  GetProductFromRef,
  GetReportBySlug,
  GetReports,
} from "@/utils/queries/queries";
import { cache } from "react";

export const getHomeData = async () => {
  "use server";
  const data = await fetchDocument<Home>({
    query: GetHomePage,
  });

  const footer = await fetchDocument<Footer>({
    query: GetFooter,
  });

  return { data, footer };
};

export default getHomeData;

export const getInvestorsData = cache(async () => {
  "use server";
  const data = await fetchDocument<Investors>({
    query: GetInvestorsPage,
  });

  const footer = await fetchDocument<Footer>({
    query: GetFooter,
  });

  return { data, footer };
});

export const getNewsDataFromRef = cache(async (newsIds: string[]) => {
  "use server";
  const news = [];
  for (const id of newsIds) {
    const newsItem = await fetchDocumentByRef<News>({
      query: GetNewsFromRef,
      ref: id,
    });
    if (newsItem) {
      news.push(newsItem);
    }
  }

  return news;
});

export const getOneNewsDataFromRef = cache(async (slug: string) => {
  "use server";
  const newsItem = await fetchDocumentByRef<News>({
    query: GetNewsFromSlug,
    ref: slug,
  });

  return newsItem;
});

export const getReports = cache(async () => {
  "use server";
  const reports = await fetchDocument<Reports[]>({
    query: GetReports,
  });

  return reports;
});

export const getReportFromSlug = cache(async (slug: string) => {
  "use server";
  const report = await fetchDocumentByRef<Reports>({
    query: GetReportBySlug,
    ref: slug,
  });

  return report;
});

export const getProductFromRef = cache(async (ref: string) => {
  "use server";
  const product = await fetchDocumentByRef<Products>({
    query: GetProductFromRef,
    ref,
  });
  console.log(ref);

  return product;
});
