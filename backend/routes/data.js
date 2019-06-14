var express = require('express');
var router = express.Router();
var fs = require('fs-extra');
var debug = require('debug')('test-server');

router.get('/movies', function(req, res, next) {
  let filteredData = [];
  res.setHeader('Content-Type', 'application/json');
  fs.readFile('./data-storage/movies.json', 'utf8', function(error, data) {
    JSON.parse(data).forEach(element => {
      if (
        element.title.toLowerCase() === req.query.title.toLowerCase() ||
        element.type.toLowerCase() === req.query.type.toLowerCase() ||
        element.plot.toLowerCase() === req.query.plot.toLowerCase() ||
        Number(element.year) === Number(req.query.year) ||
        element.actor.toLowerCase() === req.query.actor.toLowerCase()
      ) {
        filteredData.push(element);
      }
    });

    res.send(filteredData);
  });

  fs.readFile('./data-storage/requests.json', 'utf8', function(error, data) {
    let requestData = JSON.parse(data);
    requestData.unshift(req.query);
    console.log(requestData);

    fs.writeFileSync(
      './data-storage/requests.json',
      JSON.stringify(requestData),
      'utf8'
    );
  });
});

router.get('/requests', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile('./data-storage/requests.json', 'utf8', function(error, data) {
    const latestTenElements = JSON.parse(data).slice(0, 9);
    res.send(latestTenElements);
  });
});

module.exports = router;
