import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [
    loggedInUser,
    setLoggedInUser,
    enrollCourseInfo,
    setEnrollCourseInfo,
  ] = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container pb-5">
      <h3 className="text-center text-uppercase mb-5">Popular Courses</h3>
      <div className="row mb-5 d-flex justify-content-evenly">
        {courses.map((course) => (
          <Course
            key={course._id}
            course={course}
            enrollCourseInfo={enrollCourseInfo}
            setEnrollCourseInfo={setEnrollCourseInfo}
          ></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
