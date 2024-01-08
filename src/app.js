// const cors = require("cors")
// const initClientModule = require("./client/module");
// const initReservationModule = require("./reservation/module");

import express from "express";
import sequelize from "./config/db.js";
import { initCarModule } from "./car/module.js";
import configureDI from "./config/DI.js";

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
