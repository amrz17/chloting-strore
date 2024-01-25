import { Facebook, Github, Instagram, Mail, Twitter } from "lucide-react";
import { company, faq, help, payments, resources } from "../constant";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex justify-center bg-white py-8">
        <div
          className="flex flex-col md:justify-between md:flex-row w-[358px] md:items-center 
          lg:h-[180px] md:w-full bg-black gap-3 rounded-xl md:rounded-2xl p-6 md:mx-8"
        >
          <h1 className="font-IntegralCf text-white text-4xl lg:text-5xl">
            STAY UPTO DATE ABOUT <br className="hidden md:flex" /> OUR LATEST
            OFFERS
          </h1>
          <div className="flex flex-col gap-2">
            <div
              className="flex w-full rounded-full items-center
          bg-white"
            >
              <button type="submit" className="p-3">
                <Mail />
              </button>
              <input
                type="text"
                placeholder="Enter your email address"
                className="font-SatoshiRegular bg-white p-3 w-full 
            rounded-r-full hover:border-black"
              />
            </div>
            <button
              type="button"
              className="btn hover:text-white hover:border-white text-black w-full bg-white rounded-full"
            >
              Subscribe to Newslatter
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-1 text-black md:flex 
        w-full pt-6 lg:gap-8"
      >
        <div className="flex flex-col w-[380px] ml-4 gap-2 md:pt-5 ">
          <h2 className="font-IntegralCf text-3xl">SHOP.CO</h2>
          <p className="font-SatoshiRegular text-gray-500">
            We have clothes that suits your style and <br />
            which you&apos;re proud to wear. From <br /> women to men.
          </p>
          <div className="flex gap-2">
            <button>
              <a>
                <Twitter className="border rounded-full w-8 h-8 p-1 bg-white text-black" />
              </a>
            </button>
            <button>
              <a>
                <Facebook className="border rounded-full w-8 h-8 p-1 bg-black text-white" />
              </a>
            </button>
            <button>
              <a>
                <Instagram className="border rounded-full w-8 h-8 p-1" />
              </a>
            </button>
            <button>
              <a>
                <Github className="border rounded-full w-8 h-8 p-1" />
              </a>
            </button>
          </div>
        </div>
        <div
          className="grid grid-cols-2 lg:flex  md:justify-between w-full gap-4 
          mt-6 mx-4 pb-10"
        >
          <div className="flex flex-col lg:gap-y-2">
            <h3 className="font-SatoshiMedium text-lg">COMPANY</h3>
            <ul>
              {company.map((company) => (
                <li key={company.label}>
                  <a
                    href={company.href}
                    className="font-SatoshiRegular text-gray-500"
                  >
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:gap-y-2">
            <h3 className="font-SatoshiMedium text-lg">HELP</h3>
            <ul>
              {help.map((help) => (
                <li key={help.label}>
                  <a
                    href={help.href}
                    className="font-SatoshiRegular text-gray-500"
                  >
                    {help.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:gap-y-2">
            <h3 className="font-SatoshiMedium text-lg">FAQ</h3>
            <ul>
              {faq.map((faq) => (
                <li key={faq.label}>
                  <a
                    href={faq.href}
                    className="font-SatoshiRegular text-gray-500"
                  >
                    {faq.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:gap-y-2">
            <h3 className="font-SatoshiMedium text-lg">RESOURCES</h3>
            <ul>
              {resources.map((resources) => (
                <li key={resources.label}>
                  <a
                    href={resources.href}
                    className="font-SatoshiRegular text-gray-500"
                  >
                    {resources.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </div>

      <div className="flex bg-gray-1 flex-col justify-center items-center pt-4 pb-12">
        <p className="font-SatoshiRegular">
          Shop.co &#169; 2000-2023 All Right Reserved
        </p>
        <div className="flex">
          {payments.map((pay) => (
            <img key={pay.label} src={pay.img} />
          ))}
        </div>
      </div>
    </footer>
  );
};
