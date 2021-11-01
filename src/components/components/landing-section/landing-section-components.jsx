import styled from 'styled-components';

const width = window.innerWidth;
const height = window.innerHeight;
const circleWidth = width * 0.12;

console.log(width);

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #f2f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  position: relative;

  ${({ theme }) => theme.mobile`
    // height: 73.6rem;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 0rem;
   
   `}
`;

export const LogoMobile = styled.img`
  display: none;
  width: 16.6rem;
  height: 3.38rem;
  margin-bottom: 6.8rem;

  ${({ theme }) => theme.mobile`
    display: block;
  `}
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 79%;
  top: 0.1rem;
  z-index: 10;

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

export const BackgroundImage = styled.img`
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 0;
`;

export const Arrow = styled.img`
  position: absolute;
  z-index: 5;
  right: 15%;
  bottom: 4rem;
  transform: rotate(170deg);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  width: 11rem;

  &:hover {
    transform: rotate(200deg);
  }

  ${({ theme }) => theme.mobile`
    right: 20rem;
    width: 7.2rem;
    height: 4.4rem;
    bottom: 3rem;
  `}
`;

export const Circle = styled.img`
  position: absolute;
  z-index: 1;
  right: 18.5rem;
  bottom: 0rem;
  width: ${width * 0.11}px;

  ${({ theme }) => theme.mobile`
    right: 18rem;
    width: 11.7rem;
    height: 10.7rem;
  `}
`;

export const Content = styled.div`
  width: 50%;
  z-index: 1;

  ${({ theme }) => theme.mobile`
     width: 77%;
     height: 59.6rem;
     background-color: #ffffff;
     border-radius: 0rem 0rem 6rem 0rem;
     padding: 10rem 2.8rem 3.9rem 3.6rem;
  `}
`;

export const Heading = styled.h2`
  max-width: 54.4rem;
  color: #13182b;
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 2.8rem;

  ${({ theme }) => theme.mobile`
     font-size: 2.4rem;
     line-height: 3.7rem;
  `}
`;

export const SubHeading = styled.h3`
  color: #767c8b;
  max-width: 44.2rem;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 9.4rem;

  ${({ theme }) => theme.mobile`
     font-size: 1.6rem;
     line-height: 2.2rem;
     margin-bottom: 7.2rem;
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 30.2rem;
  justify-content: space-between;
`;

export const LearnMore = styled.div`
  width: 9.6rem;
  height: 2rem;
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 600;
  background-image: url('../../../assets/icons/circle-blue.svg');
  position: relative;

  ${({ theme }) => theme.mobile`
     font-size: 1.4rem;
  `}
`;

export const CircleImage = styled.img`
  position: absolute;
  top: -3.3rem;
  right: -2.4rem;

  ${({ theme }) => theme.mobile`
     width: 5.3rem;
     height: 5.3rem;
     top: -2.3rem;
     right: 3rem;
  `}
`;

export const LearnMoreWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 17.6rem;
  height: 6rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #55aa79;
  border-color: #55aa79;
  color: #55aa79;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(
    to right,
    #55aa79 50%,
    rgba(255, 255, 255, 0) 30%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;

  &:hover {
    background-position: left top;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 15.1rem;
    font-size: 1.4rem;
    margin-right: 1.4rem;
  `}
`;
