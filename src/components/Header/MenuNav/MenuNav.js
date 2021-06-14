import React, { useState, useRef, Fragment } from 'react';
import classes from './MenuNav.module.css';
import MenuNavIcon from '../../../assets/img/menu-nav-icon.svg';
import languageNavMenu from '../../../assets/img/lang-nav-menu-icon.png';

import useOnClickOutside from '../../../hooks/useOnClickOutside';

const MenuNav = () => {
  const modalRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(modalRef, () => setModalOpen(false));

  return (
    <div
      onClick={() => setModalOpen(true)}
      className={classes.containerNavMenu}
    >
      {!isModalOpen && (
        <img
          src={MenuNavIcon}
          alt=''
          className={classes.menuNav1}
          onClick={setModalOpen}
        />
      )}

      {isModalOpen && (
        <Fragment>
          <div ref={modalRef} className={classes.front}>
            <div className={classes.wrapperNavMenu}>
              <p>
                <img src={languageNavMenu} alt='world' />
                US/EN
              </p>
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
        </Fragment>
      )}
    </div>
  );
};

export default MenuNav;
