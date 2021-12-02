const TotalAmount = (props) => {
  const total = props.items.reduce(
    (sum, element) => (sum += element.price_per_unit * element.quantity),
    0
  );

  if (total === 0) {
    return "------";
  }

  return total;
};

export default TotalAmount;
