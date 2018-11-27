module.exports = function (sequelize, DataTypes) {
  let supplierOrderStatus = sequelize.define("supplierOrderStatus", {
    orderId: DataTypes.STRING,
    supplierId: DataTypes.STRING,
    orderDate: DataTypes.STRING,
    recievedDate: DataTypes.STRING,
    amazonRecievedDate: DataTypes.STRING,
  });
  return supplierOrderStatus;
};
