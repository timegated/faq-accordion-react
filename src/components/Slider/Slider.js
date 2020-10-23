import React, { useState } from 'react';
import styles from './Slider.module.css';
import iconArrow from '../../images/icon-arrow-down.svg';

const Slider = () => {
  const [clicked, setClicked] = useState(false);

  const questions = [
    {
      id: 0,
      text: 'How many team members can I invite?',
      copy: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    {
      id:1,
      text: 'What is the maximum file upload size?',
      copy: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
      id:2,
      text: 'How do I reset my password?',
      copy: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link with be mailed to you.'
    },
    {
      id:3,
      text: 'Can I cancel my subscription?',
      copy: 'Yes! Send us a message and we\'ll process your request no questions asked.',
    },
    {
      id: 4,
      text: 'Do you provide additional support?',
      copy: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    },
  ];


  const handleClick = (e) => {
    setClicked(clicked => !clicked);
    e.preventDefault();
  };

  return (
    <>
      {questions.map(question => {
        return <li className={styles.ListChild} key={question.id}>
          {question.text}
          <button className={styles.ListButton} onClick={handleClick}>
          <img className={styles.ListIcon} src={iconArrow} alt="arrow down" />  
          </button>
          {clicked ? <p className={styles.CopyText}>{question.copy}</p> : ''}
        </li>
      })}
    </>
  )
};

export default Slider;
