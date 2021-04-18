import React, { useEffect, useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import SingleCourse from "../SingleCourse/SingleCourse";

const AllCourse = () => {
  const [courses, setCourses] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    fetch("https://enigmatic-badlands-92540.herokuapp.com/allCourses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
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
          <h3>All Courses</h3>
          {isDeleted && <p style={{ color: "limegreen" }}>Course Deleted</p>}
          <p className="">
            Total Orders:{" "}
            <span className="badge rounded-pill bg-dark">{courses.length}</span>
          </p>
        </div>
        <table style={{ width: "95%" }} className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Instructor</th>
              <th scope="col">Price</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <SingleCourse
                key={course._id}
                course={course}
                setIsDeleted={setIsDeleted}
              ></SingleCourse>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCourse;
