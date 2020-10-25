import styled from 'styled-components';
import backgroundDesktop from '../../images/bg-pattern-desktop.svg';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
  desktopL: '2560px'
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

// App
export const Faq = styled.main`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
box-shadow: 1px 1px 10px #000;
padding: 5rem;
overflow-x: hidden;

@media ${device.laptopL} {
  flex-direction: row;
  background-color: #FFF;
  background-image: url(${backgroundDesktop});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: -100px 50px;
  width: 87%;
  max-width: 920px;
  min-width: 320px;
  border-radius: 30px;
  margin: 5rem auto;
}
`;

export const FaqContainer = styled.section`
  flex: 1 0 50%;
`;

export const FaqTitle = styled.h1`
  color: var(--desat-blue);
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: var(--font-weight-2);
`;

export const ImgContainer = styled.section`
  flex: 1 0 50%;
`;

export const WomanDesktop = styled.img`
  position: relative;
  top: 8px;
  @media ${device.laptopL} {
    left: -120px;
    bottom: 0;
  }
`;

export const DesktopBox = styled.img`
  display: block;
  position: absolute;
  top: 200px;
  left: -60px;
  z-index: 1000;
  animation: 3s infinite bounce;
  @keyframes bounce {
    50% {
      transform: translateY(3%);
    }
  }
`;

// Slider
export const ListParent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;



export const ListChild = styled.li`
  padding: 0.75rem;
  width: 65%;
  border-bottom: 1px solid var(--divider-color);
`;



export const ListLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: var(--text-color-1);
  cursor: pointer;
  &:hover {
    color: var(--soft-red);
  }
  
`;

export const ListIcon = styled.img`
  width: 15px;
  height: 10px;
`

export const ListIconActive = styled.img`
  width: 15px;
  height: 10px;
  transform: rotate(180deg);
`;

export const CopyText = styled.p`
  max-width: 32em;
  color: var(--text-color-2);
  animation: 0.5s ease-in slidedown;

  @keyframes slidedown {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;