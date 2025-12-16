module.exports = app => {
  const bike = require("../controllers/bike.controller.js");

  var express = require("express")
  var router = express.Router();

  router.post("/", bike.create);
  router.post("/:id/applyTariff/:idTariff", bike.applyTariff);

  router.get("/", bike.findAll);
  router.get("/:id", bike.findOne);

  router.put("/:id", bike.update);

  router.delete("/:id", bike.delete);
  router.delete("/", bike.deleteAll);

  app.use('/api/bikes', router);
  console.log('router for /api/bikes initialized')
};

