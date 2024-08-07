import { sanityImageUrl } from "@/lib/utils";
import { Locations, Product, Products } from "@/types/generated-types";
import Image from "next/image";
import { PopupButton } from "react-calendly";
import Chip from "../Chip";
import { Caption, DynamicHeading } from "../Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";

function LocationsCard({
  locations,
  calendlyUrl,
}: {
  locations: Locations[];
  calendlyUrl: string;
}) {
  return (
    <div className="absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-24 md:w-max md:-translate-x-0">
      <Card className="w-full space-y-4 bg-[#F7F6F5] p-4 shadow-xl">
        <CardHeader className="rounded-xl bg-white">
          <Caption className="font-gustavoBold text-sm text-[#64748B] md:text-sm lg:text-sm">
            book a free test ride
          </Caption>
          <DynamicHeading
            className="font-productBold text-base normal-case md:text-2xl"
            level="h1"
          >
            Where are you located?
          </DynamicHeading>
          <Input
            type="search"
            className="rounded-full"
            placeholder="Search location"
          ></Input>
        </CardHeader>
        <CardContent className="space-y-2 px-0">
          <Caption className="font-productBold text-base normal-case md:text-base">
            Locations available
          </Caption>
          <LocationItem locations={locations} calendlyUrl={calendlyUrl} />
        </CardContent>
        <CardFooter className="w-full justify-center py-0 text-center">
          <span className="font-product text-sm font-light text-[#64748B]">
            More locations coming soon
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}

function LocationItem({
  locations,
  calendlyUrl,
}: {
  locations: Locations[];
  calendlyUrl: string;
}) {
  return (
    <Accordion type="single" collapsible>
      {locations.map((location, index) => {
        const values = location.products;
        return (
          <AccordionItem
            value={location.name}
            key={index}
            className="w-full rounded-xl bg-[#CBD5E1] font-productBold text-base"
          >
            <AccordionTrigger className="w-full rounded-xl bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <Image
                  src={sanityImageUrl(location.image)}
                  alt={location.name}
                  width={50}
                  height={50}
                  className=""
                />
                <span>{location.name}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="relative space-y-2 px-5 py-2">
              {values.map((valueItem, index) => {
                const { product, comingSoon } = valueItem;
                const productItem = product as unknown as Products;
                const finalProductItem = productItem.product;

                return (
                  <div key={index}>
                    <VehicleItem
                      calendlyUrl={calendlyUrl}
                      product={finalProductItem}
                      comingSoon={comingSoon}
                    />
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

function VehicleItem({
  product,
  comingSoon,
  calendlyUrl,
}: {
  product: Product;
  comingSoon?: boolean;
  calendlyUrl: string;
}) {
  return (
    <div className="group flex items-center gap-4">
      <Image
        src={sanityImageUrl(product.heroImage)}
        alt={product.title}
        width={50}
        height={50}
        className="h-auto w-auto"
      />
      <div>{product.title}</div>
      {comingSoon && (
        <Chip
          className="rounded-full bg-[#FFFAF5] text-[#CC6800]"
          text="Coming soon"
        />
      )}
      <Button
        asChild
        className="absolute right-0 h-full bg-brightTurquoise text-black hover:bg-brightTurquoise/80 group-hover:visible md:invisible"
      >
        <PopupButton
          url={calendlyUrl}
          rootElement={document.getElementById("root")!}
          text="Book Now"
        />
      </Button>
    </div>
  );
}

export default LocationsCard;
