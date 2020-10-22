import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import styles from './Accordion.module.css';
import womanDesktop from '../../images/illustration-woman-online-desktop.svg';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(clicked => !clicked);
  
    console.log(clicked)
    e.preventDefault();
  };
  
  return (
    <div className={styles.Container}>
      <div className={styles.ImgContainer}>
        <img src={womanDesktop} alt="woman accessing internet with desktop" srcSet=""/>
      </div>
      <div className={styles.FaqContainer}>
        <h1 className={styles.FaqTitle}>FAQ</h1>
        <ul>
          <Slider handleClick={handleClick} text="How many team members can I invite?" />
        </ul>
      </div>
    </div>
  )
}

export default Accordion
