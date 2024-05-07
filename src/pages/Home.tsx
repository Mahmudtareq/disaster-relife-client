import HeroBanner from "@/components/banner/HeroBanner";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroBanner />
      <h1 className="text-3xl font-bold underline">Dister relif home</h1>
      <Button>hello</Button>
    </div>
  );
};

export default Home;
