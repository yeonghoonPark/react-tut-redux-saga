import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "IPhone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  const handleClick = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className='App'>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  );
}

export default App;
