const express = require("express");
const sequelize = require("./config/db");
const initCarModule = require("./car/module");
const initClientModule = require("./client/module");

const app = express();
app.use(express.json());

initCarModule(app);
initClientModule(app);

sequelize
  .sync()
  .then(() => {
    console.log("The table for the Models was just (re)created!");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listen in http://localhost:${PORT}`);
});
