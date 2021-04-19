import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [spinnerForReview, setSpinnerForReview] = useState(true);
  useEffect(() => {
    fetch("https://enigmatic-badlands-92540.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setSpinnerForReview(false);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#e7e7e7" }} className=" mt-5 pt-5 pb-5">
      <div className="container pb-5">
        <h3 className="text-center m-5 text-uppercase">What people say</h3>
        <div className="row d-flex justify-content-evenly">
          {spinnerForReview && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          )}
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial._id}
              testimonial={testimonial}
            ></Testimonial>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
