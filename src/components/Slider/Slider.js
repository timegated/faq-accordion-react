import React from 'react';
import styles from './Slider.module.css';
import iconArrow from '../../images/icon-arrow-down.svg';

const Slider = ({ text, handleClick }) => {
  return (
    <>
        <li className={styles.ListChild}>
          {text}
          <button onClick={handleClick}>
           ClickMe
          </button>
        </li>
    </>
  )
};

export default Slider;
