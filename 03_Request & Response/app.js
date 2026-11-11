// const { log } = require("console");
const http = require("http");

// function requestListener(req, res){
//   console.log(req);

// }
// http.createServer(requestListener);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1> Complete Node.JS Course</h1></body>");
  res.write("</html>");
  res.end();

  // process.exit(); // Stops event loop
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
