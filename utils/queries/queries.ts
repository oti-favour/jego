import { groq } from "next-sanity";

const QueryOmitDrafts = '!(_id in path("drafts.**"))';

export const GetHomePage = groq`*[_type == "home"][0]`;

export const GetFooter = groq`*[_type == "footer"][0]`;
