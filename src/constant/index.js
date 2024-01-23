import {
  arrowDown,
  casual,
  casualLg,
  checkShirt,
  courageTshirt,
  faddedJeans,
  formal,
  formalLg,
  gym,
  gymLg,
  losseShort,
  party,
  partyLg,
  skinnyJins,
  sleeveTshirt,
  tShirt,
  verticalShirt,
} from "../assets/images";

export const navLink = [
  { href: "/", label: "Shop", img: arrowDown },
  { href: "/onSale", label: "On Sale" },
  { href: "/newArrivals", label: "New Arrivals" },
  { href: "/brands", label: "Brands" },
];

export const saleStat = [
  { number: "200+", desc: "International Brands" },
  { number: "2,000+", desc: "High-Quality Products" },
  { number: "30,000+", desc: "Happy Customers" },
];

export const newArrivals = [
  { img: tShirt, label: "T-shirt with Tape Details", price: "$120" },
  { img: skinnyJins, label: "Skinny Fit Jeans", price: "$240" },
  { img: checkShirt, label: "Checkered Shirt", price: "$180" },
  { img: sleeveTshirt, label: "Sleeve Striped T-shirt", price: "$130" },
];

export const topSellings = [
  { img: verticalShirt, label: "Vertical Striped Shirt", price: "$212" },
  { img: courageTshirt, label: "Courage Graphic T-shirt", price: "$145" },
  { img: losseShort, label: "Loose Fit Bermuda Shorts", price: "$80" },
  { img: faddedJeans, label: "Faded Skinny Jeans", price: "$210" },
];

export const dressStyle = [
  { img: casual, imgLg: casualLg, label: "casual" },
  { img: formal, imgLg: formalLg, label: "formal" },
  { img: party, imgLg: partyLg, label: "party" },
  { img: gym, imgLg: gymLg, label: "gym" },
];
