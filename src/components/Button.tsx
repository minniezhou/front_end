import "./Button.css"
const Button: React.FC<{name:string}> = (prop) => {
    return (
        <button className="button">{prop.name}</button>
    );
  };
  
  export default Button;