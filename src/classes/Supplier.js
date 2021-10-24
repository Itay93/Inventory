class Supplier {
  constructor(values) {
    this.name = values.name;
    this.type = values.type;
    this.deliveryDays = values.deliveryDays;
    this.orderDays = values.orderDays;
    this.salesAgent = values.salesAgent;
    this.number = values.number;
    this.orderBy = values.orderBy;
  }
}

export default Supplier;
