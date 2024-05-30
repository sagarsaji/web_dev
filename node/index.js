const { error } = require("console");
const fs = require("fs");
// fs.writeFile("message.txt", "Hello World", (error) => {
//     if (error) {
//         console.log("error occured");
//     }
//     console.log("message saved");
// })


fs.readFile("message.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})