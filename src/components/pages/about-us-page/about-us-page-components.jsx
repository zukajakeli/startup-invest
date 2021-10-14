import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 9.8rem;
  background-color: #f2f1f1;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 0rem 10%;
  background-color: #ffffff;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0rem 6rem 0rem;
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  max-width: 54rem;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubscribeWrapper = styled.div`
  background-color: #ffffff;
  height: 25.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Image = styled.img`
  width: 44.4rem;
  height: 30rem;
  margin-bottom: 1.6rem;
  border-radius: 4rem;
  object-fit: cover;
`;

export const Heading = styled.h5`
  color: #13182b;
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 3.5rem;
  line-height: 3rem;
`;

export const SubHeading = styled.p`
  color: #13182b;
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  line-height: 3rem;
`;

export const Text = styled.p`
  color: #13182b;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  line-height: 2.2rem;
`;

export const FollowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const FollowText = styled.p`
  color: #929db9;
  margin-bottom: 2.6rem;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const FollowIcons = styled.div`
  display: flex;
  gap: 1.6rem;

  & > * {
    cursor: pointer;
  }
`;
