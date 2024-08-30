import express from 'express'
const app = express();
const port = 3000

/* Using GET request and print Hello World on the main page. / means root or home page */
app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})