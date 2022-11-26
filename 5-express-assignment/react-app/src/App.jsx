import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardList from "./components/CardList";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [data, setData] = useState([]);
  const [isShowProducts, setIsShowProducts] = useState(true);
  const [selectProduct, setSelectProduct] = useState(null);

  useEffect(() => {
    if (isShowProducts) {
      axios
        .get("http://localhost:5000/api/products")
        .then((response) => {
          setData(response.data);
          console.log("Products data: ");
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div
      className="ui segment"
      style={{ marginTop: "10px" }}>
      <a
        href="/"
        className="ui top header">
        <h2>Products</h2>
      </a>
      <div className="ui hidden divider" />
      <form className="ui form">
        <div className="six wide field centered">
          <div className="ui input">
            <input
              type="text"
              placeholder="Search ..."
            />
          </div>
        </div>
      </form>
      <div className="ui hidden divider" />
      {isShowProducts ? (
        <CardList
          products={data}
          showProduct={setSelectProduct}
        />
      ) : (
        <SingleProduct />
      )}
    </div>
  );
}

export default App;
