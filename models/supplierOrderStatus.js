// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

let supplierOrderStatus = {
  all: function (cb) {
    orm.all("supplierOrderStatuses", function (res) {
      cb(res);
    });
  },
  allWhere: function (where, cb) {
    orm.allWhere("supplierOrderStatuses", where, function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("supplierOrderStatuses", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("supplierOrderStatuses", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("supplierOrderStatuses", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = supplierOrderStatus;
