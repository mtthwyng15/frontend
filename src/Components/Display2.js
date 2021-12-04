import React from "react";
import TotalDeliveryQuantities from "./TotalDeliveryQuantities";
import TotalAmount from "./TotalAmount";
import "../App.css";

const Display = () => {
  const [jsonData, setJsonData] = React.useState([]);

  React.useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/order");
      let json = await response.json();
      setJsonData(json);

      console.log(json);
    };

    fetchJSON();
  }, []);

  return (
    <div>
      <div>
        <table className="table">
          <thead className="theader">
            <tr>
              <th>Order Name</th>
              <th>Customer Company</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Delivered Amount</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map(function (data, index) {
              return (
                <tr key={index}>
                  {data.orders.map(function (order, orderIndex) {
                    return (
                      <tr key={orderIndex}>
                        <td>{order.order_name}</td>
                        <td>{data.company_name}</td>
                        <td>{data.customer_name}</td>
                        <td>{order.created_at}</td>
                        <td>
                          <TotalDeliveryQuantities items={order.OrderItems} />
                        </td>
                        <td>
                          <TotalAmount items={order.OrderItems} />
                        </td>
                      </tr>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
