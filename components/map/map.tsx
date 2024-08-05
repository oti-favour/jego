"use client";
import { Caption, DynamicHeading } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { sanityImageUrl } from "@/lib/utils";
import { Locations, Product, Products } from "@/types/generated-types";
import Image from "next/image";
import { Map, Marker } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import { useContext } from "react";
import Chip from "../Chip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MapContext, MapProvider } from "./mapContext";

function JegoMap({ locations }: { locations: Locations[] }) {
  return (
    <div className="flex h-svh max-h-screen w-full flex-col items-center">
      <div className="relative h-full w-full">
        <MapProvider locations={locations}>
          <MapItem />
          <div className="absolute right-24 top-1/2 -translate-y-1/2">
            <Card className="space-y-4 bg-[#F7F6F5] p-4 shadow-xl">
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
                <LocationItem locations={locations} />
              </CardContent>
              <CardFooter className="w-full justify-center py-0 text-center">
                <span className="font-product text-sm font-light text-[#64748B]">
                  More locations coming soon
                </span>
              </CardFooter>
            </Card>
          </div>
        </MapProvider>
      </div>
    </div>
  );
}

export default JegoMap;

function MapItem() {
  const maptilerProvider = maptiler("0dJTV3UMaWKre0zz0oao", "streets");
  const { anchor, setAnchor, isAreaAvailable, location } =
    useContext(MapContext);

  return (
    <>
      <Map
        provider={maptilerProvider}
        boxClassname="w-full h-svh grayscale relative"
        defaultCenter={[36.778259, -119.417931]}
        defaultZoom={5}
        maxZoom={10}
        minZoom={5}
        onBoundsChanged={({ center }) => setAnchor(center)}
      >
        <Marker width={50} anchor={[36.778259, -119.417931]} />
      </Map>
    </>
  );
}

function LocationItem({ locations }: { locations: Locations[] }) {
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
            <AccordionContent className="space-y-2 px-5 py-2">
              {values.map((valueItem, index) => {
                const { product, comingSoon } = valueItem;
                const productItem = product as unknown as Products;
                const finalProductItem = productItem.product;

                return (
                  <div key={index}>
                    <VehicleItem
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
}: {
  product: Product;
  comingSoon?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={sanityImageUrl(product.heroImage)}
        alt={product.title}
        width={50}
        height={50}
      />
      <div>{product.title}</div>
      {comingSoon && (
        <Chip
          className="rounded-full bg-[#FFFAF5] text-[#CC6800]"
          text="Coming soon"
        />
      )}
    </div>
  );
}
