const express = require("express");
const { products } = require("./data");

const app = express();

// app.use(express.static('./express-lesson/nav-bar/'))
app.get("/", (req, res) => {
  // res.json([{ name: "minol" }, { name: "sampath" }]);
  // res.json(products)
  res.write('<h1>Home Page</h1><h2><a href="/api/products">Products</a></h2>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:productId", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productId } = req.params;
  const selectedProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!selectedProduct) {
    return res.status(404).send(`Product ${productId} not found`);
  }
  return res.json(selectedProduct);
});
app.get("/api/products/:productId/review/:reviewTitle", (req, res) => {
  // console.log(req.params);
  const { productId, reviewTitle } = req.params;
  console.log(reviewTitle);
  res.send("hello");
});
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let result = [...products];
  if (search) {
    result = result.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    result = result.slice(0, Number(limit));
  }
  if (result.length < 1) {
    return res.status(200).send("not matching results");
    // return res.status(200).json({success:true, data:[]}); use for frontend error handling
    
  }
  // console.log(result);
  res.json(result);
});

app.listen(5000, () => {
  console.log("server: http://localhost:5000");
});
