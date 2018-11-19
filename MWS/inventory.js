let dotenv = require("dotenv").config();
var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';
let amazonMws = require('amazon-mws')(accessKey, accessSecret);
let SellerId = process.env.MWS_SELLER_ID;
let mySQLPassword = process.env.MYSQL_PASSWORD;
let MWSAuthToken = process.env.MWS_AUTH_TOKEN;
let inquirer = require("inquirer");
let mysql = require("mysql");
let moment = require('moment');
let _ = require('underscore')
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: mySQLPassword,
    database: "amazon"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

});
let inventory = {
    main: function () {
    },
    fulfillmentInventoryRequest: function () {

        amazonMws.fulfillmentInventory.search({
            'Version': '2010-10-01',
            'Action': 'ListInventorySupply',
            'SellerId': SellerID,
            'MWSAuthToken': MWSAuthToken,
            'MarketplaceId.Id': 'ATVPDKIKX0DER',
            'QueryStartDateTime': new Date(2018, 10, 24)
        }, function (error, response) {
            if (error) {
                console.log('error ', error);
                return;
            }
            console.log('response', response);
        });
    },
    inquirer: function () {
        inquirer
            .prompt([
    // Here we create a basic text prompt.
    {
        type: "list",
        message: "Which SKU would you like?",
        choices: this.SKUsArray,
        name: "SKU"
    },
    {
        type: "list",
        message: "How would you like the results?",
        choices: ["BY DAY", "BY WEEK", "BY MONTH"],
        name: "org"
    },
])
    .then((res) => {
        switch (res.org) {
            case "BY DAY":
                this.salesByDay(res.SKU)
                break;
            case "BY WEEK":
                console.log("By Week"); //TODO:
                break;
            case "BY MONTH":
                console.log("By Month");    //TODO:
                break;

            default:
                break;
        }
    });


    },
salesByDay: function (msku) {
    var query = connection.query(`SELECT
        o.AmazonOrderId,
    o.PurchaseDate,
    i.SellerSKU,
    i.QuantityOrdered
    FROM
    orders o
    LEFT JOIN order_items i ON o.AmazonOrderId = i.AmazonOrderId
    WHERE ?`, { SellerSKU: msku }, (err, results) => {
            let dateArr = [];
            results.forEach(element => {
                let orderQty = element.QuantityOrdered;
                for (i = 0; i < orderQty; i++) {
                    dateArr.push(moment(element.PurchaseDate).format("MM-DD-YYYY"));
                }
            });
            var counts = _.countBy(dateArr);
            console.log(counts);
            return (counts);
        })
},
getAllSellerSKUs: function () {

}
}

inventory.fulfillmentInventoryRequest();

module.exports = inventory;