const TotalAmount = (props) => {
  const total = props.items.reduce(function (sum, element) {
    const totalQuantities = element.Deliveries.reduce(function (
      quantities,
      quantity
    ) {
      quantities += quantity.delivered_quantity;
      return quantities;
    },
    0);

    sum += element.price_per_unit * totalQuantities;
    return sum;
  }, 0);
  // console.log(total);
  return total;
};

export default TotalAmount;
