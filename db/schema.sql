USE `g19kgxd0tyqbpecb`;

CREATE TABLE IF NOT EXISTS `inventory_health` (
id INT AUTO_INCREMENT NOT NULL,
  `snapshot-date` varchar(135) DEFAULT NULL,
  `sku` varchar(135) DEFAULT NULL,
  `fnsku` varchar(135) DEFAULT NULL,
  `asin` varchar(135) DEFAULT NULL,
  `product-name` varchar(355) DEFAULT NULL,
  `condition` varchar(135) DEFAULT NULL,
  `sales-rank` varchar(135) DEFAULT NULL,
  `product-group` varchar(135) DEFAULT NULL,
  `total-quantity` varchar(135) DEFAULT NULL,
  `sellable-quantity` varchar(135) DEFAULT NULL,
  `unsellable-quantity` varchar(135) DEFAULT NULL,
  `inv-age-0-to-90-days` varchar(135) DEFAULT NULL,
  `inv-age-91-to-180-days` varchar(135) DEFAULT NULL,
  `inv-age-181-to-270-days` varchar(135) DEFAULT NULL,
  `inv-age-271-to-365-days` varchar(135) DEFAULT NULL,
  `inv-age-365-plus-days` varchar(135) DEFAULT NULL,
  `units-shipped-last-24-hrs` varchar(135) DEFAULT NULL,
  `units-shipped-last-7-days` varchar(135) DEFAULT NULL,
  `units-shipped-last-30-days` varchar(135) DEFAULT NULL,
  `units-shipped-last-90-days` varchar(135) DEFAULT NULL,
  `units-shipped-last-180-days` varchar(135) DEFAULT NULL,
  `units-shipped-last-365-days` varchar(135) DEFAULT NULL,
  `weeks-of-cover-t7` varchar(135) DEFAULT NULL,
  `weeks-of-cover-t30` varchar(135) DEFAULT NULL,
  `weeks-of-cover-t90` varchar(135) DEFAULT NULL,
  `weeks-of-cover-t180` varchar(135) DEFAULT NULL,
  `weeks-of-cover-t365` varchar(135) DEFAULT NULL,
  `num-afn-new-sellers` varchar(135) DEFAULT NULL,
  `num-afn-used-sellers` varchar(135) DEFAULT NULL,
  `currency` varchar(135) DEFAULT NULL,
  `your-price` varchar(135) DEFAULT NULL,
  `sales-price` varchar(135) DEFAULT NULL,
  `lowest-afn-new-price` varchar(135) DEFAULT NULL,
  `lowest-afn-used-price` varchar(135) DEFAULT NULL,
  `lowest-mfn-new-price` varchar(135) DEFAULT NULL,
  `lowest-mfn-used-price` varchar(135) DEFAULT NULL,
  `qty-to-be-charged-ltsf-12-mo` varchar(135) DEFAULT NULL,
  `qty-in-long-term-storage-program` varchar(135) DEFAULT NULL,
  `qty-with-removals-in-progress` varchar(135) DEFAULT NULL,
  `projected-ltsf-12-mo` varchar(135) DEFAULT NULL,
  `per-unit-volume` varchar(135) DEFAULT NULL,
  `is-hazmat` varchar(135) DEFAULT NULL,
  `in-bound-quantity` varchar(135) DEFAULT NULL,
  `asin-limit` varchar(135) DEFAULT NULL,
  `inbound-recommend-quantity` varchar(135) DEFAULT NULL,
  `qty-to-be-charged-ltsf-6-mo` varchar(135) DEFAULT NULL,
  `projected-ltsf-6-mo` varchar(135) DEFAULT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ;


CREATE TABLE IF NOT EXISTS `order_items` (
id INT AUTO_INCREMENT NOT NULL,
  `AmazonOrderId` varchar(255) DEFAULT NULL,
  `QuantityOrdered` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `PromotionDiscount` varchar(255) DEFAULT NULL,
  `IsGift` varchar(255) DEFAULT NULL,
  `ASIN` varchar(255) DEFAULT NULL,
  `SellerSKU` varchar(255) DEFAULT NULL,
  `OrderItemId` varchar(255) DEFAULT NULL,
  `IsTransparency` varchar(255) DEFAULT NULL,
  `ProductInfo` varchar(255) DEFAULT NULL,
  `QuantityShipped` varchar(255) DEFAULT NULL,
  `ItemPrice` varchar(255) DEFAULT NULL,
  `ItemTax` varchar(255) DEFAULT NULL,
  `PromotionDiscountTax` varchar(255) DEFAULT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ;


CREATE TABLE IF NOT EXISTS `orders` (
id INT AUTO_INCREMENT NOT NULL,
  `AmazonOrderId` varchar(135) DEFAULT NULL,
  `BuyerEmail` varchar(135) DEFAULT NULL,
  `BuyerName` varchar(135) DEFAULT NULL,
  `EarliestShipDate` varchar(135) DEFAULT NULL,
  `FulfillmentChannel` varchar(135) DEFAULT NULL,
  `IsBusinessOrder` varchar(135) DEFAULT NULL,
  `IsPremiumOrder` varchar(135) DEFAULT NULL,
  `IsPrime` varchar(135) DEFAULT NULL,
  `IsReplacementOrder` varchar(135) DEFAULT NULL,
  `LastUpdateDate` varchar(135) DEFAULT NULL,
  `LatestShipDate` varchar(135) DEFAULT NULL,
  `MarketplaceId` varchar(135) DEFAULT NULL,
  `NumberOfItemsShipped` varchar(135) DEFAULT NULL,
  `NumberOfItemsUnshipped` varchar(135) DEFAULT NULL,
  `OrderStatus` varchar(135) DEFAULT NULL,
  `OrderTotal` varchar(135) DEFAULT NULL,
  `OrderType` varchar(135) DEFAULT NULL,
  `PaymentMethod` varchar(135) DEFAULT NULL,
  `PaymentMethodDetails` varchar(135) DEFAULT NULL,
  `PurchaseDate` varchar(135) DEFAULT NULL,
  `SalesChannel` varchar(135) DEFAULT NULL,
  `SellerOrderId` varchar(135) DEFAULT NULL,
  `ShipServiceLevel` varchar(135) DEFAULT NULL,
  `ShipmentServiceLevelCategory` varchar(135) DEFAULT NULL,
  `ShippingAddress` varchar(135) DEFAULT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE IF NOT EXISTS `overstock_inventory` (
id INT AUTO_INCREMENT NOT NULL,
  `Name` varchar(135) DEFAULT NULL,
  `FNSKU` varchar(135) DEFAULT NULL,
  `UPC` varchar(135) DEFAULT NULL,
  `MSKU` varchar(135) DEFAULT NULL,
  `ASIN` varchar(135) DEFAULT NULL,
  `ExpirationDate` varchar(135) DEFAULT NULL,
  `Quantity` varchar(135) DEFAULT NULL,
  `Location` varchar(135) DEFAULT NULL,
  `Comments` varchar(135) DEFAULT NULL,
  `Date_Overstocked` varchar(135) DEFAULT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE IF NOT EXISTS `inventory_supply` (
  id INT AUTO_INCREMENT NOT NULL,
`Condition` varchar(135),
`SupplyDetail` varchar(135),
`TotalSupplyQuantity` INT(11),
`FNSKU` varchar(135),
`InStockSupplyQuantity` INT(11),
`ASIN` varchar(135),
`SellerSKU` varchar(135),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ;