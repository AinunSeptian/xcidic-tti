import React, { useState } from "react";
import "./DropDown.css";
import arrowDown from "../../../assets/img/nav-vector-1.png";
export default function ModalNav(props) {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        {props.title}
        <img src={arrowDown} alt="down arrow" className="img-vector" />
      </button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}
