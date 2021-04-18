import React, { useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";

const AddAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [isAdminAdded, setIsAdminAdded] = useState(false);
  const handleOnBlur = (e) => {
    const email = e.target.value;
    setAdminEmail(email);
  };
  const handleAddAdmin = () => {
    fetch("https://enigmatic-badlands-92540.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: adminEmail }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdminAdded(data));
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Dashboard></Dashboard>
      </div>
      <div className="col-md-9 mt-5">
        <h3>Add New Admin</h3>
        <div className="w-50">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onBlur={handleOnBlur}
          />{" "}
          <br />
          <button className="btn btn-dark" onClick={handleAddAdmin}>
            Add
          </button>
          {isAdminAdded && <p style={{ color: "limegreen" }}>Admin Added</p>}
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
