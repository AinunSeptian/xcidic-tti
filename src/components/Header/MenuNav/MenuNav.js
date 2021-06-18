import React, { useState, useRef, Fragment } from 'react';
import classes from './MenuNav.module.css';
import MenuNavIcon from '../assets/img/menu-nav-icon.svg';
import languageNavMenu from '../assets/img/nav-vector.png';

import useOnClickOutside from '../../../hooks/useOnClickOutside';

const MenuNav = () => {
  const modalRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [dropDown, setDropDown] = useState('');

  useOnClickOutside(modalRef, () => setModalOpen(false));

  const wholeList = (
    <ul>
      <li>Login/SignUp</li>
      <li>Home</li>
      <li>About</li>
      <li>Trade</li>
      <li>Investment</li>
      <li>Tourism</li>
      <li onClick={() => setDropDown('region')}>Regional Cluster</li>
      <li onClick={() => setDropDown('news')}>News & Publications</li>
      <li>FAQs</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );

  const regionList = (
    <ul>
      <li onClick={() => setDropDown('')}>Click me !!!</li>
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
    </ul>
  );

  const newsList = (
    <ul>
      <li onClick={() => setDropDown('')}>Click me !!!  </li>
      <li>Link 4</li>
      <li>Link 5</li>
      <li>Link 6</li>
    </ul>
  );

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
              {!dropDown
                ? wholeList
                : dropDown === 'region'
                ? regionList
                : newsList}
            </div>
          </div>
          <div className={classes.backdrop}></div>
        </Fragment>
      )}
    </div>
  );
};

export default MenuNav;
