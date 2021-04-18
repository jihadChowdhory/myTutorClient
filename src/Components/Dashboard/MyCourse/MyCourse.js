import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Dashboard from "../Dashboard/Dashboard";
import EnrolledCourse from "../EnrolledCourse/EnrolledCourse";

const MyCourse = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const email = loggedInUser.email;
  useEffect(() => {
    fetch("http://localhost:5000/enrolledCourses", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => setEnrolledCourse(data));
  }, [email]);
  return (
    <div className="row">
      <div className="col-md-3">
        <Dashboard></Dashboard>
      </div>
      <div className="col-md-9 mt-5 d-flex flex-wrap">
        {enrolledCourse.map((course) => (
          <EnrolledCourse key={course._id} course={course}></EnrolledCourse>
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
