import express from 'express';
import open from 'open';
import path from 'path';
import compression from 'compression';

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {id: 1, firstName: "Bob", lastName: "Smith", email: "bob@mail.com"},
    {id: 2, firstName: "Anna", lastName: "Smith", email: "anna@mail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
