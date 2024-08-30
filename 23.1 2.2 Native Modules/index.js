const fs = require("fs");

/* write file */
// fs.writeFile("message.txt", "Hello from Node!", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

/* read file */
fs.readFile("message.txt", "utf-8",(err,data) => {
if (err) throw err;
console.log(data);
});