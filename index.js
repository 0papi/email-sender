const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000;
const sendMail = require("./utils/sendMail");

const emailSender = async () => {
  await sendMail(
    "Test Mail",
    "You are receiving this as part of some elaborate plan"
  );
};

emailSender();
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
