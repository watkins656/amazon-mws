DROP DATABASE IF EXISTS customer_orders;

CREATE DATABASE customer_orders;

USE customer_orders;

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  AmazonOrderId varchar(135),
BuyerEmail varchar(135),
BuyerName varchar(135),
EarliestShipDate varchar(135),
FulfillmentChannel varchar(135),
IsBusinessOrder varchar(135),
IsPremiumOrder varchar(135),
IsPrime varchar(135),
IsReplacementOrder varchar(135),
LastUpdateDate varchar(135),
LatestShipDate varchar(135),
MarketplaceId varchar(135),
NumberOfItemsShipped varchar(135),
NumberOfItemsUnshipped varchar(135),
OrderStatus varchar(135),
OrderTotal varchar(135),
OrderType varchar(135),
PaymentMethod varchar(135),
PaymentMethodDetails varchar(135),
PurchaseDate varchar(135),
SalesChannel varchar(135),
SellerOrderId varchar(135),
ShipServiceLevel varchar(135),
ShipmentServiceLevelCategory varchar(135),
ShippingAddress varchar(135),
  PRIMARY KEY (id)
);
