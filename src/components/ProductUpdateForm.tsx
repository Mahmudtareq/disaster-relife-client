import { useUpdateSupplyByIdMutation } from "@/redux/api/api";
import { Supply } from "@/types/cardTypes";
import { useForm, SubmitHandler } from "react-hook-form";
export type Inputs = {
  image: string;
  category: string;
  title: string;
  price: number;
  description: string;
};
interface ProductUpdateFormProps {
  supply: Inputs | null; // Assuming Supply is the type of your supply item
  onClose: () => void;
}
const ProductUpdateForm = ({ supply, onClose }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
  const [updateSupplyById] = useUpdateSupplyByIdMutation();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (supply) {
      updateSupplyById({ id: supply.id, data })
        .then((updatedSupply) => {
          console.log("Supply updated successfully:", updatedSupply);
          onClose(); // Close the form after successful update
        })
        .catch((error) => {
          console.error("Failed to update supply:", error);
        });
    }
  };
  return (
    <div>
      <form
        className="lg:max-w-2xl w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lg:flex w-full gap-4">
          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="image"
              className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white"
            >
              Image Link
            </label>
            <input
              type="text"
              id="image"
              defaultValue={supply.image}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="image url"
              {...register("image", { required: true })}
            />
          </div>
          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              defaultValue={supply.category}
              placeholder="add categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("category", { required: true })}
            />
          </div>
        </div>
        <div className="lg:flex w-full gap-4">
          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="title"
              className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              defaultValue={supply.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supply Title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="amount"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              defaultValue={supply.price}
              placeholder="add Amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="w-full gap-">
          <div className="mb-5 w-full">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              defaultValue={supply.description}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Description..."
              {...register("description", { required: true })}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProductUpdateForm;
