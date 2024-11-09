// server.js

const http = require('http');

// Define the port the server will listen on
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
