import React from "react";

const SingleCourse = ({ course, setIsDeleted }) => {
  const handleDelete = () => {
    const courseId = course._id;
    fetch("http://localhost:5000/deleteCourse", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ courseId }),
    })
      .then((res) => res.json())
      .then((data) => setIsDeleted(data));
  };
  return (
    <tr>
      <td>{course.courseName}</td>
      <td>{course.instructor}</td>
      <td>{course.price}</td>
      <td>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleCourse;
