// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use process.env.PORT for flexibility, or directly 8080

app.get('/', (req, res) => {
  res.send('Hello from GKE CI/CD! Your app is running!');
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
