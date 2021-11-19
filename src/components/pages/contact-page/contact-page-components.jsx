import styled from 'styled-components';
import backgroundImage from 'assets/images/contact-page-background.svg';
import mobileBackground from 'assets/icons/contact-background-mobile.svg';

export const Wrapper = styled.div`
  background-color: #f2f1f1;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 0rem 10%;
  background-color: #fff;
  z-index: 10;
  max-width: 136.6rem;

  ${({ theme }) => theme.mobile`
    background-color: #F2F1F1;
    padding: 0rem 7%;
  `}
`;

export const Body = styled.div`
  display: flex;
  padding-top: 9.8rem;
  width: 100%;
  justify-content: center;
  background-color: #f2f1f1;
  ${({ theme }) => theme.mobile`
    flex-direction: column;
    
  `}
`;

export const LeftWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 60rem;
  width: 100%;
  padding-left: 2rem;

  ${({ theme }) => theme.mobile`
    align-items: center;
  `};
`;

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10rem;
  width: 100%;

  ${({ theme }) => theme.mobile`
    height: 35.5rem;
    padding: 2rem 0rem;
    justify-content: center;
    background-image: url(${mobileBackground});
    background-repeat: no-repeat;
    // background-size: 100% 150%;
    box-sizing: content-box;
    padding-bottom: 6rem;
    `};
`;

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  top: 11rem;
  left: 1%;

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

export const Heading = styled.h5`
  color: #13182b;
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 3.1rem;

  ${({ theme }) => theme.mobile`
    font-size: 2.2rem;
    white-space: nowrap;
  `}
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 40rem;
  gap: 1.6rem;
  padding-right: 1rem;
  justify-content: space-between;

  ${({ theme }) => theme.mobile`
    & > * {
      margin-bottom: 1.4rem;
    }
  `}
`;

export const TitleAndFormWrapper = styled.div`
  margin-right: 10rem;

  ${({ theme }) => theme.mobile`
    margin: unset;
    padding: 0rem 7%;
  `}
`;

export const ShareText = styled.p`
  color: #767c8b;
  font-size: 1.4rem;
  font-weight: 400;

  ${({ theme }) => theme.mobile`
      font-size: 1.2rem;
      white-space: nowrap;
  `}
`;

export const SubmitButton = styled.button`
  width: 100%;
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

  &:hover {
    background-position: left top;
    color: #13182b;
  }
`;
