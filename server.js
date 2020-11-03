const express = require("express");
const axios = require("axios");

const moment = require("moment");

const app = express();

app.get("/", async (req, res) => {
  const response = await axios.get("http://localhost:3001/fieis");

  var arr1 = [];

  response.data.docs.map((arr) => {
    if (moment(arr.createdAt).month() === moment(Date().now).month()) {
      arr1.push(arr._id); // copy array
    }
  });

  arr1.sort(function () {
    return 0.5 - Math.random();
  }); // shuffle arrays

  console.log(arr1.length);

  for (i = 0; i < 3; i++) {
    var ids = arr1.pop(); // get the last value of arr1

    console.log(ids);
  }

  res.send("ok");
});

app.listen(3003);
