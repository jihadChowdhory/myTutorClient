import React, { useEffect, useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import Order from "../Order/Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isStatusChanged, setIsStatusChanged] = useState(false);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://enigmatic-badlands-92540.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setSpinner(false);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-md-3">
        <Dashboard></Dashboard>
      </div>
      <div className="col-md-9 mt-5">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "95%" }}
        >
          <h3>Orders</h3>
          {isStatusChanged && (
            <p style={{ color: "limegreen" }}>Status changed</p>
          )}
          <p className="">
            Total Orders:{" "}
            <span className="badge rounded-pill bg-dark">{orders.length}</span>
          </p>
        </div>
        <table style={{ width: "95%" }} className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Course Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order
                key={order._id}
                order={order}
                setIsStatusChanged={setIsStatusChanged}
              ></Order>
            ))}
          </tbody>
        </table>
        {spinner && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
