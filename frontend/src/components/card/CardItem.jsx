import PropType from "prop-types";

const CardItem = (prop) => {
  const { children } = prop;
  return (
    <div className="carousel carousel-center bg-white ml-4  p-4 space-x-4 rounded-box">
      <div className="carousel-item gap-6 flex lg:mx-auto">{children}</div>
    </div>
  );
};

CardItem.prototype = {
  prop: PropType.node,
};

export default CardItem;
