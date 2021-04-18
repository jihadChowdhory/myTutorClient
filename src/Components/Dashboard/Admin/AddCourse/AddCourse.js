import React, { useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";

const AddCourse = () => {
  const [courseInfo, setCourseInfo] = useState({});
  const [file, setFile] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const handleBlur = (e) => {
    const newCourseInfo = { ...courseInfo };
    newCourseInfo[e.target.name] = e.target.value;
    setCourseInfo(newCourseInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("courseName", courseInfo.courseName);
    formData.append("courseInstructor", courseInfo.courseInstructor);
    formData.append("coursePrice", courseInfo.coursePrice);

    fetch("https://enigmatic-badlands-92540.herokuapp.com/addCourse", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setIsAdded(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Dashboard></Dashboard>
      </div>
      <div className="col-md-9 mt-5">
        <h3>Add New Course</h3>
        <div className="w-50">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            className="form-control"
            onBlur={handleBlur}
          />
          <label htmlFor="courseName">Course Instructor:</label>
          <input
            type="text"
            id="courseInstructor"
            name="courseInstructor"
            className="form-control"
            onBlur={handleBlur}
          />
          <label htmlFor="courseName">Course Price:</label>
          <input
            type="text"
            id="coursePrice"
            name="coursePrice"
            className="form-control"
            onBlur={handleBlur}
          />
          <label htmlFor="courseImg">Course Image:</label>
          <input
            type="file"
            id="courseImg"
            name="courseImg"
            className="form-control"
            onChange={handleFileChange}
          />{" "}
          <br />
          <button className="btn btn-dark" onClick={handleSubmit}>
            Add Course
          </button>
          {isAdded && (
            <p style={{ color: "limegreen" }}>Course Added Succesfully</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
