import React, { useState, useRef } from "react";
import classes from "./MenuNav.module.css";
import MenuNavIcon from "../../../assets/img/menu-nav-icon.svg";
import languageNavMenu from "../../../assets/img/lang-nav-menu-icon.png";

import useOnClickOutside from "../../../hooks/useOnClickOutside";

const MenuNav = ({ isModalOpen, setModalOpen, modalRef }) => {
  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className={classes.containerNavMenu}
      >
        {isModalOpen === false ? (
          <img
            src={MenuNavIcon}
            alt=""
            className={classes.menuNav1}
            onClick={setModalOpen}
          />
        ) : (
          ""
        )}

        {isModalOpen && (
          <>
            <div ref={modalRef} className={classes.front}>
              <div className={classes.wrapperNavMenu}>
                <div className={classes.wrapperTextLanguage}>
                  <p>
                    <img src={languageNavMenu} alt="world" />
                    US/EN
                  </p>
                </div>
                <ul>
                  <li>Login/SignUp</li>
                  <li>Home</li>
                  <li>About</li>
                  <li>Trade</li>
                  <li>Investment</li>
                  <li>Tourism</li>
                  <li>Regional Cluster</li>
                  <li>News & Publications</li>
                  <li>FAQs</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className={classes.backdrop}></div>
          </>
        )}
      </div>
    </>
  );
};

export default MenuNav;
