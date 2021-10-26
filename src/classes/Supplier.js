class Supplier {
  constructor(values) {
    this.name = values.name;
    this.type = values.type;
    this.orderDays = values.orderDays;
    this.deliveryDays = values.deliveryDays;
    this.salesAgent = values.salesAgent;
    this.number = values.number;
    this.orderBy = values.orderBy;
  }
}

export default Supplier;
