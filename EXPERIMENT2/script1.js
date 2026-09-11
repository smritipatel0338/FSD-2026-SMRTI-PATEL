import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

    fs.readFile("image.png", (err, data) => {

        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            res.end("Image not found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "image/png"
        });

        res.end(data);
    });
});

const port = 5006;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});