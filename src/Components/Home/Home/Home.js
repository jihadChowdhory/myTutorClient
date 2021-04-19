import React from "react";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../../Shared/Footer/Footer";
import LatestNewses from "../LatestNewses/LatestNewses";
import Workshop from "../Workshop/Workshop";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Courses></Courses>
      <LatestNewses></LatestNewses>
      <Testimonials></Testimonials>
      <Workshop></Workshop>
      <Footer></Footer>
    </div>
  );
};

export default Home;
