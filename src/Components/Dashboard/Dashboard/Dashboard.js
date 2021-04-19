import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Dashboard.css";

const Dashboard = () => {
  const [loggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState([1, 2]);
  const email = loggedInUser.email;
  useEffect(() => {
    fetch("https://enigmatic-badlands-92540.herokuapp.com/checkEmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, [email]);
  return (
    <div className="side-nav">
      <h2>MY TUTOR</h2>
      <Link to="/dashboard" className="side-nav-link">
        Dashboard
      </Link>
      {admin.length === 0 && (
        <Link to="/dashboard/enroll" className="side-nav-link">
          Enroll
        </Link>
      )}
      {admin.length === 0 && (
        <Link to="/dashboard/my-course" className="side-nav-link">
          My Course
        </Link>
      )}
      {admin.length === 0 && (
        <Link to="/dashboard/review" className="side-nav-link">
          Review
        </Link>
      )}
      {admin.length === 1 && (
        <Link to="/dashboard/orders" className="side-nav-link">
          Orders
        </Link>
      )}
      {admin.length === 1 && (
        <Link to="/dashboard/addCourse" className="side-nav-link">
          Add Course
        </Link>
      )}
      {admin.length === 1 && (
        <Link to="/dashboard/addAdmin" className="side-nav-link">
          Add Admin
        </Link>
      )}
      {admin.length === 1 && (
        <Link to="/dashboard/courses" className="side-nav-link">
          All Courses
        </Link>
      )}
    </div>
  );
};

export default Dashboard;
