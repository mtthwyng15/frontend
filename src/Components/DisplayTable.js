import React from "react";
import DisplayTable from "./DisplayTable";
import "../App.css";
import TotalDeliveryQuantities from "./TotalDeliveryQuantities";

const Display = () => {
  const [jsonData, setJsonData] = React.useState([]);
  const total_amount = 0;

  React.useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/order");
      let json = await response.json();
      setJsonData(json);
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
              <th>Customer Company Name</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Delivered Amount</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, index) => (
              <tr key={index}>
                <td>{data.order_name}</td>
                <td>{data.company_id}</td>
                <td>{data.customer_id}</td>
                <td>{data.created_at}</td>
                {/* <td>
                  <TotalDeliveryQuantities {...data.OrderItems[0].Deliveries} />
                </td> */}

                <td>{data.OrderItems[0].Deliveries[0].delivered_quantity}</td>
                <td>{data.delivered_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
