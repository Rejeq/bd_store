module.exports = app => {
  const tariff = require("../controllers/tariff.controller.js");

  var express = require("express")
  var router = express.Router();

  router.post("/", tariff.create);

  router.get("/", tariff.findAll);
  router.get("/:id", tariff.findOne);
  router.get("/:id/bikes", tariff.findAllBikes);

  router.put("/:id", tariff.update);

  router.delete("/:id", tariff.delete);
  router.delete("/", tariff.deleteAll);

  app.use('/api/tariffs', router);
  console.log('router for /api/tariffs initialized')
};

