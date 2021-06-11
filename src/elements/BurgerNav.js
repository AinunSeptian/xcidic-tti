import React, { useState } from "react";
import classes from "../components/Header/header.module.css";
import BurgerNavIcon from "../assets/img/burger-nav-icon.png";
import languageNavBurger from "../assets/img/lang-nav-burger-icon.png";

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
          src={BurgerNavIcon}
          alt=""
          className={classes.burgerNav1}
          onClick={showBurgerNav}
        />
      ) : (
        ""
      )}

      {show ? (
        <div className={classes.wrapperNavBurger}>
          <div className={classes.containerTextBurger}>
            <p className={classes.closeNavBurger} onClick={dontShowBurgerNav}>
              x
            </p>
            <p className={classes.textLanguageBurger}>
              <img
                src={languageNavBurger}
                alt=""
                className={classes.imgNavBurger}
              />
              US/EN
            </p>
          </div>
          <div className={classes.containerText2Burger}>
            <p className={classes.text3BurgerNav}>Login/SignUp</p>
            <p className={classes.text2BurgerNav}>Home</p>
            <p className={classes.text2BurgerNav}>About</p>
            <p className={classes.text2BurgerNav}>Trade</p>
            <p className={classes.text2BurgerNav}>Invesment</p>
            <p className={classes.text2BurgerNav}>Tourism</p>
            <p className={classes.text2BurgerNav}>Regional Cluster</p>
            <p className={classes.text2BurgerNav}>News & Publications</p>
            <p className={classes.text2BurgerNav}>FAQs</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BurgerNav;
