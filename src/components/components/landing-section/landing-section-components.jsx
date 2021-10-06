import styled from "styled-components";

export const Wrapper = styled.div`
  height: 76.8rem;
  background-color: #f2f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 79%;
  top: 0.1rem;
  z-index: 1;
`;

export const BackgroundImage = styled.img`
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 0;
`;

export const Content = styled.div`
  width: 50%;
  z-index: 1;
`;

export const Heading = styled.h2`
  max-width: 53.4rem;
  color: #13182b;
  font-size: 4.6rem;
  font-weight: 500;
  margin-bottom: 2.8rem;
`;

export const SubHeading = styled.h3`
  color: #767c8b;
  max-width: 44.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 9.4rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 35.2rem;
  justify-content: space-between;
`;

export const LearnMore = styled.div`
  width: 9.6rem;
  height: 2rem;
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 600;
  background-image: url("../../../assets/icons/circle-blue.svg");
  position: relative;
`;

export const CircleImage = styled.img`
  position: absolute;
  top: -3.3rem;
  right: -2.4rem;
`;

export const LearnMoreWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  width: 22.9rem;
  height: 6rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #55aa79;
  border-color: #55aa79;
  color: #55aa79;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(
    to right,
    #55aa79 50%,
    rgba(255, 255, 255, 0) 30%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;

  &:hover {
    background-position: left bottom;
    color: #13182b;
  }
`;
