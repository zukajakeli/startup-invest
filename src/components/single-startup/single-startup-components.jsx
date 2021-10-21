import styled from 'styled-components';

import otherOffersBackground from 'assets/icons/other-offers-background.svg';
import getInfoBackground from 'assets/images/get-info-background.svg';

export const Wrapper = styled.div``;

export const HeaderWrapper = styled.div`
  padding: 0rem 10%;
  ${({ theme }) => theme.mobile`
    background-color: #F2F1F1;
  `}
`;

export const Body = styled.div`
  background-color: #f2f1f1;
  padding: 0rem 10%;
  padding-bottom: 5rem;
`;

export const LogoAndImage = styled.div`
  position: relative;
`;

export const MainImage = styled.img`
  border-radius: 4rem;
  width: 100%;
  height: 38rem;
  margin-top: 1.6rem;
  object-fit: cover;
`;

export const Logo = styled.img`
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  width: 8.8rem;
  height: 8.8rem;
  bottom: -5rem;
  left: 0rem;
  box-shadow: 0.3rem 0.3rem 0.8rem #00000029;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 9.3rem;
`;

export const DataWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const DataImage = styled.img`
  width: 3.4rem;
  height: 3.6rem;
  margin-right: 1rem;
`;

export const SingleData = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.6rem;
`;

export const DataName = styled.p`
  color: #767c8b;
  font-size: 2.4rem;
  font-weight: 500;
`;

export const DataFigure = styled.p`
  color: #13182b;
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const PreviewText = styled.p`
  color: #13182b;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.2rem;
  max-width: 72rem;
  max-height: 12.5rem;
  overflow-y: auto;
  margin-top: 2.3rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Heading = styled.h5`
  color: #13182b;
  font-size: 3.2rem;
  font-weight: 600;
  margin-top: 1.4rem;
`;

export const HorizontalLine = styled.div`
  height: 0.1rem;
  width: 100%;
  background: #b8c3de;
  margin-top: 3rem;
`;

export const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 9.3rem;
  margin-top: 3.3rem;
  gap: 2rem;

  ${({ theme }) => theme.mobile`
    flex-direction: column-reverse;
  `}
`;

export const TextsWrapper = styled.div`
  max-width: 54rem;
`;

export const SubHeading = styled.p`
  color: #13182b;
  font-size: 2.4rem;
  font-weight: 600;
`;

export const Text = styled.p`
  color: #13182b;
  font-size: ${({ large }) => (large ? '1.8rem' : '1.6rem')};
  font-weight: ${({ large }) => (large ? '500' : '400')};
  margin-top: 2.5rem;
`;

export const VideoAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 44.4rem;
`;

export const VideoText = styled.p`
  color: #13182b;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 1.2rem;
`;

export const GetInfoWrapper = styled.div`
  height: 33rem;
  background-image: url(${getInfoBackground});
  background-repeat: no-repeat;
  background-position: 0% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GetInfoBox = styled.form`
  background: #ffffff;
  border-radius: 3rem;
  width: 35.2rem;
  height: 23.7rem;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 4.6rem 1.6rem 4.6rem;
  position: relative;
`;

export const BlueArrow = styled.img`
  position: absolute;
  top: -3rem;
  left: -3rem;
`;

export const GetInfoHeading = styled.p`
  color: #13182b;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const GetInfoText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1.6rem;
`;

export const GetInfoButton = styled.button`
  width: 26rem;
  height: 4.6rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #9ab7ff;
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, #9ab7ff 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left bottom;
    color: #13182b;
  }
`;

export const MailInput = styled.input`
  width: 26rem;
  height: 4.6rem;
  border: 0.5rem solid #fe7760;
  border-radius: 2.2rem;
  outline: none;
  margin-bottom: 1.4rem;
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  padding-left: 2.6rem;
`;

export const SubscribeWrapper = styled.div`
  background-color: #f2f1f1;
  padding: 2rem 0rem;
`;

export const OtherOffersWrapper = styled.div`
  height: 80rem;
  background: url(${otherOffersBackground}) no-repeat #ffffff;
  background-position: 85% 50%;
  position: relative;
  padding: 4rem 10%;
`;

export const OtherHeading = styled.p`
  color: #13182b;
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const OvalWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 30%;
`;
