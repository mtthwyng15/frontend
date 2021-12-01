const TotalDeliveryQuantities = (props) => {
  let total = 0;
  props.items.forEach((element) => {
    element.Deliveries.forEach((delivery) => {
      console.log(delivery.delivered_quantity);
      total += delivery.delivered_quantity;
    });
  });
  console.log(total);
  return total;
};

export default TotalDeliveryQuantities;
