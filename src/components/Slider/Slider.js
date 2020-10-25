import React, { useState } from 'react';
import iconArrow from '../../images/icon-arrow-down.svg';
import { ListParent, ListChild, ListLink, ListIcon, ListIconActive, CopyText } from '../styled/styled';

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
    // I only want the currentIndex of the item to be true.
    // All other items: previous and the indexes after, to be false.

    let previousIndex = id - 1;
    let precedingIndex = id + 1;
    let updatedQuestions = [...questions]
    let index = updatedQuestions.findIndex(item => id === item.id);

    if (previousIndex < 0) {
      // The first and last elements of the array need to show if there is no previous or preceding index
      // If there is no preceding/previous index, set the current element's visible property to 'true'.
      updatedQuestions[index]['visible'] = !updatedQuestions[index]['visible'];
      updatedQuestions[precedingIndex]['visible'] = false;
      console.log('No previous index or preceding index', index);
    } else if (precedingIndex > 4) {
      updatedQuestions[index]['visible'] = !updatedQuestions[index]['visible'];
      updatedQuestions[previousIndex]['visible'] = false;
    }
    else if (previousIndex > 0 || precedingIndex < 4) {
      updatedQuestions[previousIndex]['visible'] = false;
      updatedQuestions[precedingIndex]['visible'] = false;
      updatedQuestions[index]['visible'] = !updatedQuestions[index]['visible'];
    }

    showQuestions(updatedQuestions);
    e.preventDefault();
  };

  console.log(questions);

  return (
    <>
      <ListParent>
      {questions.map((question, index) => {
        return <ListChild key={question.id}>
          <ListLink href="#" rel="noopener noreferrer" onClick={(e) => handleClick(e, question.id)} >
            {question.text}
          {questions[index]['visible'] ? <ListIconActive src={iconArrow} alt="arrow up" />: <ListIcon src={iconArrow} alt="arrow down" /> }  
          </ListLink>
          {questions[index]['visible'] ? <CopyText>{question.copy}</CopyText> : ''}
        </ListChild>
      })}
      </ListParent>
    </>
  )
};

export default Slider;
