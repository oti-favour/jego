import { SchemaTypeDefinition } from "sanity";
import booking from "./docs/booking";
import home from "./docs/home";
import investors from "./docs/investors";
import author from "./types/author";
import blockContent from "./types/blockContent";
import customization from "./types/customization";
import faq from "./types/faq";
import member from "./types/member";
import navItem from "./types/navItem";
import news from "./types/news";
import newsletter from "./types/newsletter";
import overview from "./types/overview";
import pageFeatures from "./types/pageFeatures";
import partners from "./types/partners";
import pricing from "./types/pricing";
import product from "./types/product";
import productObject from "./types/productObject";
import reports from "./types/report";
import about from "./types/sections/about";
import electricVehicle from "./types/sections/electricVehicle";
import faqs from "./types/sections/faqs";
import footer from "./types/sections/footer";
import gallery from "./types/sections/gallery";
import hero from "./types/sections/hero";
import intro from "./types/sections/intro";
import investorsHome from "./types/sections/investorsHome";
import jegoPod from "./types/sections/jegoPod";
import location from "./types/sections/location";
import mobileApp from "./types/sections/mobileApp";
import powerPod from "./types/sections/powerPod";
import waitlist from "./types/sections/waitlist";
import social from "./types/social";
import specs from "./types/specs";
import video from "./types/video";

const schemas: SchemaTypeDefinition[] = [
  // homepage
  home,
  hero,
  booking,
  intro,
  powerPod,
  jegoPod,
  electricVehicle,
  mobileApp,
  about,
  faqs,
  gallery,
  faq,
  member,
  newsletter,
  overview,
  pageFeatures,
  partners,
  productObject,
  product,
  social,
  video,
  navItem,

  // investors
  investors,
  news,
  investorsHome,
  blockContent,
  author,
  reports,
  pricing,
  specs,
  customization,
  location,
  waitlist,

  footer,
];

export default schemas;
