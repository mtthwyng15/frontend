import React, { useState, useEffect } from "react";
import DisplayTable from "./DisplayTable";
import TotalDeliveryQuantities from "./TotalDeliveryQuantities";
import _ from "lodash";
import TotalAmount from "./TotalAmount";

const pageSize = 5;

const Display = () => {
  const [jsonData, setJsonData] = useState([]);
  const [paginate, setPaginate] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/order");
      let json = await response.json();
      setJsonData(json);
      setPaginate(_(json).slice(0).take(pageSize).value());
    };

    fetchJSON();
  }, []);

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
      <div>
        <div className="navy georgia ma0 grow"></div>
        <div className="pa2">
          <input
            // className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type="search"
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value.toLowerCase());
            }}
          />
        </div>
      </div>
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
          {paginate
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.order_name.includes(search) ||
                val.customer_id.includes(search)
              ) {
                return val;
              }
            })
            .map((data, index) => (
              <tr key={index}>
                <td>{data.order_name}</td>
                <td>{data.company_id}</td>
                <td>{data.customer_id}</td>
                <td>{data.created_at}</td>
                <td>
                  <TotalDeliveryQuantities items={data.OrderItems} />
                </td>
                <td>
                  <TotalAmount items={data.OrderItems} />
                </td>
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
