// const { log } = require("console");
const http = require("http");

// function requestListener(req, res){
//   console.log(req);

// }
// http.createServer(requestListener);

const server = http.createServer( (req, res) => {

  console.log(req.url, req.method, req.headers);

  // process.exit(); // Stops event loop
});

const PORT = 3001;

server.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
  
});