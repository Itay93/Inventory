import client from "./client";

const END_POINT = "/api/suppliers";

const getSuppliers = () => {
  return client.get(END_POINT);
};

const postSupplier = (supplier) => {
  return client.post(END_POINT, supplier);
};

export default {
  getSuppliers,
  postSupplier,
};
