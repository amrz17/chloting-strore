import { applePay, googlePay, master, payPal, visa } from "../assets/icons";
import {
  arrowDown,
  blackStripedTshirt,
  casual,
  casualLg,
  checkShirt,
  courageTshirt,
  faddedJeans,
  formal,
  formalLg,
  gradientTshirt,
  gym,
  gymLg,
  losseShort,
  party,
  partyLg,
  poloTipping,
  skinnyJins,
  sleeveTshirt,
  tShirt,
  verticalShirt,
} from "../assets/images";
import DropDown from "../components/nav/DropDown";

export const navLink = [
  { to: "/", label: "Shop", img: arrowDown, onClick: DropDown },
  { to: "/newArrivals", label: "New Arrivals", img: "" },
  { to: "/styles", label: "Dress Styles", img: "" },
  { to: "/brands", label: "Brands", img: "" },
];

export const saleStat = [
  { number: "200+", desc: "International Brands" },
  { number: "2,000+", desc: "High-Quality Products" },
  { number: "30,000+", desc: "Happy Customers" },
];

export const newArrivals = [
  { id: 1, img: tShirt, label: "T-shirt with Tape Details", price: "$120" },
  { id: 2, img: skinnyJins, label: "Skinny Fit Jeans", price: "$240" },
  { id: 3, img: checkShirt, label: "Checkered Shirt", price: "$180" },
  { id: 4, img: sleeveTshirt, label: "Sleeve Striped T-shirt", price: "$130" },
];

export const topSellings = [
  { id: 5, img: verticalShirt, label: "Vertical Striped Shirt", price: "$212" },
  {
    id: 6,
    img: courageTshirt,
    label: "Courage Graphic T-shirt",
    price: "$145",
  },
  { id: 7, img: losseShort, label: "Loose Fit Bermuda Shorts", price: "$80" },
  { id: 8, img: faddedJeans, label: "Faded Skinny Jeans", price: "$210" },
];

export const dressStyle = [
  { img: casual, imgLg: casualLg, label: "casual", to: "/casual" },
  { img: formal, imgLg: formalLg, label: "formal", to: "/formal" },
  { img: party, imgLg: partyLg, label: "party", to: "party" },
  { img: gym, imgLg: gymLg, label: "gym", to: "/gym" },
];

export const casualStyle = [
  { img: gradientTshirt, label: "Gradient Graphic T-shirt", price: "$145" },
  { img: poloTipping, label: "Polo with Tipping Details", price: "$180" },
  { img: blackStripedTshirt, label: "Black Striped T-shirt", price: "$120" },
  { img: skinnyJins, label: "Skinny Fit Jeans", price: "$240" },
  { img: checkShirt, label: "Checkered Shirt", price: "$180" },
  { img: sleeveTshirt, label: "Sleeve Striped T-shirt", price: "$130" },
  { img: verticalShirt, label: "Vertical Striped Shirt", price: "$212" },
  { img: courageTshirt, label: "Courage Graphic T-shirt", price: "$145" },
  { img: losseShort, label: "Loose Fit Bermuda Shorts", price: "$80" },
];

export const review = [
  {
    name: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes i received from Shop.co. From casual wear to elegant dresses every piece i've bought has exceeded my expectations"`,
  },
  {
    name: "Alex K.",
    content: `"Finding clothes that align with my personal style used to be a challenge until i discovered Shop.co. The range of option they offer is truly remarkable, catering to a variety of tastes and occasions"`,
  },
  {
    name: "James L.",
    content: `"As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends"`,
  },
  {
    name: "Mooen",
    content: `""As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"`,
  },
];

export const company = [
  { href: "#About", label: "About" },
  { href: "#Features", label: "Features" },
  { href: "#Work", label: "Work" },
  { href: "#Carrier", label: "Carrier" },
];

export const help = [
  { href: "#CustomerSupport", label: "Customer Support" },
  { href: "#DeliveryDetail", label: "Delivery Detail" },
  { href: "#TermsConditions", label: "Terms & Conditions" },
  { href: "#PrivacyPolicy", label: "Privacy Policy" },
];

export const faq = [
  { href: "#Account", label: "Account" },
  { href: "#ManageDeliveries", label: "Manage Deliveries" },
  { href: "#Orders", label: "Orders" },
  { href: "#Payments", label: "Payments" },
];

export const resources = [
  { href: "#FreeEbooks", label: "Free eBooks" },
  { href: "#DevelopmentTutorial", label: "Development Tutorial" },
  { href: "#HowToBlog", label: "How to - Blog" },
  { href: "#YoutubePlaylist", label: "Youtube Playlist" },
];

export const payments = [
  { img: visa, label: "visa" },
  { img: master, label: "master card" },
  { img: payPal, label: "pay pal" },
  { img: applePay, label: "apple pay" },
  { img: googlePay, label: "google pay" },
];
