import suppliers from "../apis/suppliers";
import Supplier from "../classes/Supplier";

const handleGetSuppliers = async () => {
  const response = await suppliers.getSuppliers();
  if (!response.ok) return response.data;
  return response.data.suppliers;
};

const handlePostSupplier = async (values) => {
  const response = await suppliers.postSupplier(new Supplier(values));
  if (!response.ok) return response.data;
  return response.data.supplier;
};

export default {
  handleGetSuppliers,
  handlePostSupplier,
};
