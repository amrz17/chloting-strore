import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { company, faq, help, resources } from "../constant";

export const Footer = () => {
  return (
    <footer>
      <div></div>
      <div className="bg-white text-black">
        <div className="ml-4">
          <h2 className="font-IntegralCf text-3xl">SHOP.CO</h2>
          <p className="font-SatoshiRegular">
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

        <div className="grid grid-cols-2 gap-4 mx-auto mt-6 ml-4">
          <div>
            <h3 className="font-SatoshiMedium">COMPANY</h3>
            <ul>
              {company.map((company) => (
                <li key={company.label}>
                  <a href={company.href} className="font-SatoshiRegular">
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-SatoshiMedium">HELP</h3>
            <ul>
              {help.map((help) => (
                <li key={help.label}>
                  <a href={help.href} className="font-SatoshiRegular">
                    {help.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-SatoshiMedium">FAQ</h3>
            <ul>
              {faq.map((faq) => (
                <li key={faq.label}>
                  <a href={faq.href} className="font-SatoshiRegular">
                    {faq.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-SatoshiMedium">RESOURCES</h3>
            <ul>
              {resources.map((resources) => (
                <li key={resources.label}>
                  <a href={resources.href} className="font-SatoshiRegular">
                    {resources.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <p>Shop.co @ 2000-2023 All Right Reserved</p>
          <div></div>
        </div>
      </div>
    </footer>
  );
};
