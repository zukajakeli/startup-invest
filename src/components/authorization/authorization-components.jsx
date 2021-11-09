import styled from 'styled-components';

import background from 'assets/images/auth-background.svg';

export const Wrapper = styled.form`
  width: 53.6rem;
  height: 59.2rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  background: url(${background}) no-repeat #ffffff;
  background-position: center;
  padding: 4.6rem 9.2rem;
  position: relative;

  ${({ theme }) => theme.mobile`
    padding: unset;
    width: 100%;
    padding: 2rem;
    height: 57.2rem;
  `}
`;

export const ExitButton = styled.img`
  position: absolute;
  cursor: pointer;
  right: 3.8rem;

  ${({ theme }) => theme.mobile`
   display: none;
  `}
`;

export const Heading = styled.h6`
  color: #13182b;
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.mobile`
   text-align: center;
  `}
`;

export const Text = styled.p`
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;

  ${({ theme }) => theme.mobile`
    width: 100%;
   text-align: center;
   display: block;
   margin-top: 1rem;
  `}
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.6rem;
`;

export const Hyperlink = styled.span`
  color: #fdb8b7;
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 0.2rem;
  cursor: pointer;
`;

export const Button = styled.button`
  height: 4.6rem;
  width: 35.2rem;
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
  background-color: #fff;

  &:hover {
    background-position: left top;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    margin: 0 auto;
    width: 100%;
  `}
`;

export const HorizontalLine = styled.div`
  height: 0.1rem;
  width: 35.2rem;
  background-color: #b8c3de;
  margin-top: 3.2rem;
`;

export const SocialAuthWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 1.4rem;
`;

export const SocialButton = styled.button`
  width: 16.8rem;
  height: 4.6rem;
  border-radius: 3rem;
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: ${({ google }) => (google ? '#FE7760' : '#5D80D1')};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcon = styled.img`
  margin-right: 1.5rem;
`;
