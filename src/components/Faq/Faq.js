import React from 'react';
import Slider from '../Slider/Slider';
import womanDesktop from '../../images/illustration-woman-online-desktop.svg';
import boxDesktop from '../../images/illustration-box-desktop.svg';
import { Faq, FaqContainer, FaqTitle, ImgContainer, WomanDesktop, DesktopBox } from '../styled/styled';

const FaqComponent = () => {  
  return (
    <Faq>
      <DesktopBox src={boxDesktop} alt="floating cube with at-icon" />
      <ImgContainer>
        <WomanDesktop src={womanDesktop} alt="woman accessing internet with desktop" />
      </ImgContainer>
      <FaqContainer>
        <FaqTitle>FAQ</FaqTitle>
          <Slider />
      </FaqContainer>
    </Faq>
  )
}

export default FaqComponent
