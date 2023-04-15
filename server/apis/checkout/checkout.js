const express = require("express");
const router = express.Router();
const {
  productController,
} = require("../../controller/productController/index");

const { getProducts, getProduct } = productController;

// RUTAS REGISTRO PEDIDO

router.get("/checkout/getAll", async (req, res) => {
  try {
    const allProducts = await getProducts();
    res
      .status(200)
      .json({ message: "Mostrando usuario correctamente", allProducts });
    // console.log("mostrando usuario", allProducts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/checkout/get/:id", async (req, res) => {
  const dataId = req.params.id;
  try {
    const showProduct = await getProduct(dataId);
    res
      .status(200)
      .json({ message: "Mostrando producto indiv correctamente", showProduct });
    // console.log("mostrando producto", showProduct);
  } catch (error) {
    console.log(error);
  }
});

router.post("/checkout/create", async (req, res) => {
  const newProduct = req.body;
  try {
    const newCreateProduct = await createProduct(newProduct);
    res.status(200).json({ message: "Formulario enviado correctamente" });
    // console.log("creado nuevo usuario", newCreateProduct);
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
