const { readFileSync } = require("fs");
const http = require("http");
const func = require("./calculations");
const numbers = require("./numbers");

const name = readFileSync("./assets/name.txt", "utf-8");

const tempAdd = func.addition(numbers.num1, numbers.num2);
const resultAdd = func.addition(tempAdd, numbers.num3);

const tempMult = func.multiplication(numbers.num1, numbers.num2);
const resultMult = func.multiplication(tempMult, numbers.num3);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
    <h1>Welcome to Home</h1>
    <p>click here for results.</p>
    <a href='/mydetails'>Show results</a>
    `);
    res.end();
    return;
  }
  if (req.url === "/mydetails") {
    res.write(`
    <h1>My Details</h1>
    <p>Here are the results requested.</p>
    <p>${name}</p>
    <p><span>Numbers: ${numbers.num1}, ${numbers.num2}, ${numbers.num3}</span></p>
    <p>Addition: ${resultAdd}</p>
    <p>Multiplication: ${resultMult}</p>
    <a href='/'>Back to Home</a>
    `);
    res.end();
    return;
  }
  res.write(`
    <h1>Oops!</h1>
    <p>we cannot find page you requested.</p>
    <a href='/'>Back to Home</a>
    `);
  res.end();
  return;
});

server.listen(5000);
