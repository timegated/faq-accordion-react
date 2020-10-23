import React from 'react';
import Slider from '../Slider/Slider';
import womanDesktop from '../../images/illustration-woman-online-desktop.svg';
import { AccordionContainer, FaqContainer, FaqTitle, ImgContainer } from '../styled/styled';

const Accordion = () => {  
  return (
    <AccordionContainer>
      <ImgContainer>
        <img src={womanDesktop} alt="woman accessing internet with desktop" srcSet=""/>
      </ImgContainer>
      <FaqContainer>
        <FaqTitle>FAQ</FaqTitle>
          <Slider />
      </FaqContainer>
    </AccordionContainer>
  )
}

export default Accordion
