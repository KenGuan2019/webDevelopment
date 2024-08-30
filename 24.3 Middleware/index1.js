import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
/* This line means getting the root directory */
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

/* Using body Middleware can store the input from user inside the request(req) 
For example, req has data when the user give some input */
app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req,res)=>{
  console.log(req.body);
})

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  /* This means this html would open when the server start */
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
