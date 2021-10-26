class Product {
  constructor(values) {
    this.product = {
      name: values.pName,
      price: values.price,
      valueInSales: values.valueInSales,
      includeInMonthlyInventory: values.includeInMonthlyInventory,
    };
    this.supplier = {
      name: values.sName,
      type: values.type,
    };
    this.sizes = {
      stockDaily: values.stockDaily,
      stockMonthly: values.stockMonthly,
      inOrder: values.inOrder,
      kg: values.kg,
      box: values.box,
      unit: values.unit,
      third: values.third,
      dThird: values.dThird,
      boxDough: values.boxDough,
      ambat: values.ambat,
    };
    this.inStock = {
      kg: 0,
      box: 0,
      unit: 0,
      third: 0,
      dThird: 0,
      boxDough: 0,
      ambat: 0,
      totalInStock: 0,
    };
    this.calculations = {
      orderInventoryValue: 0,
      outOfStock: 0,
      needToOrder: 0,
      monthlyInventoryValue: 0,
    };
    this.insertOrder = 0;
  }
}

export default Product;
