import React, { useState } from 'react';
import styled from 'styled-components';
import iconArrow from '../images/icon-arrow-down.svg';

const ListParent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListChild = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 1.5rem;
  width: 75%;
  border-bottom: 1px solid var(--divider-color);
`;

const ListIcon = styled.span`
`;

const ListButton = styled.a`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;


const Slide = () => {
  const [clicked, setClicked] = useState({
    clicked: false
  });

  const handleClick = (e) => {
    setClicked({ clicked: true });
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
