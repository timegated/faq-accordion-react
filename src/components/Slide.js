import React from 'react';
import styled from 'styled-components';
import iconArrow from '../images/icon-arrow-down.svg';

const ListParent = styled.ul`
  list-style: none;
`;

const ListChild = styled.li`

`;

const ListIcon = styled.span`

`;



const Slide = () => {
  return (
    <>
      <ListParent>
        <ListChild>How many team members can I invite?
          <ListIcon>
            <img src={iconArrow} alt="Arrow down"/>
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
