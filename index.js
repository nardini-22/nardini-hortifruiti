const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const path = require('path')

app.listen(3333);

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/fruits", (req, res) => {
  axios
    .get("https://www.fruityvice.com/api/fruit/all")
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
