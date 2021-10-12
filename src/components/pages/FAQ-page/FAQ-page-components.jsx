import styled from 'styled-components';

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
`;

export const Test = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Body = styled.div`
  background-color: #f2f1f1;
  height: 100rem;
  padding: 10rem 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 17%;
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
`;

export const ContainersWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  z-index: 1;
  position: relative;
  width: 100%;
  display: flex;
`;

export const GetInfoBox = styled.div`
  width: 44.4rem;
  height: 44.3rem;
  border-radius: 4rem;
  background-color: #ffffff;
  padding: 3.2rem 7rem;
`;

export const GetInfoHeading = styled.p`
  color: #13182b;
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 1.5rem;
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
    background-position: left bottom;
    color: #13182b;
  }
`;

export const FaqBox = styled.div`
  width: 44.4rem;
  height: 48.8rem;
  border-radius: 4rem;
  background-color: #ffffff;
`;
