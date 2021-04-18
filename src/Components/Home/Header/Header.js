import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faPaperPlane,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <main style={{ height: "450px" }} className="mt-5 p-5">
      <div className="text-center container">
        <h1 className="text-uppercase mt-5">Find the best courses to learn</h1>
        <p>Master the skills to become pro companies love to hire</p>
        <form className="d-flex w-75 m-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
        <div className="d-flex mt-5 justify-content-center">
          <p className="me-5">
            <span>
              <FontAwesomeIcon icon={faUserGraduate} />
            </span>{" "}
            Over 10 million+ students
          </p>
          <p className="me-5">
            <span>
              <FontAwesomeIcon icon={faBookOpen} />
            </span>{" "}
            More than 3,0000+ courses
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>{" "}
            Learn anything online
          </p>
        </div>
      </div>
    </main>
  );
};

export default Header;
