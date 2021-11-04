import styled from 'styled-components';

export const SubscribeInputWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 0rem;
  justify-content: center;
`;

export const Input = styled.input`
  height: 5.5rem;
  outline: none;
  border-radius: 4rem 0rem 0rem 4rem;
  border: 0.4rem solid ${({ color }) => color};
  padding-left: 2.2rem;
  font-size: 1.6rem;
  color: ${({ color }) => color};
  box-sizing: border-box;
  background: none;
  width: 30rem;
`;

export const Button = styled.button`
  height: 5.5rem;
  background: ${({ color }) => color};
  color: ${({ color }) => color};
  outline: none;
  border: none;
  color: #13182b;
  padding: 2rem 4rem 2rem 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 0rem 4rem 4rem 0rem;
  cursor: pointer;
`;

export const MailSentBox = styled.div`
  border-radius: 4rem;
  background: ${({ color }) => color};
  color: #13182b;
  height: 5.5rem;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  text-align: center;
`;

export const SuccessImg = styled.img`
  height: 40%;
  margin-left: 1rem;
`;
