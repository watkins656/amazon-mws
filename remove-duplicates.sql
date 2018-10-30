USE 
customer_orders;

SELECT 
    AmazonOrderId, COUNT(AmazonOrderId)
FROM
    customer_orders.orders
GROUP BY 
    AmazonOrderId
HAVING 
    COUNT(AmazonOrderId) > 1;

DELETE t1 FROM     customer_orders.orders
 t1
        INNER JOIN
        customer_orders.orders
 t2 
WHERE
    t2.id < t1.id AND t1.AmazonOrderId = t2.AmazonOrderId;


SELECT 
    AmazonOrderId, COUNT(AmazonOrderId)
FROM
    customer_orders.order_items
GROUP BY 
    AmazonOrderId
HAVING 
    COUNT(AmazonOrderId) > 1;

DELETE t1 FROM     customer_orders.order_items
 t1
        INNER JOIN
        customer_orders.order_items
 t2 
WHERE
    t2.id < t1.id AND t1.AmazonOrderId = t2.AmazonOrderId;
