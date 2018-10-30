let dotenv = require("dotenv").config();
var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';
let mySQLPassword = process.env.MYSQL_PASSWORD;
let amazonMws = require('amazon-mws')(accessKey, accessSecret);
let MWSAuthToken = process.env.MWS_AUTH_TOKEN;
let SellerId = process.env.MWS_SELLER_ID;
let mysql = require("mysql");
let inquirer = require('inquirer');
let fs = require('fs')
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

let reportListRequest = function () {

    amazonMws.reports.search({
        'Version': '2009-01-01',
        'Action': 'GetReportList',
        'SellerId': SellerID,
        'MWSAuthToken': MWSAuthToken,
        //'ReportTypeList.Type.1': 'REPORT_TYPE_LIST' //optional
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};


let reportRequest = function () {
    amazonMws.reports.search({
        'Version': '2009-01-01',
        'Action': 'GetReport',
        'SellerId': SellerID,
        'MWSAuthToken': MWSAuthToken,
        'ReportId': '11931572916017833'
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        response.data.forEach(element => {
                        reports.updateInventoryHealthTable(element);
        });
        return;
    });
};
// reportListRequest();
reportRequest();

let reports = {

    updateInventoryHealthTable: function (item) {
        //TODO: CODE to update the inv. health table with the 'item' object.  
        var query = connection.query(
            "INSERT INTO inventory_health SET ?",
            item,
            function (err, res) {
                console.log(err);
                console.log(res.affectedRows + " order inserted!\n");
                // Call updateProduct AFTER the INSERT completes
            }
        )


    }
}



