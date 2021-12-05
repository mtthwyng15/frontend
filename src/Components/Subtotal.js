const Subtotal = (props) => {
  let amount = 0;

  return props.items.reduce(function (subtotal, order) {
    return order.order_items.reduce(function (sum, element) {
      const totalQuantities = element.Deliveries.reduce(function (
        quantity,
        delivery
      ) {
        quantity += delivery.delivered_quantity;

        return quantity;
      },
      0);
      sum += element.price_per_unit * totalQuantities;

      amount += sum;
      return amount;
    }, 0);
  }, 0);
};

export default Subtotal;
