const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hi folks, server is running fine").end();
});
//we have to start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("App is running on port" + port);
  console.log("Use ctrl+C to exit");
});
