import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const company = [
    { name: "About us", link: "/about-us" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "Become a Teacher", link: "/become-teacher" },
  ];
  const ourAddress = [
    { name: "kasba 3460, Brahmanbaria", link: "//google.com/map" },
    { name: "Bangladesh", link: "//google.com/map" },
  ];
  const support = [
    { name: "Documentation", link: "/documentaion" },
    { name: "Forum", link: "/forum" },
    { name: "Ask a Question", link: "/ask" },
    { name: "Press Release", link: "/press" },
  ];
  const links = [
    { name: "Courses", link: "/courses" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "FAQs", link: "/faqs" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"Company"} menuItems={company} />
          <FooterCol key={2} menuTitle="Links" menuItems={links} />
          <FooterCol key={3} menuTitle="Suppport" menuItems={support} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-outline-dark">+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
