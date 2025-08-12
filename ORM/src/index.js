const express = require("express");
const app = express();
const { serverConfig } = require("./config");
const apiroutes = require("./routes");

app.use("/api", apiroutes);

app.listen(serverConfig.PORT, (req, res) => {
  console.log("hey the app is up and running at the port" + serverConfig.PORT);
});
