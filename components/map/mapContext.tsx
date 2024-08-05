"use client";
import { Locations } from "@/types/generated-types";
import React, { createContext, useState } from "react";

interface MapContextValue {
  anchor: [number, number] | undefined;
  location?: Locations;
  setAnchor: (anchor: [number, number]) => void;
  searchLocation?: (input: string) => void;
  isAreaAvailable: boolean;
  zoom: number;
  increaseZoom: () => void;
  decreaseZoom: () => void;
}

const initialMapContextValue: MapContextValue = {
  anchor: [36.778259, -119.417931],
  location: undefined,
  setAnchor: () => {},
  searchLocation: () => {},
  isAreaAvailable: false,
  zoom: 5,
  increaseZoom: () => {},
  decreaseZoom: () => {},
};

const MapContext = createContext<MapContextValue>(initialMapContextValue);

const MapProvider = ({
  children,
  locations,
}: {
  children: React.ReactNode;
  locations: Locations[];
}) => {
  const { latitude, longitude } = locations[0] || {
    latitude: 36.778259,
    longitude: -119.417931,
  };
  const [anchor, setAnchor] = useState<[number, number] | undefined>([
    latitude,
    longitude,
  ]);
  const [currentLocation, setCurrentLocation] = useState<Locations | undefined>(
    locations[0],
  );
  const [zoom, setZoom] = useState(5);

  function searchLocation(input: string) {
    const location = locations.find((location) =>
      location.name.toLowerCase().includes(input.toLowerCase()),
    );
    setCurrentLocation(location);
  }

  function increaseZoom() {
    if (zoom === 10) return;
    setZoom((prev) => prev + 1);
  }

  function decreaseZoom() {
    if (zoom === 5) return;
    setZoom((prev) => prev - 1);
  }

  const mapContextValue: MapContextValue = {
    anchor,
    setAnchor,
    location: currentLocation,
    searchLocation,
    isAreaAvailable: !!currentLocation,
    zoom: zoom,
    increaseZoom,
    decreaseZoom,
  };

  return (
    <MapContext.Provider value={mapContextValue}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
