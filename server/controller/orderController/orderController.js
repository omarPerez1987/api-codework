const OrderModel = require("../../models/orders");

const getOrdersAll = async (userId) => {
  return await OrderModel.find(userId)
    .populate("usuarioID")
    .populate("productos").exec();
};

const getOrder = async (dataId) => {
  return await OrderModel.findById(dataId).exec();
};

const createOrder = async (body) => {
  const newOrder = new OrderModel(body);
  await newOrder.save();
  return newOrder;
};

module.exports = {
  getOrdersAll,
  getOrder,
  createOrder,
};
