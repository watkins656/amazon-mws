// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var customerOrder = {
  allOrdersByPurchaseDate: function (cb) {
    orm.allOrdersByPurchaseDate("orders", function (res) {
      if(res){
        cb(res);
      }
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("orders", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("orders", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("orders", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = customerOrder;
