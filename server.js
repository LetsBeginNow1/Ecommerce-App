import express from 'express';
import colors from 'colors';
// rest object
const app = express();

// rest api
app.get("/", (req,res) => {
    res.send("<h1>Welcome to eCommerce platform</h1>")
});

// PORT
const PORT=8080;

// listen 

app.listen(PORT, () => {
    console.log(`Server is runnning on ${PORT}.bgCyan.white`);
});