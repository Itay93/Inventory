import suppliersApi from "../apis/suppliersApi";
import Supplier from "../classes/Supplier";

const handleGetSuppliers = async () => {
  const response = await suppliersApi.getSuppliers();
  if (!response.ok) return response.data;
  return response.data.suppliers;
};

const handlePostSupplier = async (values) => {
  const response = await suppliersApi.postSupplier(new Supplier(values));
  if (!response.ok) return response.data;
  return response.data.supplier;
};

export default {
  handleGetSuppliers,
  handlePostSupplier,
};
