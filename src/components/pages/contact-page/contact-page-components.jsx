import styled from 'styled-components';

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
`;

export const Body = styled.div`
  display: flex;
  padding-top: 9.8rem;
`;

export const LeftWrapper = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 66rem;
`;

export const RightWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10rem;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  top: 13rem;
  left: 1%;
`;

export const Heading = styled.h5`
  color: #13182b;
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 3.1rem;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 40rem;
  gap: 1.6rem;
  padding-right: 1rem;
  justify-content: space-between;
`;

export const TitleAndFormWrapper = styled.div`
  margin-right: 10rem;
`;

export const ShareText = styled.p`
  color: #767c8b;
  font-size: 1.4rem;
  font-weight: 400;
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
    background-position: left bottom;
    color: #13182b;
  }
`;
