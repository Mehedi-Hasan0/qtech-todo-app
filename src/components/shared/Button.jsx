const Button = ({ name, style }) => {
  return (
    <button className={`py-1 rounded text-white font-medium ${style}`}>
      {name}
    </button>
  );
};

export default Button;
