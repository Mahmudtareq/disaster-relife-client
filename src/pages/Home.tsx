import ImageGallery from "@/components/ImageGallery";
import HeroBanner from "@/components/banner/HeroBanner";
import SupplyCardHome from "@/components/imagecard/SupplyCardHome";
const Home = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <HeroBanner />
      <SupplyCardHome />
      <ImageGallery />
    </div>
  );
};

export default Home;
