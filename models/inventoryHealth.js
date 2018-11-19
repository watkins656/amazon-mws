// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var inventoryHealth = {
  all: function (cb) {
    orm.inventoryHealth("inventory_health", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("inventory_health", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("inventory_health", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("inventory_health", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = inventoryHealth;
