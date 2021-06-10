import React, { useState } from "react";
import burgerNav from "../assets/images/burger-nav.png";
import languageNavBurger from "../assets/images/lang-nav-burger.png";

const BurgerNav = () => {
  const [show, setShow] = useState(false);
  const showBurgerNav = () => {
    setShow(true);
  };
  const dontShowBurgerNav = () => {
    setShow(false);
  };
  return (
    <div className="container-nav-burger">
      {!show ? (
        <img
          src={burgerNav}
          alt=""
          className="burger-nav"
          onClick={showBurgerNav}
        />
      ) : (
        ""
      )}

      {show ? (
        <div className="wrapper-nav-burger">
          <div className="container-text-burger">
            <p className="close-nav-burger" onClick={dontShowBurgerNav}>
              x
            </p>
            <p className="text-language-burger">
              <img src={languageNavBurger} alt="" className="img-nav-burger" />
              US/EN
            </p>
          </div>
          <div className="container-text2-burger">
            <p className="text3-burger-nav">Login/SignUp</p>
            <p className="text2-burger-nav">Home</p>
            <p className="text2-burger-nav">About</p>
            <p className="text2-burger-nav">Trade</p>
            <p className="text2-burger-nav">Invesment</p>
            <p className="text2-burger-nav">Tourism</p>
            <p className="text2-burger-nav">Regional Cluster</p>
            <p className="text2-burger-nav">News & Publications</p>
            <p className="text2-burger-nav">FAQs</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BurgerNav;
