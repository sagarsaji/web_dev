/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import input from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

input.prompt([{
    message: "Enter a URL : ",
    name: "URL"
}, ]).then((answers) => {
    const url = answers.URL;
    let img = qr.image(url);
    img.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("userInput.txt", url, (err) => {
        if (err) throw err;
        console.log('File saved');
    })
}).catch((error) => {
    console.log(error);
});