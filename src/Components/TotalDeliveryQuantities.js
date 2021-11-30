// import React from "react";

const TotalDeliveryQuantities = (props) => {
  this.state({
    quantities: [],
  });

  const total = this.state.quantities.reduce(
    (prevValue, currentValue) => prevValue + currentValue
  );

  return total;
};

export default TotalDeliveryQuantities;
