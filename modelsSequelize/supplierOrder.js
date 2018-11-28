module.exports = function (sequelize, DataTypes) {
  let supplierOrder = sequelize.define("supplierOrder", {
    orderId: DataTypes.STRING,
    supplierId: DataTypes.STRING,
    SKU: DataTypes.STRING,
    quantity: DataTypes.STRING,
    
});
  return supplierOrder;
};
