import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Dashboard from "../Dashboard/Dashboard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IglLFLR53X3hET7Gj7229f7vAh4uio8Wq4HTUfT4tItfHiUlGc3gsWVjgI3MXuVYnpilI1XjYY5LZ77oYN15cpt00npOmeO6K"
);
const Enroll = () => {
  const [
    loggedInUser,
    setLoggedInUser,
    enrollCourseInfo,
    setEnrollCourseInfo,
  ] = useContext(UserContext);
  const handleOnBlur = (e) => {
    const newEnrollCourseInfo = { ...enrollCourseInfo };
    newEnrollCourseInfo[e.target.name] = e.target.value;
    setEnrollCourseInfo(newEnrollCourseInfo);
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Dashboard></Dashboard>
      </div>
      <div className="col-md-9 mt-5">
        <div className="w-50">
          <h4>Enroll</h4>
          <p className="badge bg-dark text-wrap">
            Course: {enrollCourseInfo.courseName}
          </p>
          <br />
          <p className="badge bg-dark text-wrap">
            Price: {enrollCourseInfo.price}
          </p>
          <br />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control mt-3"
            onBlur={handleOnBlur}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control mt-3"
            onBlur={handleOnBlur}
          />
          <Elements stripe={stripePromise}>
            <CheckoutForm enrollCourseInfo={enrollCourseInfo}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
