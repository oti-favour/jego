"use client";
import { cn } from "@/lib/utils";
import { Booking, Locations } from "@/types/generated-types";
import { useState } from "react";
import MapButtonSwitcher from "../MapButtonSwitcher";
import LocationsCard from "./location";
import { MapProvider } from "./mapContext";
import MapItem from "./MapItem";

function JegoMap({
  locations,
  booking,
}: {
  locations: Locations[];
  booking: Booking;
}) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex h-svh max-h-screen w-full flex-col items-center">
      <div className="relative h-full w-full">
        <MapProvider locations={locations}>
          <MapItem
            onMarkerClick={() => setShowMap(true)}
            maptilerKey={booking.maptilerKey}
          />
          <div className={cn(showMap ? "hidden lg:block" : "block")}>
            <LocationsCard
              locations={locations}
              calendlyUrl={booking.calendlyURL}
            />
          </div>
          <MapButtonSwitcher
            showMap={showMap}
            onClick={() => setShowMap((prev) => !prev)}
          />
        </MapProvider>
      </div>
    </div>
  );
}

export default JegoMap;
