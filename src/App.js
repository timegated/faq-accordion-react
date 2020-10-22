import React from 'react'
import Slide from './components/Slide';
import { AccordionContainer, FaqContainer, FaqTitle, ImgContainer } from './components/styled/styled';
import womanDesktop from './images/illustration-woman-online-desktop.svg';



const App = () => {
  return (
      <AccordionContainer>
        <ImgContainer>
        <img src={womanDesktop} alt="Woman using a desktop"/>
      </ImgContainer>
      <FaqContainer>
        <FaqTitle>FAQ</FaqTitle>
        <Slide />
      </FaqContainer>
    </AccordionContainer>
  
  )
}

export default App;
