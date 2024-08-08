import JegoMap from "@/components/map/map";
import { getLocations } from "@/hooks/getData";

async function page() {
  const { locations, booking } = await getLocations();

  if (!booking) {
    return null;
  }

  return (
    <div className="select-none">
      <JegoMap locations={locations} booking={booking} />
    </div>
  );
}

export default page;
