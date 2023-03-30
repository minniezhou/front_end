import "./Button.css";
const Button: React.FC<{ name: string; OnClick: () => void }> = (prop) => {
  return (
    <button onClick={prop.OnClick} className="button">
      {prop.name}
    </button>
  );
};

export default Button;
