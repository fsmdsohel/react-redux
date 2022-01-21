import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{counter}</h1>
      {isLogged ? <h1>hello</h1> : ""}
    </div>
  );
}

export default App;
