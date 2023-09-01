import React from "react";
import "./footer.css";
import "./media.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footerMenu" id="footerMenu2">
        <ul>
          <li style={{ fontWeight: "bold" }}> <a> Company</a> </li>
          <li>
            <a> About Us </a>
          </li>
          <li>
            <a> Careers </a>
          </li>
          <li>
            <a> Blog </a>
          </li>
          <li>
            <a> Pricing </a>
          </li>
        </ul>
      </div>

      <div className="footerMenu" id="footerMenu3">
        <ul>
          <li style={{ fontWeight: "bold" }}>Destination </li>
          <li>
            <a> Maldives </a>
          </li>
          <li>
            <a>Los Angeles </a>
          </li>
          <li>
            <a> Las Vegas</a>
          </li>
          <li>
            <a> Torronto </a>
          </li>
        </ul>
      </div>

      <div className="footerMenu" id="footerMenu4">
        <ul>
          <li style={{ fontWeight: "bold" }}>Join Our Newsletter</li>
          <li>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input className="input1" placeholder="Your email address" />
              <button className="btn2">Subscribe</button>
            </div>
          </li>
          <li style={{ color: "grey", fontSize: "small" }}>
            * Will send you weekly updates for your better tour packages
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
