const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('/secret', (request, response) => {
  response.send(express.static(__dirname + '/public/secret/'));
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/pages/404.html');
});

app.listen(port, () => {
  console.log('Node app is running at localhost:' + port);
});
