USE 
g19kgxd0tyqbpecb;

SELECT 
    sellerSKU, COUNT(sellerSKU)
FROM
inventory_supply
GROUP BY 
    sellerSKU
HAVING 
    COUNT(sellerSKU) > 1;

DELETE t1 FROM inventory_supply
 t1
        INNER JOIN
    inventory_supply
 t2 
WHERE
    t2.id < t1.id AND t1.sellerSKU = t2.sellerSKU;

