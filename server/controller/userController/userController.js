const UsersModel = require("../../models/users.js");

const getUser = async (dataEmail) => {
  return await UsersModel.findOne({dataEmail});
};

const createUser = async (body) => {
  const newUser = new UsersModel(body);
  await newUser.save();
  return newUser;
};

const editUser = async (bodyUser, bodyEmail) => {
  const dataEmail = { email: bodyEmail };
  const dataUser= bodyUser;
  await UsersModel.findOneAndUpdate(dataEmail, dataUser);
  return dataUser
};

const deleteUser = async (dataEmail) => {
  await UsersModel.deleteOne({dataEmail})
}

const existsUser = async (email) => {
 return await UsersModel.findOne({email});
};

module.exports = {
  getUser,
  createUser,
  editUser,
  deleteUser,
  existsUser
};
