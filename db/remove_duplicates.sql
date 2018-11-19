USE 
amazon;

SELECT 
    sku, COUNT(sku)
FROM
    amazon.inventory_health
GROUP BY 
    sku
HAVING 
    COUNT(sku) > 1;

DELETE t1 FROM     amazon.inventory_health
 t1
        INNER JOIN
        amazon.inventory_health
 t2 
WHERE
    t2.id < t1.id AND t1.sku = t2.sku;

