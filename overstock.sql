USE amazon;
CREATE TABLE overstock_inventory(
      id INT NOT NULL AUTO_INCREMENT,
      ProductID varchar(135),
      ExpirationDate varchar(135),
      Quantity varchar(135),
      Location varchar(135),
      Date_Overstocked varchar(135),
      PRIMARY KEY (id)
)
