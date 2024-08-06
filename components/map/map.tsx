"use client";
import { Caption, DynamicHeading } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn, sanityImageUrl } from "@/lib/utils";
import LocationSVG from "@/public/assets/location.svg";
import MapSVG from "@/public/assets/map.svg";
import { Locations, Product, Products } from "@/types/generated-types";
import Image from "next/image";
import { Map, Marker } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import { useContext, useState } from "react";
import Chip from "../Chip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { MapContext, MapProvider } from "./mapContext";

function JegoMap({ locations }: { locations: Locations[] }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex h-svh max-h-screen w-full flex-col items-center">
      <div className="relative h-full w-full">
        <MapProvider locations={locations}>
          <MapItem onMarkerClick={() => setShowMap(true)} />
          <div className={cn(showMap ? "hidden lg:block" : "block")}>
            <LocationsCard locations={locations} />
          </div>
          <ButtonSwitcher
            showMap={showMap}
            onClick={() => setShowMap((prev) => !prev)}
          />
        </MapProvider>
      </div>
    </div>
  );
}

export default JegoMap;

function LocationsCard({ locations }: { locations: Locations[] }) {
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
          <LocationItem locations={locations} />
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

function ButtonSwitcher({
  showMap,
  onClick,
}: {
  showMap: boolean;
  onClick: () => void;
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
      {showMap ? (
        <Button
          onClick={onClick}
          className="flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/80"
        >
          <LocationSVG />
          <span>Locations</span>
        </Button>
      ) : (
        <Button
          className="flex items-center gap-2 rounded-full hover:bg-black/80"
          onClick={onClick}
        >
          <MapSVG />
          <span>Map</span>
        </Button>
      )}
    </div>
  );
}

function MapItem({ onMarkerClick }: { onMarkerClick: () => void }) {
  const maptilerProvider = maptiler("0dJTV3UMaWKre0zz0oao", "streets");
  const { anchor, setAnchor, isAreaAvailable, allLocations } =
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
        {allLocations?.map((location, index) => {
          const { latitude, longitude } = location;

          return (
            <Marker
              key={index}
              width={50}
              anchor={[latitude, longitude]}
              onClick={onMarkerClick}
            />
          );
        })}
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
