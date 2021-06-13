import React, { useState } from "react";
import classes from "../../components/Header/header.module.css";
import BurgerNavIcon from "../../assets/img/burger-nav-icon.png";
import languageNavBurger from "../../assets/img/lang-nav-burger-icon.png";

const BurgerNav = () => {
  const [show, setShow] = useState(false);
  const showBurgerNav = () => {
    setShow(true);
  };
  const dontShowBurgerNav = () => {
    setShow(false);
  };
  return (
    <div className={classes.containerNavBurger}>
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
            <div className={classes.wrapperSideNav}>
              <p className={classes.text3BurgerNav}>Login/SignUp</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>Home</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>About</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>Trade</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>Invesment</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>Tourism</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>Regional Cluster</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>News & Publications</p>
            </div>
            <div className={classes.wrapperSideNav}>
              <p className={classes.text2BurgerNav}>FAQs</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BurgerNav;
