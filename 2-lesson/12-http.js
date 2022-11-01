const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to the first web server");
    res.end;
    return;
  }
  if (req.url === "/about") {
    res.write("here is description");
    res.end;
    return;
  }
  res.write(`
  <h1>oops!</h1>
  <p>we cannot show that page</p>
  <a href='/' >click here</a>
  `);
  res.end;
  return;
});

server.listen(5001);
