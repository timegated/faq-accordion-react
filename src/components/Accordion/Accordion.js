import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import styles from './Accordion.module.css';
import womanDesktop from '../../images/illustration-woman-online-desktop.svg';

const Accordion = () => {
  const [showAll, setShowAll] = useState('');
  
  return (
    <div className={styles.Container}>
      <div className={styles.ImgContainer}>
        <img src={womanDesktop} alt="woman accessing internet with desktop" srcSet=""/>
      </div>
      <div className={styles.FaqContainer}>
        <h1 className={styles.FaqTitle}>FAQ</h1>
        <ul>
          <Slider />
        </ul>
      </div>
    </div>
  )
}

export default Accordion
