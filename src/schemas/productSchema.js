const yup = require('yup');

const productSchema = yup.object().shape({
  productName: yup.string().required("Product Name is required"),
  price: yup.number().positive().required(),
  description: yup.string(),
});

module.exports = { productSchema };