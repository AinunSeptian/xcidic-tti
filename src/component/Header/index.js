import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="nav_header">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Trade</a>
          </li>
          <li>
            <a href="#">Investment</a>
          </li>
          <li>
            <a href="#">Tourism</a>
          </li>
          <li>
            <a href="#">Regional Cluster</a>
          </li>
          <li>
            <a href="#">News & Publications</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Header;
