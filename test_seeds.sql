USE customer_orders;
DROP TABLE IF EXISTS test_orders;
CREATE TABLE test_orders (
  id INT NOT NULL AUTO_INCREMENT,
  AmazonOrderId varchar(135),
  PurchaseDate varchar(135),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS test_order_items;
CREATE TABLE test_order_items (
  id INT NOT NULL AUTO_INCREMENT,
  AmazonOrderId varchar(135),
QuantityOrdered varchar(135),
SellerSKU varchar(135),
  PRIMARY KEY (id)
);


INSERT INTO test_orders (AmazonOrderId,PurchaseDate)
VALUES   (100, '1/1/18'),
         (101, '1/2/18'),
         (102, '1/2/18'),
         (103, '1/3/18'),
         (104, '1/3/18');


INSERT INTO test_order_items (AmazonOrderId,QuantityOrdered,SellerSKU)
VALUES   (100,2,'ABC'),
         (100,3,'XYZ'),
         (101,2,'ABC'),
         (101,1,'DEF'),
         (101,3,'XYZ'),
         (102,4,'DEF'),
         (103,2,'ABC'),
         (103,4,'XYZ'),
         (104,3,'ABC'),
         (104,3,'DEF'),
         (104,5,'XYZ');


SELECT * FROM test_orders;
SELECT * FROM test_order_items;

SELECT
 o.AmazonOrderId,
 o.PurchaseDate,
 i.SellerSKU,
 i.QuantityOrdered
FROM
 test_orders o
LEFT JOIN test_order_items i ON o.AmazonOrderId = i.AmazonOrderId
WHERE i.SellerSKU like 'XYZ';
