module.exports = (app) => {
  const bike = require("../controllers/bike.controller.js");

  var express = require("express");
  var router = express.Router();

  /**
   * @swagger
   * components:
   *   schemas:
   *     Bike:
   *       type: object
   *       properties:
   *         serialNumber:
   *           type: integer
   *           example: A123BC
   *         model:
   *           type: string
   *           example: The bike model
   *         category:
   *           type: string
   *           example: Road | Mountain
   *         condition:
   *           type: string
   *           example: good | bad
   *         isRepairing:
   *           type: boolean
   *           example: true
   *         purchaseDate:
   *            type: date
   *            example: null
   */

  /**
   * @swagger
   * /api/bikes:
   *   post:
   *     summary: Create new bike
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Bike'
   *     responses:
   *       201:
   *         description: Bike created
   *
   */
  router.post("/", bike.create);

  /**
   * @swagger
   * /api/bikes/{id}/applyTariff/{idTariff}:
   *   post:
   *     summary: Apply current bike to specific tariff
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *           format: int64
   *         description: The Bike ID
   *       - in: path
   *         name: idTariff
   *         required: true
   *         schema:
   *           type: integer
   *           format: int64
   *         description: The Tariff ID to which bike is applied
   *     responses:
   *       201:
   *         description: Bike applied to tariff
   *
   */
  router.post("/:id/applyTariff/:idTariff", bike.applyTariff);

  /**
   * @swagger
   * /api/bikes:
   *   get:
   *     summary: Retrieve a list of all bikes
   *     responses:
   *       200:
   *         description: A list of bikes
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Bike'
   *
   */
  router.get("/", bike.findAll);
  router.get("/:id", bike.findOne);

  router.put("/:id", bike.update);

  router.delete("/:id", bike.delete);
  router.delete("/", bike.deleteAll);

  app.use('/api/bikes', router);
  console.log('router for /api/bikes initialized')
};

