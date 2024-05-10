import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetSupplyByIdQuery } from "@/redux/api/api";

import { useParams } from "react-router-dom";

const CardDetailsPage = () => {
  const params = useParams<{ id?: string }>();
  const {
    data: singleItem,
    isLoading,
    isError,
  } = useGetSupplyByIdQuery(params.id);
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error occurred. Please try again later.</div>;
  return (
    <div className="container max-w-screen-xl mx-auto my-5">
      {singleItem && (
        <>
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-6 col-span-12">
              <div className="">
                <img
                  className="w-full rounded-t-lg"
                  src={singleItem.image}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {singleItem.title}
              </h5>
              <h5 className="mb-2 text-xl font-[600] tracking-tight text-gray-900 dark:text-white">
                Category : {singleItem.category}
              </h5>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  $ {singleItem.price}
                </span>
                <span className="line-through mt-2 font-semibold"> $1.2 </span>
                <Badge className=" text-sm font-mono text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  OFF
                </Badge>
              </div>
              <h2 className="text-xl font-[600] mb-3">Product Description</h2>
              <p className="text-justify">{singleItem.description}</p>
              <div className="my-8 px-5">
                <Button className=" w-full text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm py-3 text-center me-2 mb-2">
                  Donet Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetailsPage;
