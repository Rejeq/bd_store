const db = require("../models");
const Tariff = db.tariff;
const Bike = db.bike;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

exports.create = (req, res) => {
  if (!req.body.serialNumber && !req.body.model && !req.body.category) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const tariff = {
    category: req.body.category,
    pricePerHour: req.body.pricePerHour,
    effectiveDate: req.body.effectiveDate,
  };

  Tariff.create(tariff)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to create tariff",
      });
    });
};

exports.findAll = (req, res) => {
  Tariff.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to create tariff",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tariff.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tariff with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tariff with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tariff.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Updated successfully.",
        });
      } else {
        res.send({
          message: `Unable to update tariff id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Unable to update tariff id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tariff.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Deleted successfully!",
        });
      } else {
        res.send({
          message: `Unable to delete tariff id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Unable to update tariff id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Tariff.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: "All tariffs was deleted" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unable to remove all tariffs.",
      });
    });
};

exports.findAllBikes = (req, res) => {
    const tariffId = req.params.id;

    db.sequelize.query('SELECT b.* FROM bike AS b LEFT JOIN tariff_bike AS tb ON tb.id_bike = b.id WHERE tb.id_tariff = :id', {
        model: Bike,
        mapToModel: true,
        replacements: {id: tariffId},
        type: QueryTypes.SELECT,
    })
    .then(result => {
        console.log(JSON.stringify(result))
        res.send(result);
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while getting all bikes."
          });
    });
};
