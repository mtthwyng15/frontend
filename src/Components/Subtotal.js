// [
//   {
//     "order_name": "PO #002-I",
//     "order_date": "Thu Jan 16 2020",
//     "order_items": [
//       {
//         "price_per_unit": 23.14,
//         "quantity": 11,
//         "product": "Corrugated Box",
//         "Deliveries": [
//           {
//             "delivered_quantity": 11
//           }
//         ]
//       }
//     ],
//     "customer_name": "Ivan Ivanovich",
//     "company_name": "Roga & Kopyta"
//   },
//   {
//     "order_name": "PO #003-I",
//     "order_date": "Sun Jan 05 2020",
//     "order_items": [
//       {
//         "price_per_unit": 123.0345,
//         "quantity": 12,
//         "product": "Corrugated Box",
//         "Deliveries": [
//           {
//             "delivered_quantity": 12
//           }
//         ]
//       }
//     ],
//     "customer_name": "Ivan Ivanovich",
//     "company_name": "Roga & Kopyta"
//   },
// ]

const Subtotal = (props) => {
  //   const items = props.items.reduce((value, element) => (value += element), 0);

  // const items = props.items.map((value, element) => {
  //     props.items.order_items.reduce (quantity, index) => (index.quantity += index),0
  // }
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
