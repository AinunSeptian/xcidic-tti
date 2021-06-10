import React from 'react';
import classes from './header.module.css';
import NavVector1 from '../../assets/img/nav-vector-1.png';
import NavVector2 from '../../assets/img/nav-vector.png';
import logoNavbar from '../../assets/img/vector-navbar-tti.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <a className={classes.logo}>
        <img src={logoNavbar} alt='TTI Logo' className={classes.image} />
      </a>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Trade</a>
          </li>
          <li>
            <a href='#'>Investment</a>
          </li>
          <li>
            <a href='#'>Tourism</a>
          </li>
          <li>
            <a href='#' className={classes['nav-text-vector']}>
              Regional Cluster
              <img
                src={NavVector1}
                alt='down arrow'
                className={classes['img-nav-vector-1']}
              />
            </a>
          </li>
          <li>
            <a href='#' className={classes['nav-text-vector']}>
              News & Publications
              <img
                src={NavVector1}
                alt='down arrow'
                className={classes['img-nav-vector-1']}
              />
            </a>
          </li>
          <li>
            <a href='#'>FAQs</a>
          </li>
          <li>
            <a href='#' className={classes['nav-text-vector']}>
              <img
                src={NavVector2}
                alt='down arrow'
                className={classes['img-nav-vector-2']}
              />
              US/EN
            </a>
          </li>
          <li>
            <button className={classes.button}>Login/Signup</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
