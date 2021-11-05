import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
`;

export const Card = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #ffffff;
  border-radius: 1rem;
  border: 1px solid gray;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const Value = styled.div`
  font-size: 1.2rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
  width: 12rem;
  justify-content: flex-start;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 5rem;
  height: 2rem;
  font-size: 1.2rem;
  background-color: pink;
  outline: none;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 0.5rem;

  &:hover {
    background-color: #f594a4;
  }
`;

export const UserTitle = styled.p`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  width: 10rem;
  height: 5rem;
  border-radius: 1rem;
  border: 2px solid pink;
  color: pink;
  outline: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 4.6rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid pink;
  color: pink;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, pink 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left top;
    color: #13182b;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */

  & > * {
    margin-bottom: 1rem;
  }
`;
