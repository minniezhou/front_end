import "./TextBox.css";
const TextBox: React.FC<{ text: string }> = (prop) => {
  return (
    <div className="container">
      <pre>{prop.text}</pre>
    </div>
  );
};

export default TextBox;
