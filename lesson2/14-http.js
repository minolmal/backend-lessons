const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to the first web server");
  }
  if (req.url === "/about") {
    res.end("here is description");
  }
  res.end(`
  <h1>oops!</h1>
  <p>we cannot show that page</p>
  <a href='/' >click here</a>
  `);
});

server.listen(5001);
