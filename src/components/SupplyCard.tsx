import { Supply } from "@/types/cardTypes";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SupplyCard = ({ item }: { item: Supply }) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="w-full rounded-t-lg h-[250px]"
            src={item.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
          </a>
          <p className="mb-3 text-md font-semibold text-gray-700 dark:text-gray-400">
            Category: {item.category}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              $ {item.price}
            </span>
            <Link
              to={`details/${item._id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Detail
              <ArrowRight className="ms-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyCard;
