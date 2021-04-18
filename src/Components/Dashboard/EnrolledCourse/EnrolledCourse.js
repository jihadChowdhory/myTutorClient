import React from "react";

const EnrolledCourse = ({ course }) => {
  return (
    <div className="card text-center w-25 m-3">
      <div className="card-header">Status: {course.status}</div>
      <div className="card-body">
        <h5 className="badge bg-dark text-uppercase">{course.courseName}</h5>
      </div>
      <div className="card-footer text-muted">by {course.instructor}</div>
    </div>
  );
};

export default EnrolledCourse;
