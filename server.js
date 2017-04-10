
const express = require('express');
const app = express();

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('public/css/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
