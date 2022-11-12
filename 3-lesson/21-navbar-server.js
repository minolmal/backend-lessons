var fs = require("fs");
var http = require("http");

const indexFile = fs.readFileSync("./express-lesson/nav-bar/index.html");
const styleFile = fs.readFileSync("./express-lesson/nav-bar/index.css");
const scriptFile = fs.readFileSync("./express-lesson/nav-bar/index.js");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(indexFile);
      res.end();
    } else if (req.url === "/index.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(styleFile);
      res.end();
    } else if (req.url === "/index.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(scriptFile);
      res.end();
    } else if (req.url === "/news") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1> News </h1> <a href='/'>news</a>");
      res.end();
    } else if (req.url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1> Contact </h1> <a href='/'>contact</a>");
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1> About </h1> <a href='/'>home</a>");
      res.end();
    } else {
      res.writeHead(404);
      res.write("<h1> Page not found </h1>");
      res.end();
    }
  })
  .listen(5000);
