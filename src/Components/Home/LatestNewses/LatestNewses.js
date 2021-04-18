import React from "react";

const LatestNewses = () => {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase">Latest News</h3>
      <p className="text-center">Education news all over the world.</p>
      <div className="card mb-5">
        <div className="card-header fst-italic">by - Salam Chowdhory</div>
        <div className="card-body">
          <h5 className="card-title">Web Development Guideline</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            consequuntur explicabo veniam totam laborum voluptatum vero vel
            libero reiciendis fugit.
          </p>
          <a href="#q" className="btn btn-outline-dark">
            Read More
          </a>
        </div>
      </div>
      <div className="card mb-5">
        <div className="card-header fst-italic">by - Tahmina Akter</div>
        <div className="card-body">
          <h5 className="card-title">How to Start Coding</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            consequuntur explicabo veniam totam laborum voluptatum vero vel
            libero reiciendis fugit.
          </p>
          <a href="#q" className="btn btn-outline-dark">
            Read More
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-header fst-italic">by - Jihad Chowdhory</div>
        <div className="card-body">
          <h5 className="card-title">Tips to Succeed in Online Course</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            consequuntur explicabo veniam totam laborum voluptatum vero vel
            libero reiciendis fugit.
          </p>
          <a href="#q" className="btn btn-outline-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNewses;
