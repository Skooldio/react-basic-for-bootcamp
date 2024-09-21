// eslint-disable-next-line react/prop-types
const Button = ({ onClick, buttonText }) => {
  return (
    <button className="btn" onClick={onClick}>
      {buttonText}
    </button>
  );
};
export default Button;
