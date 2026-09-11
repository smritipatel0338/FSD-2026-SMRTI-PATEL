import http from "http"; // HTTP module from Node.js

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Server": "node.js"
    });

    res.end("hello world");
});

const port = 5005;

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});