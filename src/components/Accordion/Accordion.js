import React from 'react';
import Slider from '../Slider/Slider';
import styles from './Accordion.module.css';
import womanDesktop from '../../images/illustration-woman-online-desktop.svg';

const Accordion = () => {

  
  return (
    <div className={styles.Container}>
      <div className={styles.ImgContainer}>
        <img src={womanDesktop} alt="woman accessing internet with desktop" srcSet=""/>
      </div>
      <div className={styles.FaqContainer}>
        <h1 className={styles.FaqTitle}>FAQ</h1>
        <ul>
          <Slider text="How many team members can I invite?" copy=" You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan." />
          <Slider text="What is the maximum file upload size?" copy="No more than 2GB. All files in your account must fit your allotted storage space." />
          <Slider text="How do I reset my password?" copy=" Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you." />
          <Slider text="Can I cancel my subscription?" copy="Yes! Send us a message and we’ll process your request no questions asked." />
          <Slider text="Do you provide additional support?" copy="Chat and email support is available 24/7. Phone lines are open during normal business hours." />
        </ul>
      </div>
    </div>
  )
}

export default Accordion
