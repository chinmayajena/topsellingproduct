const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

//Set initial visits
client.set("visits", 0);

//defining the root endpoint
app.get("/", (req, res) => {
  res.send("It is Up");
});

app.get("/topselling/category/:categoryId", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is: " + visits + 1);
    client.set("visits", parseInt(visits) + 1);
  });
});

//specifying the listening port
app.listen(8081, () => {
  console.log("Listening on port 8081");
});
