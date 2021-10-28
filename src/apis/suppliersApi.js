import clientApi from "./clientApi";

const END_POINT = "/api/suppliers";

const getSuppliers = () => {
  return clientApi.get(END_POINT);
};

const postSupplier = (supplier) => {
  return clientApi.post(END_POINT, supplier);
};

const deleteSupplier = (sId) => {
  return clientApi.delete(`${END_POINT}/${sId}`);
};

export default {
  getSuppliers,
  postSupplier,
  deleteSupplier,
};
