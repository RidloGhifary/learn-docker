const http = require("http");
require("dotenv").config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello ${process.env.HELLO}\n`);
});

server.listen(8080, "0.0.0.0", () => {
  console.log("Server running at http://0.0.0.0:8080/");
});
