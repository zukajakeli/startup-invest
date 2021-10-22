import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f2f1f1;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  height: 9.8rem;
  background: #fff;
  width: 100%;
  padding: 0rem 10%;
  z-index: 10;

  ${({ theme }) => theme.mobile`
    background-color: #F2F1F1;
  `}
`;

export const SubscriptionWrapper = styled.div`
  background: #fff;
  padding: 5rem 0rem;

  ${({ theme }) => theme.mobile`
    background-color: #F2F1F1;
    padding-top: 0rem;
  `}
`;

export const Body = styled.div`
  padding-top: 9.8rem;
`;

export const OtherStories = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 65.3rem;
  padding: 4rem 10%;
  margin-bottom: 6.7rem;
  position: relative;

  ${({ theme }) => theme.mobile`
     height: unset;
     margin-bottom: 0rem;
  `}
`;

export const OtherHeading = styled.p`
  font-size: 2.4rem;
  color: #13182b;
  font-weight: 600;
  margin-bottom: 6rem;
`;

export const OvalYellow = styled.img`
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 2.5rem;
  user-select: none;

  ${({ theme }) => theme.mobile`
     height: unset;
     left: 11%;
     right: unset;
     bottom: 5.7rem;
  `}
`;

export const OvalPink = styled.img`
  position: absolute;
  z-index: 0;
  right: 8%;
  user-select: none;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);

  ${({ theme }) => theme.mobile`
      transform: translateY(-50%) rotate(0deg);
  `}
`;

export const SmallStoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  ${({ theme }) => theme.mobile`
   grid-template-columns: 1fr ;
  `}
`;

export const ZIndexTop = styled.div`
  z-index: 1;
  position: relative;
`;
