import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  axios
    .get("http://localhost:5000/api/products")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
