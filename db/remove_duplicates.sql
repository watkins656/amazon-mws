USE 
g19kgxd0tyqbpecb;

SELECT 
    `OrderItemId`, COUNT(`OrderItemId`)
FROM
order_items
GROUP BY 
    `OrderItemId`
HAVING 
    COUNT(`OrderItemId`) > 1;

DELETE t1 FROM order_items
 t1
        INNER JOIN
    order_items
 t2 
WHERE
    t2.id < t1.id AND t1.`OrderItemId` = t2.`OrderItemId`;

