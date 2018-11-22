var express = require('express');
var router = express.Router();
var exportedConfig = require('../db');
const { config, savedData } = exportedConfig;
const saving = require('../saving/configuration.js');
const { Configuration } = saving;

router.get('/mockServer', function (req, res, next) {
  var data = config.getData("/");
  res.send(data)
})

router.get('/mockServer/data', function (req, res, next) {
  var data = savedData.getData("/");
  res.send(data)
})

router.post('/mockServer', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  try {
    Configuration.saveRoute(req, res);
  } catch (e) {
    console.log(e)
  }
})

router.delete('/mockServer', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  if (req.query.groupId) {
    try {
      Configuration.deleteRoute(req, res);
    } catch (e) {
      console.log(e)
    }
  } else {
    config.delete("/");
    savedData.delete("/")
    res.send({ message: 'Data deleted' })
  }
})

module.exports = router;
