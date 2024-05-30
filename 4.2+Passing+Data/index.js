import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let title = "Enter your name below"

app.get("/", (req, res) => {
    res.render("index.ejs", {
        title: title
    });
});

app.post("/submit", (req, res) => {
    let fNameLength = req.body.fName.length;
    let lNameLength = req.body.lName.length;
    let sum = fNameLength + lNameLength;
    title = `There are ${sum} letters in your name`;
    res.render("index.ejs", { title: title });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});