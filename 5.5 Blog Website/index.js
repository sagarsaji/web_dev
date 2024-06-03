import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


let data = [];


app.get("/", (req, res) => {
    const date = new Date();
    res.render("index.ejs", {
        currentDate: date.toDateString(),
        index: data.indexOf(req.body),
        data: data
    });
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/submit", (req, res) => {
    data.push(req.body);
    res.redirect("/");
});


app.get("/update", (req, res) => {
    const index = req.query.index;
    const item = JSON.parse(decodeURIComponent(req.query.item));
    res.render("update.ejs", {
        myIndex: index,
        myItems: item
    });
});

app.post("/submitUpdate", (req, res) => {

    const items = {
        name: req.body.name,
        title: req.body.title,
        description: req.body.description
    }

    data[req.body.index] = items;
    res.redirect("/");

});

app.delete("/delete/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (!Number.isNaN(index) && index >= 0 && index < data.length) {
        data.splice(index, 1);
        res.status(200).send("Item deleted successfully");
    } else {
        res.status(400).send("Invalid index or out of bounds");
    }
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});