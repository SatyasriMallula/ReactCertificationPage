import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./homestyle.module.css";
// import { Navbar } from "./navbar";
export const Home = () => {
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState({
    New: false,
    Packed: false,
    InTransit: false,
    Delivered: false,
  });
  // const [count, setCount] = useState();
  const [filteredOrders, setFilteredOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
      );
      setOrders(response.data);
      setFilteredOrders(response.data);
      setCount(response.data.length);
    };
    fetchOrders();
  }, []);
  const handleFilter = (status) => {
    setFilteredOrders(orders.filter((order) => order.orderStatus !== status));
    setCount(count - setFilteredOrders.length);
    // setChecked({ status: checked });
  };

  const handleChange = (e) => {
    setChecked({ e: !checked });
  };
  return (
    <div>
      <h1 id={styles.orders_head}>Orders</h1>

      <div id={styles.orders}>
        <div id={styles.Filters}>
          <h4 id={styles.filter_head}>Filters</h4>
          <p id={styles.Filter_count}>Count{count} </p>
          <input
            className={styles.filter_input}
            type="checkbox"
            onClick={() => handleFilter("New")}
            // checked={checked}
            onChange={handleChange}
            defaultChecked={true}
          ></input>
          New
          <br></br>
          <input
            className={styles.filter_input}
            type="checkbox"
            onClick={() => handleFilter("Packed")}
            // checked={checked}
            onChange={handleChange}
            defaultChecked={true}
          ></input>
          Packed<br></br>
          <input
            className={styles.filter_input}
            type="checkbox"
            onClick={() => handleFilter("InTransit")}
            // checked={checked}
            onChange={handleChange}
            defaultChecked={true}
          ></input>
          Intransit<br></br>
          <input
            className={styles.filter_input}
            type="checkbox"
            onClick={() => handleFilter("Delivered")}
            // checked={checked}
            onChange={handleChange}
            defaultChecked={true}
          ></input>
          Delivered
        </div>
        <div>
          <table id={styles.ordertable}>
            <thead>
              <tr>
                <th>OrderID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr id={styles.orderrow} key={order.id}>
                  <td className={styles.data}>{order.id}</td>
                  <td className={styles.data}>{order.customerName}</td>
                  <td className={styles.data}>{order.orderDate}</td>
                  <td className={styles.data}>{order.amount}</td>
                  <td className={styles.data}>{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
