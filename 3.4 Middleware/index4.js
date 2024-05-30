import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log("Request message : ", req.body);
    console.log("Request method : ", req.method);
    console.log("Request URL : ", req.url);
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

const __dirname = dirname(fileURLToPath(
    import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is :</h1><br><h1>${req.body.street} ${req.body.pet}</h1>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});