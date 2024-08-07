import { Map, Marker } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import { useContext } from "react";
import { MapContext } from "./mapContext";

function MapItem({
  onMarkerClick,
  maptilerKey,
}: {
  onMarkerClick: () => void;
  maptilerKey: string;
}) {
  const maptilerProvider = maptiler(maptilerKey, "streets");
  const { setAnchor, allLocations } = useContext(MapContext);

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

export default MapItem;
