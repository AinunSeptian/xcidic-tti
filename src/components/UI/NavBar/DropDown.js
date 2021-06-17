import React, { useState } from 'react';
import classes from './DropDown.module.css';
import asd from '../../../assets/img/nav-vector-1.png';
export default function ModalNav(props) {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>
        {props.title}
        <img src={asd} alt='down arrow' className={classes['img-vector']} />
      </button>
      <ul className={classes['dropdown-content']}>
        <li>
          <a href='#'>Link 1</a>
        </li>

        <li>
          <a href='#'>Link 2</a>
        </li>
        <li>
          <a href='#'>Link 3</a>
        </li>
      </ul>
    </div>
  );
}
