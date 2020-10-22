import React, { useState } from 'react';
import { ListParent, ListChild, ListIcon, ListButton } from './styled/styled';
import iconArrow from '../images/icon-arrow-down.svg';

const Slide = () => {
  const [clicked, setClicked] = useState({
    clicked: false
  });

  const handleClick = (e) => {
    setClicked({ ...clicked , clicked: true });
    e.preventDefault();
  };
  console.log(clicked);
  return (
    <>
      <ListParent>
        <ListChild>How many team members can I invite?
          <ListIcon>
            <ListButton onClick={handleClick}>
            <img src={iconArrow} alt="Arrow down"/>
            </ListButton>
          </ListIcon>
        </ListChild>
        <ListChild>What is the maximum file upload size?
        <ListIcon>
            <img src={iconArrow} alt="Arrow down"/>
          </ListIcon>
        </ListChild>
        <ListChild>How do I reset my password?
        <ListIcon>
            <img src={iconArrow} alt="Arrow down"/>
          </ListIcon>
        </ListChild>
        <ListChild>Can I cancel my subscription?
        <ListIcon>
            <img src={iconArrow} alt="Arrow down"/>
          </ListIcon>
        </ListChild>
        <ListChild>Do you provide additional support?
        <ListIcon>
            <img src={iconArrow} alt="Arrow down"/>
          </ListIcon>
        </ListChild>
      </ListParent>
    </>
  )
};

export default Slide;
