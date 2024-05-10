import ProductUpdateForm from "@/components/ProductUpdateForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  useDeleteSupplyByIdMutation,
  useGetSuppliesQuery,
} from "@/redux/api/api";

import { Edit2Icon, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export type TItems = {
  _id: string;
  title: string;
  category: string;
  price: string;
};

const DashboardSupplies = () => {
  const { data, isLoading } = useGetSuppliesQuery(undefined);
  const [deleteSupply] = useDeleteSupplyByIdMutation();
  const [selectedSupply, setSelectedSupply] = useState(null);

  const handleDelete = async (id: string) => {
    try {
      await deleteSupply(id);
      console.log("Supply deleted successfully");
    } catch (error) {
      console.error("Failed to delete supply:", error);
    }
  };
  const handleEdit = (supply) => {
    setSelectedSupply(supply);
  };

  if (isLoading) {
    return (
      <>
        {" "}
        <div className="flex items-center space-x-4 max-w-4xl mx-auto">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="my-5">
        <div>
          <h2 className="text-center mb-5 text-2xl font-bold">
            All Supplies Lists
          </h2>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl mx-auto">
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item: TItems) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${item._id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    $ {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="secondary"
                                  className="rounded-[8px]"
                                  size="icon"
                                  onClick={() => handleEdit(item)}
                                >
                                  <Edit2Icon className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>
                                    Update Product Details
                                  </DialogTitle>
                                  <DialogDescription>
                                    Make changes to your profile here. Click
                                    save when you're done.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="">
                                  <ProductUpdateForm
                                    supply={selectedSupply}
                                    onClose={() => setSelectedSupply(null)}
                                  />
                                </div>
                                {/* <DialogFooter>
                                  <Button type="submit">Save changes</Button>
                                </DialogFooter> */}
                              </DialogContent>
                            </Dialog>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>Edit</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="destructive"
                              className="rounded-[8px]"
                              size="icon"
                              onClick={() => handleDelete(item._id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>Delete</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <Button>
                        <Link to="/dashboard/create-supply">Add Supply</Link>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupplies;
