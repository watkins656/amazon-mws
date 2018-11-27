
var express = require("express");

var router = express.Router();

let dotenv = require('dotenv').config({ path: __dirname + '/.env' })

const Dustin = process.env.DUSTIN;
const Megan = process.env.MEGAN;
// Import the model (customerOrder.js) to use its database functions.
let db=require('../modelsSequelize');
var supplierOrderStatus = require("../modelsSequelize/supplier_order_status.js");
var customerOrder = require("../models/customerOrders.js");
var customerOrderItem = require("../models/customerOrderItems.js");
var inventoryHealth = require("../models/inventoryHealth.js");
var overstock = require("../models/overstock.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  customerOrder.allOrdersByPurchaseDate(function (data) {
    let hbsObject={};
    if(data){

     hbsObject = {
      customerOrders: data
    };
  }
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.get("/supplierOrderStatus", function (req, res) {
    // console.log(hbsObject);
    db.supplierOrderStatus.findAll({}).then(function (data) {
      let hbsObject={};
      if(data){
  
       hbsObject = {
        supplierOrders: data
      };
    }
      // console.log(hbsObject);
      
      res.render("supplierOrderStatus", hbsObject);
    });
  });
router.get("/supplierOrderStatus/update/:id", function (req, res) {
    // console.log(hbsObject);
    db.supplierOrderStatus.findAll({where:{id:req.params.id}}).then(function (data) {
      let hbsObject={};
      if(data){
  
       hbsObject = {
        supplierOrders: data
      };
    }
      // console.log(hbsObject);
      
      res.render("supplierOrderStatusUpdate", hbsObject);
    });
  });

router.get("/landing/:uid", function (req, res) {
  customerOrder.allOrdersByPurchaseDate(function (data) {
    let hbsObject={};
    if(data){

     hbsObject = {
        customerOrders: data
      };
      
    }
      let uid = (req.params.uid);
    // console.log(hbsObject);
    if (uid === Dustin || uid === Megan|| uid === Lenora) {
      console.log("correct user");
      res.render("landing", hbsObject);
    }
    else{
      res.end(`No Way Jose`)
    }

  });
});

router.get("/overstock", function (req, res) {
  overstock.all(function (data) {
    var hbsObject = {
      items: data
    };
    // console.log(hbsObject);
    res.render("overstock", hbsObject);
  });
});

router.get("/inventoryHealth", function (req, res) {
  inventoryHealth.all(function (data) {
    var hbsObject = {
      SKUs: data
    };
    // console.log(hbsObject);
    res.render("inventoryHealth", hbsObject);
  });
});

router.get("/customerOrders", function (req, res) {
  customerOrder.allOrdersByPurchaseDate(function (data) {
    var hbsObject = {
      customerOrders: data
    };
    // console.log(hbsObject);
    res.render("customerOrders", hbsObject);
  });
});

router.get("/createOrder", function (req, res) {
  customerOrder.allOrdersByPurchaseDate(function (data) {
    var hbsObject = {
      customerOrders: data
    };
    // console.log(hbsObject);
    res.render("createOrder", hbsObject);
  });
});
router.get("/addProductsToOrder", function (req, res) {
  overstock.all(function (data) {
    var hbsObject = {
      customerOrders: data
    };
    // console.log(hbsObject);
    res.render("addProductsToOrder", hbsObject);
  });
});

router.get("/customerOrderItems", function (req, res) {

  customerOrderItem.all(function (data) {
    var hbsObject = {
      customerOrderItems: data
    };
    console.log(hbsObject);
    res.render("customerOrderItems", hbsObject);
  });
});

router.post("/api/customerOrders", function (req, res) {
  customerOrder.create([
    "name", "sleepy"
  ], [
      req.body.name, req.body.sleepy
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});
router.post("/api/supplierOrderStatus", function (req, res) {
  let newOrder = req.body;
  db.supplierOrderStatus.create(newOrder).then(function (result) {
    res.json({ id: result.insertId });
    res.json(result);
  });
});
router.put("/api/supplierOrderStatus/update/:id", function (req, res) {
  let newOrder = req.body;
  let id = req.params.id;
  db.supplierOrderStatus.update(newOrder,{
    where:{id:id}
  }).then(function (result) {
    res.json({ id: result.insertId });
    res.json(result);
  });
});

router.put("/api/customerOrders/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  customerOrder.update({
    sleepy: req.body.sleepy
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.delete("/api/customerOrders/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  customerOrder.delete(condition, function (result) {
    console.log(result);
    console.log(result.affectedRows);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
