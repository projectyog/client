import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-4">
          <div className="d-flex justify-content-between pt-5 mt-5 border-top">
              <p>© 2021 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-facebook fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-instagram fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-twitter fa-2x"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;