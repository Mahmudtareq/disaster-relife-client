import image1 from "../assets/gallery/poster1.jpeg";
import image2 from "../assets/gallery/poster2.jpeg";
import image3 from "../assets/gallery/poster3.jpeg";
import image11 from "../assets/gallery/poster11.jpg";
import image5 from "../assets/gallery/poster5.jpg";
import image12 from "../assets/gallery/poster12.jpg";
import image8 from "../assets/gallery/poster8.jpg";
import image7 from "../assets/gallery/poster7.jpg";
import image9 from "../assets/gallery/poster9.jpg";
import image10 from "../assets/gallery/poster10.jpg";
import image13 from "../assets/gallery/poster13.jpg";

const ImageGallery = () => {
  return (
    <div className="my-10 lg:px-4">
      <div className="mt-5 mb-7">
        <h2 className="text-2xl font-bold text-center mb-2">
          Health and Medical Supplies Donations Showcase
        </h2>
        <p className="text-justify text-[16px] text-[#666666]">
          In the realm of humanitarian aid, transparency serves as the
          cornerstone of trust. This Image Gallery provides an immersive glimpse
          into the altruistic efforts of health and medical supplies donations,
          fostering a deep sense of transparency. Through a visually captivating
          display, users witness firsthand the impact of their contributions,
          from the provision of vital medical equipment to the delivery of
          essential supplies to those in need. Each photo tells a story of
          compassion and solidarity, reinforcing our commitment to transparency
          in all facets of our humanitarian work
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-2/3 mx-auto">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image11}
              alt="poster 1"
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image5} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image12}
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image9} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image13}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image10}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
