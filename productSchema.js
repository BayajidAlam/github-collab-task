const yup = require("yup");

const productSKU = yup.object().shape({
  id: yup.string().required("ID is required"),
  size: yup.string().required("Size is required"),
  color: yup.string().required("Color is required"),
  quantity: yup.number().required("Quantity is required"),
});

const productSchema = yup.object().shape({
  productName: yup.string().required("Product Name is required"),
  price: yup.number().positive().required(),
  description: yup.string(),
  sku: productSKU,
  shopName: yup.string().required("Shop Name is required"),
  shopImage: yup.string().required("Shop Image is required"),
  shopOwner: yup.string().required("Shop Owner is required"),
});

module.exports = { productSchema };
