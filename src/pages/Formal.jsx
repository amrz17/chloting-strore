import { Link } from "react-router-dom";

export const Formal = () => {
  return (
    <section
      className="flex flex-col w-full 
      pt-16 lg:pt-24"
    >
      <div
        className="text-lg breadcrumbs font-SatoshiRegular 
        text-black p-4"
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Formal</a>
          </li>
        </ul>
      </div>
      <div></div>
      <hr />
      <div className="join flex gap-6 w-full justify-center items-center py-2 text-black">
        <button className="join-item btn btn-outline w-[90px] text-black">
          Previous
        </button>
        <button className="join-item ">1</button>
        <button className="join-item ">2</button>
        <button className="join-item ">...</button>
        <button className="join-item ">9</button>
        <button className="join-item ">10</button>
        <button className="join-item btn btn-outline w-[90px] text-black">
          Next
        </button>
      </div>
    </section>
  );
};
