const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const htmlFilePath = path.join(__dirname, "public/index.html");
    fs.readFile(htmlFilePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - HTML Not Found</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else if (req.url === "/about.html") {
    const htmlFilePath = path.join(__dirname, "public/about.html");
    fs.readFile(htmlFilePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - HTML Not Found</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else if (req.url === "/app.js") {
    const jsFilePath = path.join(__dirname, "public/app.js");
    fs.readFile(jsFilePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/js" });
        res.end("<h1>404 - app.js Not Found</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/js" });
        res.end(content);
      }
    });
  } else if (req.url === "/styles.css") {
    const cssFilePath = path.join(__dirname, "public/styles.css");
    fs.readFile(cssFilePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/css" });
        res.end("<h1>404 - CSS Not Found</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(content);
      }
    });
  } else if (req.url === "/img/wave.gif") {
    const imgFilePath = path.join(__dirname, "public/img/wave.gif");
    fs.readFile(imgFilePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "image/gif" });
        res.end("<h1>404 - CSS Not Found</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "image/gif" });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Not Found</h1>");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});