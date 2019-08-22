const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(express.static(__dirname +'/../client/dist/'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "index.html");
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));