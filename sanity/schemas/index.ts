import { SchemaTypeDefinition } from "sanity";
import booking from "./docs/booking";
import home from "./docs/home";
import faq from "./types/faq";
import member from "./types/member";
import newsletter from "./types/newsletter";
import overview from "./types/overview";
import pageFeatures from "./types/pageFeatures";
import partners from "./types/partners";
import product from "./types/product";
import about from "./types/sections/about";
import electricVehicle from "./types/sections/electricVehicle";
import faqs from "./types/sections/faqs";
import gallery from "./types/sections/gallery";
import hero from "./types/sections/hero";
import intro from "./types/sections/intro";
import jegoPod from "./types/sections/jegoPod";
import mobileApp from "./types/sections/mobileApp";
import powerPod from "./types/sections/powerPod";
import social from "./types/social";
import video from "./types/video";

const schemas: SchemaTypeDefinition[] = [
  // homepage
  home,
  hero,
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
  product,
  social,
  video,

  //   booking,
  booking,
];

export default schemas;
