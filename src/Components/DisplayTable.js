import React from "react";
import DisplayTable from "./DisplayTable";
import TotalDeliveryQuantities from "./TotalDeliveryQuantities";
import _ from "lodash";

const pageSize = 5;

const Display = () => {
  const [jsonData, setJsonData] = React.useState([]);
  const [paginate, setPaginate] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/order");
      let json = await response.json();
      setJsonData(json);
      setPaginate(_(json).slice(0).take(pageSize).value());
    };

    fetchJSON();
  }, []);

  // React.useEffect(() => {
  //   axios.get("/order").then((res) => {
  //     console.log(res.data);
  //     setJsonData(res.data);
  //     setPaginate(_(res.data).slice(0).take(pageSize).value());
  //   });
  // }, []);

  const pageCount = jsonData ? Math.ceil(jsonData.length / pageSize) : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const pagination = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginated = _(jsonData).slice(startIndex).take(pageSize).value();
    setPaginate(paginated);
  };

  return (
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
          {paginate.map((data, index) => (
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
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p
                className="page-link"
                onClick={() => {
                  pagination(page);
                }}
              >
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Display;
