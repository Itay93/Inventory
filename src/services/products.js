import products from "../apis/products";
import Product from "../classes/Product";

const handleGetProducts = async () => {
  const response = await products.getProducts();
  if (!response.ok) return response.data;
  return response.data.products;
};

const handlePostProduct = async (values) => {
  const response = await products.postProduct(new Product(values));
  if (!response.ok) return response.data;
  return response.data.product;
};

const handleInputChange = (targetColumn, newValue, index, products) => {
  const updatedProducts = [...products];
  const { product, sizes, inStock, calculations } = updatedProducts[index];
  // handle insert order
  if (targetColumn === "insertOrder") {
    updatedProducts[index].insertOrder = newValue;
    return updatedProducts;
  }
  // handle all other inputs
  inStock[targetColumn] = newValue;
  inStock.totalInStock = handleCalculateTotalInStock(sizes, inStock);
  calculations.orderInventoryValue = handleCalculateInventoryValueInSales(
    inStock.totalInStock,
    product.valueInSales
  );
  calculations.outOfStock = handleCalculateOutOfStock(
    calculations.orderInventoryValue,
    20000
  );
  calculations.needToOrder = handleCalculateNeedToOrder(
    calculations.outOfStock,
    product.valueInSales
  );
  return updatedProducts;
};

const handleCalculateTotalInStock = (sizes, inStockValues) => {
  return (
    inStockValues.kg * sizes.kg +
    inStockValues.box * sizes.box +
    inStockValues.unit * sizes.unit +
    inStockValues.third * sizes.third +
    inStockValues.dThird * sizes.dThird +
    inStockValues.boxDough * sizes.boxDough +
    inStockValues.ambat * sizes.ambat
  ).toFixed(2);
};

const handleCalculateInventoryValueInSales = (totalInStock, salesValue) => {
  return (totalInStock * salesValue).toFixed(2);
};

const handleCalculateMonthlyInventoryValue = (totalInStock, productPrice) => {
  return (totalInStock * productPrice).toFixed(2);
};

const handleCalculateOutOfStock = (orderInventoryValue, expectedSales) => {
  const outOfStock = (orderInventoryValue - expectedSales).toFixed(2);
  return outOfStock > 0 ? 0 : outOfStock;
};

const handleCalculateNeedToOrder = (outOfStock, salesValue) => {
  return outOfStock < 0 ? -(outOfStock / salesValue).toFixed(2) : 0;
};

export default {
  handleGetProducts,
  handlePostProduct,
  handleInputChange,
  handleCalculateTotalInStock,
  handleCalculateMonthlyInventoryValue,
  handleCalculateInventoryValueInSales,
  handleCalculateOutOfStock,
  handleCalculateNeedToOrder,
};
