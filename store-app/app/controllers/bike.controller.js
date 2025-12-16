const db = require("../models");
const Bike = db.bike;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.serialNumber && !req.body.model && !req.body.category) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const bike = {
    serialNumber: req.body.serialNumber,
    model: req.body.model,
    category: req.body.category,
    condition: req.body.condition,
    isRepairing: req.body.isRepairing,
    purchaseDate: req.body.purchaseDate,
  };

  Bike.create(bike)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to create bike",
      });
    });
};

exports.findAll = (req, res) => {
  Bike.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to create bike",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Bike.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Bike with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Bike with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Bike.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Updated successfully.",
        });
      } else {
        res.send({
          message: `Unable to update bike id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Unable to update bike id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Bike.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Deleted successfully!",
        });
      } else {
        res.send({
          message: `Unable to delete bike id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Unable to update bike id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Bike.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: "All bikes was deleted" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to remove all Bikes.",
      });
    });
};
