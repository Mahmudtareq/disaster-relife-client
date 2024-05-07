import SupplyCard from "@/components/SupplyCard";
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
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold">New Supply card</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <SupplyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllSupplyProducts;
