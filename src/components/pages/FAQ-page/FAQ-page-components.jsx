import styled from 'styled-components';

import backgroundImage from 'assets/images/faq-background.svg';

export const Wrapper = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 12%;
  top: 12.5rem;
  z-index: 0;
`;

export const HeaderWrapper = styled.div`
  padding: 0rem 10%;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  max-width: 136.6rem;

  ${({ theme }) => theme.mobile`
    background-color: #F2F1F1;
  `}
`;

export const Test = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Body = styled.div`
  background-color: #f2f1f1;
  height: 77rem;
  width: 100%;
  padding: 10rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 9%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: 20% 80%;

  ${({ theme }) => theme.mobile`
    height: unset;
    padding: 10rem 7%;
    // background-repeat: repeat;
    background-position: 90% 70%;
  `}
`;

export const Heading = styled.h5`
  color: #13182b;
  font-size: 3.2rem;
  font-weight: 600;
  margin-top: 2.7rem;
  margin-bottom: 3.2rem;
  z-index: 1;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.mobile`
    font-size: 2rem;
    width: 100%;
    white-space: nowrap;
  `}
`;

export const ContainersWrapper = styled.div`
  display: flex;
  gap: 5rem;
  z-index: 1;
  position: relative;
  width: 100%;
  display: flex;

  ${({ theme }) => theme.mobile`
    flex-direction: column;
  `}
`;

export const GetInfoBox = styled.div`
  width: 44.4rem;
  height: 44.3rem;
  border-radius: 4rem;
  background-color: #ffffff;
  padding: 3.2rem 7rem;

  ${({ theme }) => theme.mobile`
      width: 100%;
      padding: 2rem 1.8rem;
      height: 39.6rem;
      
    `}
`;

export const GetInfoHeading = styled.p`
  color: #13182b;
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;

  ${({ theme }) => theme.mobile`
      padding-left: 2rem 1.8rem;
    `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* gap: 1.6rem; */
  margin-top: 1.5rem;

  ${({ theme }) => theme.mobile`
      & > * {
        margin-bottom: 1.6rem;
      }
  `}
`;

export const Button = styled.button`
  width: 30rem;
  height: 4.6rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #55aa79;
  color: #55aa79;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, #55aa79 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
  margin-top: 0.4rem;

  &:hover {
    background-position: left top;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 100%;
    margin-top: 0.4rem;
  `}
`;

export const FaqBoxWrapper = styled.div`
  width: 44.4rem;
  height: 48.8rem;
  /* padding: 2.4rem; */
  background-color: #ffffff;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mobile`
      width: 100%;
      margin-bottom: 3.7rem;
      padding: 0rem;
    `}
`;

export const FaqBox = styled.div`
  width: 90%;
  height: 90%;
  background-color: #ffffff;
  padding: 3.2rem 2rem;
  padding-right: 4.4rem;
  overflow-y: auto;
  scroll-padding: 50px 0 0 50px;

  & > :last-child {
    margin-bottom: 3em;
  }

  ${({ theme }) => theme.mobile`
      width: 100%;
      margin-bottom: 9.7rem;
      border-radius: 4rem;
      padding-right: 3.2rem;
    `}

  ::-webkit-scrollbar {
    width: 0.7rem;
    padding: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
    width: 0.1rem;
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: pink;
    max-height: 2rem;
    border-radius: 1.2rem;
  }
`;
