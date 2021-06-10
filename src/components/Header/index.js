import React, { useEffect, useState } from "react";
import "./header.css";
import BurgerNav from "../../elements/BurgerNav";
x;
import NavVector1 from "../../assets/images/nav-vector-1.png";
import NavVector2 from "../../assets/images/nav-vector.png";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 415;
  useEffect(() => {
    const handleWindowsResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowsResize);
    return () => window.removeEventListener("resize", handleWindowsResize);
  }, []);

  return (
    <nav className="wrapper-header">
      <div className="wrapper-logo">
        {/* <img src={logoNavbar} alt="" className="img-logo" /> */}
        <p className="text-logo">
          TTI <span className="titik-logo">.</span>
        </p>
      </div>
      {width < breakPoint ? (
        <BurgerNav />
      ) : (
        <div className="wrapper-nav-text">
          <a href="" className="nav-text">
            Home
          </a>
          <a href="" className="nav-text">
            About
          </a>
          <a href="" className="nav-text">
            Trade
          </a>
          <a href="" className="nav-text">
            Investment
          </a>
          <a href="" className="nav-text">
            Tourism
          </a>
          <a href="" className="nav-text-vector">
            Regional Cluster
            <img
              src={NavVector1}
              alt="arah panah bawah"
              className="img-nav-vector-1"
            />
          </a>
          <a href="" className="nav-text-vector">
            News & Publications
            <img
              src={NavVector1}
              alt="arah panah bawah"
              className="img-nav-vector-1"
            />
          </a>
          <a href="" className="nav-text">
            FAQs
          </a>
          <a href="" className="nav-text-vector">
            <img
              src={NavVector2}
              alt="arah panah bawah"
              className="img-nav-vector-2"
            />
            US/EN
          </a>
          <button className="btn-nav">Login/Signup</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
