let mysql = require('mysql');
var connection = require("../config/connection.js");
let papa = require('papaparse');

let items = overstock.data;
items.forEach(item => {
    insert(item);
});

function insert(item) {
    connection.query("INSERT INTO overstock_inventory SET ?", {
        UPC: item[5],
        Name: item[1],
        FNSKU: item[3],
        ExpirationDate: item[2],
        Quantity: item[0],
        Location: item[6],
        Comments: item[7],
    }, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}