import AllProductsCard from "@/components/AllProductsCard";
import { getSupplyData } from "@/data/supplydata";
import { Supply } from "@/types/cardTypes";
import { useEffect, useState } from "react";

const AllSupplyProducts = () => {
  const [data, setData] = useState<Supply[]>([]);
  useEffect(() => {
    // Function to get supply data synchronously
    const supplyData: Supply[] = getSupplyData();
    setData(supplyData);
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="text-center my-4 lg:w-3/4 mx-auto">
        <h1 className="text-2xl font-bold">Vital Essentials</h1>
        <p className="text-lg mt-3 mb-8">
          Quickly grasp key details, facilitating efficient engagement with
          vital supplies. From medical equipment to life-saving provisions, each
          card encapsulates the urgency and significance of every donation
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <AllProductsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllSupplyProducts;
