import client from "./client";

const END_POINT = "/api/products";

const getProducts = () => {
  return client.get(END_POINT);
};

const postProduct = (product) => {
  return client.post(END_POINT, product);
};

export default {
  getProducts,
  postProduct,
};
