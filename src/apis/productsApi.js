import clientApi from "./clientApi";

const END_POINT = "/api/products";

const getProducts = () => {
  return clientApi.get(END_POINT);
};

const postProduct = (p) => {
  return clientApi.post(END_POINT, p);
};

const patchProduct = (pId, v) => {
  return clientApi.patch(`${END_POINT}/${pId}`, v);
};

const deleteProduct = (pId) => {
  return clientApi.delete(`${END_POINT}/${pId}`);
};

export default {
  getProducts,
  postProduct,
  patchProduct,
  deleteProduct,
};
