import Banner from "@/components/Banner/Banner";
import FollowUs from "@/components/FollowUs/FollowUs";
import News from "@/components/News/News";
import SaleSection from "@/components/SaleSection/SaleSection";
import Services from "@/components/Services/Services";
import TopCategory from "@/components/TopCategory/TopCategory";
import TopCollection from "@/components/TopCollection/TopCollection";

export default function Home() {
  return (
    <>
      <Banner />
      <TopCategory />
      <TopCollection />
      <SaleSection />
      <News />
      <Services />
      <FollowUs />
    </>
  );
}
