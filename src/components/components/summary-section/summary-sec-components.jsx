import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 48rem;
  background-color: #f2f1f1;
  position: relative;
`;

export const BackgroundImage = styled.img`
  ${({ theme }) => theme.mobile`
    display: none;
 `}
`;

export const PinkButton = styled.button`
  width: 26rem;
  height: 26rem;
  border-radius: 50%;
  border: 0.8rem solid pink;
  position: absolute;
  color: pink;
  left: 18.4rem;
  top: -5rem;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 600;

  background: linear-gradient(to left, pink 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: left bottom;
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
  position: absolute;
  height: 40.7rem;
  right: 10%;
  bottom: -8.7rem;

  ${({ theme }) => theme.mobile`
    position: unset;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%; 
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
  top: 1rem;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 600;

  background: linear-gradient(to right, #55aa79 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left bottom;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 21.2rem;
    height: 8.4rem;
    position: unset;
    font-size: 1.4rem;
    margin-top: 11rem;
    margin-right: -1rem;
  `}
`;

export const ArrowImage = styled.img`
  position: absolute;
  bottom: 6rem;
  right: 47%;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: rotate(30deg);
  }

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;
