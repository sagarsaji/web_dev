import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data = [];

app.get("/", (req, res) => {
    res.render("index.ejs", { data: data });
});

app.get("/create", (req, res) => {
    res.render("create.ejs", { data: data });
});

app.post("/submit", (req, res) => {
    let blogTitle = req.body.title;
    let blogMessage = req.body.message;

    const blogData = {
        messageTitle: blogTitle,
        messageBody: blogMessage
    };

    data.push(blogData);
    console.log(data);
    res.redirect("/");
});



app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});