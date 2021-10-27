import productsApi from "../apis/productsApi";
import Product from "../classes/Product";

const handleGetProducts = async () => {
  const response = await productsApi.getProducts();
  if (!response.ok) return response.data;
  return response.data.products;
};

const handlePostProduct = async (values) => {
  const response = await productsApi.postProduct(new Product(values));
  if (!response.ok) return response.data;
  return response.data.product;
};

const handleDeleteProduct = async (pId) => {
  const response = await productsApi.deleteProduct(pId);
  if (!response.ok) return response.data;
  return response.data.product;
};

const handleInputsChange = (column, input, p) => {
  if (column === "insertOrder") return (p.insertOrder = input);
  p.inStock[column] = input;
  handleCalculateTotalInStock(p.sizes, p.inStock);
  handleCalculateInventoryValueInSales(
    p.calculations,
    p.inStock.totalInStock,
    p.product.valueInSales
  );
  handleCalculateOutOfStock(p.calculations, 20000);
  handleCalculateNeedToOrder(p.calculations, p.product.valueInSales);
};

const handleCalculateTotalInStock = (sizes, inStock) => {
  inStock.totalInStock = (
    inStock.kg * sizes.kg +
    inStock.box * sizes.box +
    inStock.unit * sizes.unit +
    inStock.third * sizes.third +
    inStock.dThird * sizes.dThird +
    inStock.boxDough * sizes.boxDough +
    inStock.ambat * sizes.ambat
  ).toFixed(2);
};

const handleCalculateInventoryValueInSales = (
  calculations,
  totalInStock,
  valueInSales
) => {
  calculations.orderInventoryValue = (totalInStock * valueInSales).toFixed(2);
};

const handleCalculateMonthlyInventoryValue = (totalInStock, productPrice) => {
  return (totalInStock * productPrice).toFixed(2);
};

const handleCalculateOutOfStock = (calculations, expectedSales) => {
  const outOfStock = calculations.orderInventoryValue - expectedSales;
  calculations.outOfStock = outOfStock > 0 ? 0 : outOfStock.toFixed(2);
};

const handleCalculateNeedToOrder = (calculations, valueInSales) => {
  calculations.needToOrder =
    calculations.outOfStock < 0
      ? -(calculations.outOfStock / valueInSales).toFixed(2)
      : 0;
};

export default {
  handleGetProducts,
  handlePostProduct,
  handleDeleteProduct,
  handleInputsChange,
};
