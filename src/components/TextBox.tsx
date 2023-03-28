import "./TextBox.css";
const TextBox: React.FC<{ text: string }> = (prop) => {
  return (
    <div className="container">
      <p
        style={{
          color: "gray",
          fontSize: "12",
          textAlign: "left",
          verticalAlign: "middle",
        }}
      >
        {prop.text}
      </p>
    </div>
  );
};

export default TextBox;
