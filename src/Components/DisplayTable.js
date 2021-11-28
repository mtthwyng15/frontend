import React from "react";
import { Component } from "react";

class DisplayTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order ID</th>
              <th>Price per unit</th>
              <th>Quantity</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
