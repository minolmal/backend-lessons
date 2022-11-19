import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardList from "./components/CardList";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className=""
      style={{ marginTop: "10px" }}>
      <h1>Products</h1>
      <CardList products={data} />
    </div>
  );
}

export default App;
