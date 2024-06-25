import Navbar from "@/components/Navbar";
import HomeLayout from "@/components/home/HomeLayout";

export default async function Home() {
  return (
    <HomeLayout>
      <Navbar />
    </HomeLayout>
  );
}
