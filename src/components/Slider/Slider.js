import React, { useState } from 'react';
import styles from './Slider.module.css';
import iconArrow from '../../images/icon-arrow-down.svg';

const Slider = ({ text, copy }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(clicked => !clicked);
  
    e.preventDefault();
  };
  console.log(clicked);
  return (
    <>
        <li className={styles.ListChild}>
          {text}
          <button className={styles.ListButton} onClick={handleClick}>
          <img className={styles.ListIcon} src={iconArrow} alt="arrow down" />
        </button>
        {clicked ? <p>{copy}</p> : ''}
        </li>
    </>
  )
};

export default Slider;
