// app.js

const express = require('express');

const app = express();

const port = process.env.PORT || 8080;


app.get('/', (req, res) => {

  res.send('Hello from GKE CI/CD! This is a NEW version deployed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'); // Change this line

});


app.listen(port, () => {

  console.log(`Node.js app listening on port ${port}`);

});
