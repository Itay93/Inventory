import clientApi from "./clientApi";

const END_POINT = "/api/products";

const getProducts = () => {
  return clientApi.get(END_POINT);
};

const postProduct = (product) => {
  return clientApi.post(END_POINT, product);
};

const deleteProduct = (pId) => {
  return clientApi.delete(`${END_POINT}/${pId}`);
};

export default {
  getProducts,
  postProduct,
  deleteProduct,
};
