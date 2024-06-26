import { groq } from "next-sanity";

const QueryOmitDrafts = '!(_id in path("drafts.**"))'

export const GetHomePage = groq`*[_type == "page" && slug.current == $slug][0]`

export const GetAllPages = groq`*[_type == "page"]`