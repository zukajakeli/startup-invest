import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const Card = styled.div`
  width: 80%;
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

  &:hover {
    background-color: #f594a4;
  }
`;
