import React, { useState } from 'react';
import classes from './DropDown.module.css';
import arrowDown from '../../Header/assets/img/dropdown-nav.png';
export default function ModalNav(props) {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>
        {props.title}
        <img src={arrowDown} alt='down arrow' className='img-vector' />
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
