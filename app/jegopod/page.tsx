import JegoMap from "@/components/map/map";
import { getLocations } from "@/hooks/getData";

async function page() {
  const data = await getLocations();

  return (
    <div className="select-none">
      <JegoMap locations={data} />
    </div>
  );
}

export default page;
