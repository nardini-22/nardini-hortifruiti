const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/fruits", cors(), async (req, res, next) => {
  axios
    .get("https://www.fruityvice.com/api/fruit/all")
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      next(err);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})
