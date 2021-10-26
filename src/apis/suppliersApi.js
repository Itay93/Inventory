import clientApi from "./clientApi";

const END_POINT = "/api/suppliers";

const getSuppliers = () => {
  return clientApi.get(END_POINT);
};

const postSupplier = (supplier) => {
  return clientApi.post(END_POINT, supplier);
};

export default {
  getSuppliers,
  postSupplier,
};
