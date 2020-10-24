import styled from 'styled-components';
import backgroundDesktop from '../../images/bg-pattern-desktop.svg';
// App
export const AccordionContainer = styled.div`
display: flex;
align-items: center;
box-shadow: 1px 1px 10px #000;

@media (min-width: 768px) {
  background-color: #FFF;
  background-image: url(${backgroundDesktop});
  background-size: left;
  background-repeat: no-repeat;
  background-position: -300px -100px;
  width: 75rem;
  height: 85vh;
  border-radius: 30px;
  margin: 5rem auto;
}
`;

export const FaqContainer = styled.div`
  flex: 1 0 50%;
  height: 65vh;
`;

export const FaqTitle = styled.h1`
  color: var(--desat-blue);
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: var(--font-weight-2);
`;

export const ImgContainer = styled.div`
  flex: 1 0  50%;
`;

export const DesktopBox = styled.img`
  position: fixed;
  top: 45%;
  left: 17%;
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
  animation: 1s ease-in slidedown;

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