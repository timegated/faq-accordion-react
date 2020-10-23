import React, { useState } from 'react';
import styles from './Slider.module.css';
import iconArrow from '../../images/icon-arrow-down.svg';

const Slider = () => {
  const [questions, showQuestions] = useState([
    {
      id: 0,
      text: 'How many team members can I invite?',
      copy: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
      'visible': false
    },
    {
      id:1,
      text: 'What is the maximum file upload size?',
      copy: 'No more than 2GB. All files in your account must fit your allotted storage space.',
      'visible': false
    },
    {
      id:2,
      text: 'How do I reset my password?',
      copy: 'Click “orgot password” from the login page or “Change password” from your profile page. A reset link with be mailed to you.',
      'visible': false
    },
    {
      id:3,
      text: 'Can I cancel my subscription?',
      copy: 'Yes! Send us a message and we\'ll process your request no questions asked.',
      'visible': false
    },
    {
      id: 4,
      text: 'Do you provide additional support?',
      copy: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
      'visible': false
    },
  ])



  const handleClick = (e, id) => {
    let updatedQuestions = [...questions]
    let index = updatedQuestions.findIndex(item => id === item.id);
    updatedQuestions[index]['visible'] = !updatedQuestions[index]['visible'];
    showQuestions(updatedQuestions);
    e.preventDefault();
  };

  return (
    <>
      {questions.map((question, index) => {
        return <li className={styles.ListChild} key={question.id}>
          {question.text}
          <button className={styles.ListButton} onClick={(e) => handleClick(e, question.id)}>
          <img className={styles.ListIcon} src={iconArrow} alt="arrow down" />  
          </button>
          {questions[index]['visible'] ? <p className={styles.CopyText}>{question.copy}</p> : ''}
        </li>
      })}
    </>
  )
};

export default Slider;
