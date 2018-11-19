let dotenv = require("dotenv").config();
var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';
let amazonMws = require('amazon-mws')(accessKey, accessSecret);
let MWSAuthToken = process.env.MWS_AUTH_TOKEN;
let mySQLPassword = process.env.MYSQL_PASSWORD;

var mysql = require("mysql");
let connection = require('../config/connection');

getOrders();
let orderItems = {
    
 SellerId: process.env.MWS_SELLER_ID,
    AmazonOrderId: '',
    request: function (id) {
        this.AmazonOrderId = id;
        amazonMws.orders.search({
            'Version': '2013-09-01',
            'Action': 'ListOrderItems',
            'SellerId': this.SellerId,
            'MWSAuthToken': 'amzn.mws.a2ab3b35-11d4-be30-d53d-8cc985b091ae',
            'AmazonOrderId': this.AmazonOrderId
        }, (error, response) => {
            if (error) {
                console.log('error ', error);
                return;
            }
            let orderItems = response.OrderItems.OrderItem
            orderItems.AmazonOrderId = id;
            insertOrderItem(orderItems);
        });
    }

}
function getOrders() {
    var query = connection.query("SELECT AmazonOrderId FROM orders", function (err, results) {
        results.forEach(element => {
            let q = connection.query("SELECT AmazonOrderId FROM order_items WHERE ?", { AmazonOrderId: element.AmazonOrderId },
                (err, response) => {
                    if (response.length == 0) {
                        orderItems.request(element.AmazonOrderId);
                    }
                });
        });


    });
}
function insertOrderItems(orders) {
    orders.forEach(order => {
        insertOrderItem(order);
    });
}
function insertOrderItem(order) {
    console.log("Inserting a new order item...\n");
    var query = connection.query(
        "INSERT INTO order_items SET ?",
        {
            AmazonOrderId: order.AmazonOrderId,
            QuantityOrdered: order.QuantityOrdered,
            Title: order.Title,
            PromotionDiscount: order.PromotionDiscount,
            IsGift: order.IsGift,
            ASIN: order.ASIN,
            SellerSKU: order.SellerSKU,
            OrderItemId: order.OrderItemId,
            IsTransparency: order.IsTransparency,
            ProductInfo: order.ProductInfo,
            QuantityShipped: order.QuantityShipped,
            ItemPrice: order.ItemPrice,
            ItemTax: order.ItemTax,
            PromotionDiscountTax: order.PromotionDiscountTax
        },
        function (err, res) {
            console.log(res.affectedRows + " order inserted!\n");
            // Call updateProduct AFTER the INSERT completes
        }
    )
}

