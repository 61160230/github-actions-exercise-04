const express = require('express')
const port = process.env.port || 8080
const app = express()
const { exec } = require('child_process');


app.get('/', (req, res) => {
    var yourscript = exec('./entrypoint.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
})

app.listen(port, () => {
    console.log('The app is up and running!')
})
module.exports = app