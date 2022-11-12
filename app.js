var fs = require("fs");
var http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      const indexFile = fs.readFileSync('./index.html')
      res.writeHead(200, { "content-type": "text/html" });
      res.write(indexFile);
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1> About </h1>");
      res.end();
    } else {
      res.writeHead(404);
      res.write("<h1> Page not found </h1>");
      res.end();
    }
  })
  .listen(5000);
