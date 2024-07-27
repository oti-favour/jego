import { groq } from "next-sanity";

const QueryOmitDrafts = '!(_id in path("drafts.**"))';

export const GetHomePage = groq`*[_type == "home"][0]`;

export const GetInvestorsPage = groq`*[_type == "investors"][0]`;

export const GetFooter = groq`*[_type == "footer"][0]`;

export const GetPassword = groq`*[_type == 'investors' && defined(password)][0].password`;

export const GetNewsFromRef = groq`*[_type == "news" && _id==$ref][0]`;

export const GetNewsFromSlug = groq`*[_type == "news" && slug.current == $ref][0]`;

export const GetReports = groq`*[_type == "reports"][0...6]`;

export const GetReportBySlug = groq`*[_type == "reports" && slug.current == $ref][0]`;

export const GetReportsCategories = groq`*[_type == "reportsCategory"]`;

export const GetProductFromRef = groq`*[_type == "products" && _id==$ref][0]`;

export const GetProductFromSlug = groq`*[_type == "products" && slug.current == $ref][0]`;
