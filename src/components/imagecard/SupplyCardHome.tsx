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
    <div className="mx-auto my-5">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold">New Supply card</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data.slice(0, 6).map((item) => (
          <SupplyCard key={item.id} item={item} />
        ))}
      </div>
      <div className="my-5 text-center">
        <Button variant="ghost" className="bg-gray-300">
          <Link to="/supplies" className="text-lg hover:underline text-fuchsia-500"> See All Products</Link>{" "}
          <ArrowRightCircle className="ms-2" />
        </Button>
      </div>
    </div>
  );
};

export default SupplyCardHome;
