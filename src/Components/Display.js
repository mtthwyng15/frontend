import React from "react";
import DisplayTable from "./DisplayTable";
import "../App.css";

const Display = () => {
  const [jsonData, setJsonData] = React.useState([]);

  React.useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/orderItem");
      let json = await response.json();
      setJsonData(json);
    };

    fetchJSON();
  }, []);

  return (
    <div>
      {/* <p>
        This json is fetched from <b>file.json</b>
      </p> */}

      {/* <pre>{JSON.stringify(jsonData, null, "    ")}</pre>
      <DisplayTable jsonData /> */}

      <div>
        <table className="table">
          <thead className="theader">
            <tr>
              <th>ID</th>
              <th>Order ID</th>
              <th>Price per unit</th>
              <th>Quantity</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.order_id}</td>
                <td>{data.price_per_unit}</td>
                <td>{data.quantity}</td>
                <td>{data.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
