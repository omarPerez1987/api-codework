const express = require("express");
const router = express.Router();
const { orderController } = require("../../controller/orderController/index");

const { getOrdersAll, getOrder, createOrder } = orderController;

// RUTAS REGISTRO PEDIDO

router.get("/orders/getAll", async (req, res) => {
  const userId = req.query.userId;
  try {
    const allOrders = await getOrdersAll({usuarioID: userId});
    res
      .status(200)
      .json({ message: "Mostrando pedidos correctamente", allOrders });
    // console.log("mostrando usuario", allProducts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/orders/get/:id", async (req, res) => {
  const dataId = req.params.id;
  try {
    const showOrder = await getOrder(dataId);
    res.status(200).json({ message: "Mostrando pedido", showOrder });
    // console.log("mostrando producto", showProduct);
  } catch (error) {
    console.log(error);
  }
});

router.post("/orders/create", async (req, res) => {
  const newOrder = req.body;
  try {
    const newCreateOrder = await createOrder(newOrder);
    res.status(200).json({ message: "Pedido creado" });
    console.log("creado nuevo pedido", newCreateOrder);
  } catch (error) {
    console.log(error);
  }
});

// router.put("/checkout/edit/:id", async (req, res) => {
//   const dataId = req.params.id;
//   const dataProduct = req.body;
//   try {
//     const newEditProduct = await editProduct(dataId, dataProduct);
//     res.status(200).json({ message: "Usuario editado correctamente", newEditProduct });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.delete("/checkout/delete/:id", async (req, res) => {
//   const dataId = req.params.id;
//   try {
//     const removeProduct = await deleteProduct(dataId);
//     res
//       .status(200)
//       .json({ message: "Usuario eliminado correctamente", removeProduct });
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
