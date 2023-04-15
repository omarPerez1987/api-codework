const ProductModel = require("../../models/product.js");

const getProducts = async () => {
  return await ProductModel.find({});
};

const getProduct = async (dataId) => {
  return await ProductModel.findById(dataId).exec();
};

const createProduct = async (body) => {
  const newUser = new ProductModel(body);
  await newUser.save();
  return newUser;
};

const editProduct = async (dataId, dataProduct) => {
  return await ProductModel.findByIdAndUpdate(dataId, dataProduct, {
    new: true,
  });
};

const deleteProduct = async (dataEmail) => {
  await ProductModel.findByIdAndDelete(dataEmail);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
