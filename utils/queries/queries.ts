import { groq } from "next-sanity";

const QueryOmitDrafts = '!(_id in path("drafts.**"))';

export const GetHomePage = groq`*[_type == "home"][0]`;

export const GetAllPages = groq`*[_type == "page"]`;
