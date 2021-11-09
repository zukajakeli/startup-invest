import styled from 'styled-components';

import background from 'assets/images/auth-background.svg';

export const Wrapper = styled.form`
  width: 53.6rem;
  height: 41.8rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  background: url(${background}) no-repeat #ffffff;
  background-position: 45% 90%;
  padding: 4.6rem 9.2rem;
  position: relative;

  ${({ theme }) => theme.mobile`
    padding: 2rem;
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
  margin-bottom: 5.2rem;

  ${({ theme }) => theme.mobile`
    text-align: center;
    font-size: 2.2rem;
  `}
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
  margin-top: 1.5rem;
  background-color: #ffffff;

  &:hover {
    background-position: left top;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 100%;
  `}
`;

export const BackButton = styled.img`
  position: absolute;
  left: 1.9rem;
  cursor: pointer;
`;
