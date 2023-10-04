import { useState } from "react";
import { Cards } from "./Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cards />
    </>
  );
}

export default App;
