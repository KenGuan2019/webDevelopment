import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    console.log('<h1>Hello World!</h1>');
    res.send('<h1>Hello World!</h1>');
})

app.get('/about', (req,res) => {
    res.send("<h1>About Me</h1><p>I am Ken</p>")
})

app.get('/contact', (req,res) => {
    res.send("<h1>Contact</h1><p>123-4567</p>")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})