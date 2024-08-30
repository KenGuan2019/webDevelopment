import express from "express";

const app = express();
const port = 3000;
/* Define your own middleware
This function must write before .use */
function logger(req, res, next) {
  console.log("Request method: " + req.method);
  console.log("Request URL: " + req.url);
  next();//Don't forget to add this next method, this function should contine on the next thing
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


