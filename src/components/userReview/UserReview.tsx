
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ReviewCard from "./ReviewCard";

const UserReview = () => {
  return (
    <div className="container mx-auto">
      <Carousel className="">
        <CarouselContent className="ml-5 w-full">
          <CarouselItem className="pl-1  ">
            <div className="p-1 w-1/3">
              <ReviewCard />
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1  ">
            <div className="p-1 w-1/3">
              <ReviewCard />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default UserReview;
