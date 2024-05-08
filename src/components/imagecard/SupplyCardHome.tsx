import { useEffect, useState } from "react";
import SupplyCard from "../SupplyCard";
import { getSupplyData } from "@/data/supplydata";
import { Supply } from "@/types/cardTypes";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const SupplyCardHome = () => {
  const [data, setData] = useState<Supply[]>([]);
  useEffect(() => {
    // Function to get supply data synchronously
    const supplyData: Supply[] = getSupplyData();
    setData(supplyData);
  }, []); // Empty dependency array to only run effect on mount

  return (
    <div className="my-10">
      <div className="lg:text-center text-justify  my-4 lg:w-3/4 mx-auto">
        <h1 className="text-2xl font-bold">Vital Essentials</h1>
        <p className="text-lg mt-3 mb-8 text-justify">
          Quickly grasp key details, facilitating efficient engagement with
          vital supplies. From medical equipment to life-saving provisions, each
          card encapsulates the urgency and significance of every donation
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data.slice(0, 6).map((item) => (
          <SupplyCard key={item.id} item={item} />
        ))}
      </div>
      <div className="my-10 text-center">
        <Button variant="ghost" className="bg-gray-300">
          <Link
            to="/supplies"
            className="text-lg hover:underline text-fuchsia-500"
          >
            {" "}
            See All Products
          </Link>{" "}
          <ArrowRightCircle className="ms-2" />
        </Button>
      </div>
    </div>
  );
};

export default SupplyCardHome;
