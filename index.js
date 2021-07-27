const express = require("express");
const { getValue, setValue } = require("./redis-client");
const app = express();

//Set initial visits

app.get("/", (req, res) => {
  res.send("It is Up");
});

app.get("/topselling/category/:categoryId", async (req, res) => {
  const message = await getValue("visits").catch((err) => {
    if (err) console.error(err);
  });

  //console.log("called");
  res.send({
    status: 200,
    message: message,
  });
});

//specifying the listening port
app.listen(8081, async () => {
  console.log("Listening on port 8081");
});
