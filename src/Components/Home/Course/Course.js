import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course, enrollCourseInfo, setEnrollCourseInfo }) => {
  const handleEnroll = () => {
    setEnrollCourseInfo(course);
  };
  return (
    <div
      className="card col-md-4 text-center mb-5 shadow"
      style={{ width: "20rem" }}
    >
      <img
        src={`data:image/png;base64,${course.img.img}`}
        className="card-img-top"
        alt="..."
        style={{ height: "250px", width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{course.courseName}</h5>
        <p className="card-text">Instructor: {course.instructor}</p>
        <p>Price: ৳{course.price}</p>
        <Link
          to="dashboard/enroll"
          className="btn btn-outline-dark"
          onClick={handleEnroll}
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default Course;
