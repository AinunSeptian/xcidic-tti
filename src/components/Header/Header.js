import classes from "./Header.module.css";
import NavVector1 from "../../assets/img/nav-vector-1.png";
import NavVector2 from "../../assets/img/nav-vector.png";
import MenuNav from "./MenuNav/MenuNav";
import Dropdown from "../UI/NavBar/DropDown";
import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setModalOpen(false));
  return (
    <header className={classes.header}>
      {isModalOpen && (
        <div
          ref={modalRef}
          style={{
            width: "72%",
            position: "absolute",
            marginLeft: 0,
            zIndex: 3,
            top: 0,
            height: 800,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>
      )}

      <a className={classes.logo}>
        <p className={classes.textlogo}>
          TTI <span className={classes.titik}>.</span>
        </p>
      </a>

      <MenuNav
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        modalRef={modalRef}
      />

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
            <Dropdown title='Regional Cluster' />
          </li>
          <li>
            {/* <a href="#" className={classes["nav-text-vector"]}>
              News & Publications
              <img
                src={NavVector1}
                alt="down arrow"
                className={classes["img-nav-vector-1"]}
              />
            </a> */}
            <Dropdown title='News & Publications' />
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
