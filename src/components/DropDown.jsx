export const DropDown = () => {
  return (
    <div
      className="relative -top-52 xl:fixed z-50 text-black
xl:top-16 xl:left-[13rem] 2xl:left-[30rem]"
    >
      <ul
        className="text-2xl p-2 shadow menu dropdown-content bg-white
        font-SatoshiRegular xl:text-base rounded-lg underline xl:no-underline"
      >
        <li>
          <a href="/">Men</a>
        </li>
        <li>
          <a href="/">Women</a>
        </li>
      </ul>
    </div>
  );
};
