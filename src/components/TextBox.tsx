import "./TextBox.css";
const TextBox: React.FC<{ text: string }> = (prop) => {
  return (
    <div className="container">
      <p>
        {prop.text}
      </p>
    </div>
  );
};

export default TextBox;
