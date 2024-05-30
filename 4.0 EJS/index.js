import express from 'express';

const app = express();

let type = "a weekday";
let adv = "its time to work hard";

const day = new Date();
let dayy = day.getDay();

if (dayy == 0 || day == 6) {
    type = "the weekend";
    adv = "its time to enjoy";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});


app.listen(3000, () => {
    console.log('Listening at 3000');
});