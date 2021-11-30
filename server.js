const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '/build', 'index.html');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/_TITLE_/g, 'StartupInvest')
      .replace(/__DESCRIPTION__/g, 'Home Paghe Desc');

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(PORT, () => {
  console.log('react server is listening to' + PORT);
});
