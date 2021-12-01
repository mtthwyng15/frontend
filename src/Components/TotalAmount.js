const TotalAmount = (props) => {
  const total = props.items.reduce(
    (sum, element) => (sum += element.price_per_unit * element.quantity),
    0
  );
  return total;
};

export default TotalAmount;
