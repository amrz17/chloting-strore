import { ArrowLeft, ArrowRight } from "lucide-react";
import { checked } from "../assets/icons";
import { review } from "../constant";

export const Review = () => {
  return (
    <section className="bg-white text-black">
      <div className="flex justify-between p-4  ">
        <h2 className="font-IntegralCf text-4xl lg:text-5xl lg:p-6 md:ml-6 xl:ml-8 lg:my-4">
          OUR HAPPY <br className="lg:hidden" /> COSTUMERS
        </h2>
        <div className="flex items-center mr-4 gap-3">
          <button>
            <a>
              <ArrowLeft />
            </a>
          </button>
          <button>
            <a>
              <ArrowRight />
            </a>
          </button>
        </div>
      </div>
      <div className="carousel w-full flex gap-4 mb-8  px-4">
        {review.map((review) => (
          <div
            key={review.name}
            className="carousel-item relative flex flex-col border  w-[358px] h-[186px]
            md:w-[440px] md:h-[240px] px-4 md:p-8 py-6 rounded-xl gap-3 md:gap-5"
          >
            <div className="flex gap-2 ">
              <h3 className="font-SatoshiBold text-xl md:text-2xl">
                {review.name}
              </h3>
              <img src={checked} className="items-center" />
            </div>
            <p className="font-SatoshiRegular md:text-xl">{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
