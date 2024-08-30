//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

/* Need to get the entire root directory */
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var isPasswordTrue = false;

/* Extract the input from user and store into req */
app.use(bodyParser.urlencoded({extended: true}));

/* Using this function to check if the password is correct or not */
function passwordCheck(req,res, next) {
    console.log(req.body);
 const password = req.body["password"];
 if (password === 'ILoveProgramming'){
    isPasswordTrue = true;
 }
 /* Be sure to add this next() for receiving the request. */
 next();
}

/* Be sure to invoke this function */
app.use(passwordCheck);

app.get("/", (req, res) => {
    /* This means this html would open when the server start */
    res.sendFile(__dirname + "/public/index.html");
  });

  app.post("/check", (req,res)=>{
    if (isPasswordTrue){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        /* This means would go back to the home page */
        res.redirect("/");
    }
    
  })

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });