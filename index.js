const items = [
  {
    name: "Laptop",
    quantity: 10,
    checkStocks() {
      if (this.quantity > 0) {
        console.log(`${this.name}: in stock.`);
      } else {
        console.log(`${this.name}: out of stock.`);
      }
    },
  },
  {
    name: "Mouse",
    quantity: 0,
    checkStocks() {
      if (this.quantity > 0) {
        console.log(`${this.name}: in stock.`);
      } else {
        console.log(`${this.name}: out of stock.`);
      }
    },
  },
];

items.forEach((item) => {
  console.log(item.checkStocks());
});
