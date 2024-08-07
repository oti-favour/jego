import { Button } from "./ui/button";

import LocationSVG from "@/public/assets/location.svg";
import MapSVG from "@/public/assets/map.svg";

function MapButtonSwitcher({
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

export default MapButtonSwitcher;
