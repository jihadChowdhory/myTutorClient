import React, { useEffect } from "react";

const Order = ({ order, setIsStatusChanged }) => {
  const handleStatus = (e) => {
    const orderId = order._id;
    const orderStatus = e.target.innerText;
    fetch("http://localhost:5000/updateStatus", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ orderId, orderStatus }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <tr>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.courseName}</td>
      <td>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleStatus}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleStatus}
          >
            On Going
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleStatus}
          >
            Done
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Order;
