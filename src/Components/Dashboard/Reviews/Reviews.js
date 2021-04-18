import React, { useContext, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { UserContext } from "../../../App";

const Reviews = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [reviewInfo, setReviewInfo] = useState({});
  const [file, setFile] = useState(null);
  const [isReviewUploaded, setIsReviewUploaded] = useState(false);
  const handleBlur = (e) => {
    const newReviewInfo = { ...reviewInfo };
    newReviewInfo[e.target.name] = e.target.value;
    setReviewInfo(newReviewInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", loggedInUser.name);
    formData.append("jobTitle", reviewInfo.jobTitle);
    formData.append("company", reviewInfo.company);
    formData.append("message", reviewInfo.message);

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setIsReviewUploaded(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Dashboard></Dashboard>
      </div>
      <div className="col-md-9 mt-5">
        <h3>Review</h3>
        <div className="w-50">
          <p>Name: {loggedInUser.name}</p>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            className="form-control"
            onBlur={handleBlur}
          />
          <label htmlFor="company">Company Name:</label>
          <input
            type="text"
            name="company"
            id="company"
            className="form-control"
            onBlur={handleBlur}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="3"
            className="form-control"
            onBlur={handleBlur}
          ></textarea>
          <label htmlFor="img">Public Profile Image:</label>
          <input
            type="file"
            name="img"
            className="form-control"
            onChange={handleFileChange}
          />
          <br />
          <button className="btn btn-dark" onClick={handleSubmit}>
            Submit
          </button>
          {isReviewUploaded && (
            <p style={{ color: "limegreen" }}>Review Uploaded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
