USE 
amazon;

SELECT 
    AmazonOrderId, COUNT(AmazonOrderId)
FROM
    amazon.orders
GROUP BY 
    AmazonOrderId
HAVING 
    COUNT(AmazonOrderId) > 1;

DELETE t1 FROM     amazon.orders
 t1
        INNER JOIN
        amazon.orders
 t2 
WHERE
    t2.id < t1.id AND t1.AmazonOrderId = t2.AmazonOrderId;


SELECT 
    AmazonOrderId, COUNT(AmazonOrderId)
FROM
    amazon.order_items
GROUP BY 
    AmazonOrderId
HAVING 
    COUNT(AmazonOrderId) > 1;

DELETE t1 FROM     amazon.order_items
 t1
        INNER JOIN
        amazon.order_items
 t2 
WHERE
    t2.id < t1.id AND t1.AmazonOrderId = t2.AmazonOrderId;
