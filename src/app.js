// const express = require("express");
// const cors = require("cors")
// const sequelize = require("./config/db");
// const initCarModule = require("./car/module");
// const initClientModule = require("./client/module");
// const initReservationModule = require("./reservation/module");
// const configureDI = require("./config/DI");

import express from "express";
import sequelize from "./config/db";
import initCarModule from "./car/module";
import configureDI from "./config/DI";

const app = express();
app.use(express.json());


// const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: 'GET,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));

const diContainer = configureDI();

initCarModule(app, diContainer);
// initClientModule(app);
// initReservationModule(app);


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
