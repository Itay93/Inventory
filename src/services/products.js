import products from "../apis/products";
import Product from "../classes/Product";

const handleGetProducts = async () => {
  const response = await products.getProducts();
  if (!response.ok) return response.data;
  return response.data.products;
};

const handlePostProduct = async (values) => {
  const response = await products.postProduct(new Product(values));
  if (!response.ok) return response.data;
  return response.data.product;
};

export default {
  handleGetProducts,
  handlePostProduct,
};
