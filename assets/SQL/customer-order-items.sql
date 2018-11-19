USE amazon;CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT,
    AmazonOrderId VARCHAR(255),
    QuantityOrdered VARCHAR(255),
    Title VARCHAR(255),
    PromotionDiscount VARCHAR(255),
    IsGift VARCHAR(255),
    ASIN VARCHAR(255),
    SellerSKU VARCHAR(255),
    OrderItemId VARCHAR(255),
    IsTransparency VARCHAR(255),
    ProductInfo VARCHAR(255),
    QuantityShipped VARCHAR(255),
    ItemPrice VARCHAR(255),
    ItemTax VARCHAR(255),
    PromotionDiscountTax VARCHAR(255), 
    PRIMARY KEY (id)
);