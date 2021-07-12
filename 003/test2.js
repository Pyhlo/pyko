const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.json(req.headers)
})

app.get("/date", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})