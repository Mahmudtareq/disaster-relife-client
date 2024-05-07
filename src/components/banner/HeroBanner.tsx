import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import bgImage from "../../assets/bg-1.webp";
import { Button } from "../ui/button";
import bgImage1 from "../../assets/bg-2.webp";
import bgImage2 from "../../assets/bg-3.webp";

const HeroBanner = () => {
  return (
    <div className="container my-5">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full "
      >
        <CarouselContent className="">
          <CarouselItem>
            <div
              className={` block  bg-white rounded-md bg-cover bg-center p-8 shadow-lg dark:bg-neutral-700`}
              style={{ backgroundImage: `url(${bgImage})`, height: "23rem" }}
            >
              <div className="lg:flex justify-evenly">
                <div className="text-start py-2">
                  <h5 className="mb-2 lg:text-4xl text-xl font-medium leading-tight text-lime-50 dark:text-neutral-50">
                    Digital Blood <br /> Pressure Monitor
                  </h5>
                  <p className="mb-4 text-lg text-white    dark:text-neutral-200">
                    Online Exclusive Packs
                  </p>
                  <Button type="button" className="rounded-full">
                    Buy Now
                  </Button>
                </div>
                <div></div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className={` block  bg-white rounded-md bg-cover bg-center p-8 shadow-lg dark:bg-neutral-700`}
              style={{ backgroundImage: `url(${bgImage1})`, height: "23rem" }}
            >
              <div className="lg:flex justify-evenly">
                <div></div>
                <div className="text-start py-2">
                  <h5 className="mb-2 lg:text-4xl text-xl font-medium leading-tight text-lime-50 dark:text-neutral-50">
                    Microscope <br /> With Clear Vision
                  </h5>
                  <p className="mb-4 text-lg text-white    dark:text-neutral-200">
                    Seasonal collection 20% OFF
                  </p>
                  <Button type="button" className="rounded-full">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className={` block  bg-white rounded-md bg-cover bg-center p-8 shadow-lg dark:bg-neutral-700`}
              style={{ backgroundImage: `url(${bgImage2})`, height: "23rem" }}
            >
              <div className="lg:flex justify-evenly">
                <div></div>
                <div className="text-start py-2">
                  <h5 className="mb-2 lg:text-4xl text-xl font-medium leading-tight text-lime-50 dark:text-neutral-50">
                    Perfect & Precise <br /> Reading Gulcometer
                  </h5>
                  <p className="mb-4 text-lg text-white    dark:text-neutral-200">
                    Starts from $145.00
                  </p>
                  <Button type="button" className="rounded-full">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroBanner;
