import styled from 'styled-components';
import backgroundImage from 'assets/images/summary-background.svg';

export const Wrapper = styled.div`
  height: 41.8rem;
  background-color: #f2f1f1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${({ theme }) => theme.mobile`
  height: 33rem;
 `};
`;

export const BackgroundImage = styled.img`
  margin-top: 8.7rem;
  ${({ theme }) => theme.mobile`
    display: none;
    position: absolute;
 `};
`;

export const PinkButton = styled.button`
  width: 26rem;
  height: 26rem;
  border-radius: 50%;
  border: 0.8rem solid pink;
  position: absolute;
  color: pink;
  left: 18.4rem;
  top: 3.7rem;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;

  background: linear-gradient(to left, pink 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: left top;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: right bottom;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 20.7rem;
    height: 20.7rem;
     position: unset;
     font-size: 1.4rem;
  `}
`;

export const BackgroundWrapper = styled.div`
  position: relative;
  height: 40.7rem;
  margin-top: 5rem;

  ${({ theme }) => theme.mobile`
    height: 40.7rem;
    position: unset;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%; 
    padding-top: 10rem;
  `}
`;

export const GreenButton = styled.button`
  width: 26rem;
  height: 9rem;
  border-radius: 40rem;
  border: 0.7rem solid #55aa79;
  position: absolute;
  color: #55aa79;
  left: 73.5rem;
  top: 8.5rem;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 600;

  background: linear-gradient(to right, #55aa79 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right top;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left top;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 18.2rem;
    height: 8.4rem;
    position: unset;
    font-size: 1.4rem;
    margin-top: 7.6rem;
    // margin-right: -1rem;
  `}
`;

export const ArrowImage = styled.img`
  position: absolute;
  bottom: -3rem;
  right: 47%;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: rotate(30deg);
  }

  ${({ theme }) => theme.mobile`
    // display: none;
    width: 17%;
    right: 44%;
    bottom: -1rem;
    transform: translate(180deg)
  `}
`;

export const HalfCircle = styled.img`
  position: absolute;
  width: 18.2rem;
  top: -1.4rem;
  left: 0rem;
  display: none;

  ${({ theme }) => theme.mobile`
    display: unset;
  `}
`;

export const Relative = styled.div`
  ${({ theme }) => theme.mobile`
 position: relative;
`}
`;

export const LowerBack = styled.img`
  position: absolute;
  display: none;
  width: 100%;
  bottom: 0rem;
  height: 13.3rem;
  object-fit: cover;

  ${({ theme }) => theme.mobile`
 display: block;
`}
`;

export const BlueHorizontal = styled.img`
  display: none;
  position: absolute;
  /* height: 13rem; */
  width: 95%;

  ${({ theme }) => theme.mobile`
 display: block;
`}
`;

export const RedHorizontal = styled.img`
  display: none;
  position: absolute;
  bottom: -4.5rem;
  /* height: 13rem; */
  width: 95%;

  ${({ theme }) => theme.mobile`
 display: block;
`}
`;
