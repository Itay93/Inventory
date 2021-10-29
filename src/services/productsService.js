import productsApi from "../apis/productsApi";
import Product from "../classes/Product";

const _ = require("lodash");

const handleGetProducts = async () => {
  const response = await productsApi.getProducts();
  if (!response.ok) return response.data;
  return response.data.products;
};

const handlePostProduct = async (values) => {
  const response = await productsApi.postProduct(
    new Product(values, JSON.parse(values.supplier))
  );
  if (!response.ok) return response.data;
  return response.data.product;
};

const handlePatchProduct = async (p) => {
  const response = await productsApi.patchProduct(p._id, {
    product: p.product,
    sizes: p.sizes,
  });
  console.log(response);
  if (!response.ok) return response.data;
  return response.data.product;
};

const handleDeleteProduct = async (pId) => {
  const response = await productsApi.deleteProduct(pId);
  if (!response.ok) return response.data;
  return response.data.product;
};

const handleEditProduct = (column, input, p) => {
  column === "price" || column === "valueInSales"
    ? (p.product[column] = input)
    : (p.sizes[column] = input);
};

const handleExpectedSalesChange = (expectedSales, products) => {
  products.forEach((p) => {
    handleCalculateOutOfStock(p.calculations, expectedSales);
    handleCalculateNeedToOrder(p.calculations, p.product.valueInSales);
  });
};

const handleInputsChange = (column, input, p, expectedSales) => {
  if (column === "insertOrder") return (p.insertOrder = input);
  p.inStock[column] = input;
  handleCalculateTotalInStock(p.sizes, p.inStock);
  handleCalculateInventoryValueInSales(
    p.calculations,
    p.inStock.totalInStock,
    p.product.valueInSales
  );
  handleCalculateOutOfStock(p.calculations, expectedSales);
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
  handleEditProduct,
  handlePatchProduct,
  handleDeleteProduct,
  handleExpectedSalesChange,
  handleInputsChange,
};
