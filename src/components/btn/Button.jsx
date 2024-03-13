import PropType from "prop-types";

const Button = (prop) => {
  const { type, variant, onClick, children } = prop;
  return (
    <button
      type={type}
      className={`btn font-SatoshiMedium rounded-full ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.prototype = {
  prop: PropType.node,
};

export default Button;
