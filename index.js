const express = require('express');
const csv = require('express-csv');
const app = express();
const fs = require('fs');
const port = 3000;
const router = express.Router();

function csvHandler(req, res) {
  const fileListData = fs.readFileSync('data/abbey_road.txt', 'utf-8').toString().split('\n');
  let rowsList = [];
  fileListData.forEach(el => {
    const arrayLine = el.split(/:\s|-/gm);
    rowsList.push({
      track_number: arrayLine[0],
      track_name: arrayLine[1],
      track_length: arrayLine[2]
    });
  });
  if (req.query.sort) {
    rowsList = sortCsvRows(req.query.sort, rowsList);
  }
  rowsList = [{ track_number: 'Track #', track_name: 'Track Name', track_length: 'Track Length' }, ...rowsList];
  res.csv(rowsList, { 'Content-Type': 'text/csv' }, 200);
  res.end();
}

function sortCsvRows(sortValue, rows) {
  switch (sortValue) {
    case '1':
      return rows;
    case '2':
      return rows.sort((a, b) => a.track_name.localeCompare(b.track_name));
    case '3':
      return rows.sort((a, b) => a.track_length.localeCompare(b.track_length));
    default:
      return [];
  }
}

app.get('/', (req, res) => res.send('Hello World!'));

router.get('/abbey_road', csvHandler);

app.use('/', router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
