import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="card border-dark mb-3 col-md-4" style={{ width: "18rem" }}>
      <div className="card-header">
        <img
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          src={`data:image/png;base64,${testimonial.img.img}`}
          alt=""
        />{" "}
        {testimonial.jobTitle},{testimonial.company}
      </div>
      <div className="card-body text-dark">
        <h5 className="card-title">{testimonial.name}</h5>
        <p className="card-text">{testimonial.message}</p>
      </div>
    </div>
  );
};

export default Testimonial;
