const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv =require("dotenv")
const userRoute =require("./routes/user")
const authRoute =require("./routes/auth")
const cryptoJs =require("crypto-js")

dotenv.config();

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("DB connencted successfull"))
  .catch((err) => console.log(err));

  app.use(express.json( ))
  app.use("/api/user",userRoute);
  app.use("/api/auth",authRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running !");
});
 