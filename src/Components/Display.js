import React, { useEffect, useState } from "react";
import TotalDeliveryQuantities from "./TotalDeliveryQuantities";
import TotalAmount from "./TotalAmount";
import _ from "lodash";
import "../App.css";
import Subtotal from "./Subtotal";

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
      // setJsonData(_(json).slice(0).take(pageSize).value());
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
      <div className="search">
        <div className="navy georgia ma0 grow"></div>
        <h5>
          Search for Records
          <input
            className="searchinput"
            type="search"
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </h5>
      </div>
      <div>
        <div className="subtotal">
          <h5>
            Total Amount: $
            <Subtotal items={paginate} />
          </h5>
        </div>
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
            {paginate
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.order_name.toLowerCase().includes(search.toLowerCase()) ||
                  val.company_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  val.customer_name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(function (data, index) {
                return (
                  <tr key={index}>
                    <td>{data.order_name}</td>
                    <td>{data.company_name}</td>
                    <td>{data.customer_name}</td>
                    <td>{data.order_date}</td>
                    <td>
                      <TotalDeliveryQuantities items={data.order_items} />{" "}
                    </td>
                    <td>
                      <TotalAmount items={data.order_items} />
                    </td>
                  </tr>
                );
              })}
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
    </div>
  );
};

export default Display;
