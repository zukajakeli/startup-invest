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
  padding: 10.6rem 10% 8.7rem 10%;

  ${({ theme }) => theme.mobile`
    padding: 10.6rem 0rem 8.7rem 0rem;
`}
`;

export const OtherStories = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 65.3rem;
  padding: 4rem 10%;
  position: relative;

  ${({ theme }) => theme.mobile`
     height: unset;
     margin-bottom: 0rem;
  `}
`;

export const BreakDiv = styled.div`
  width: 100%;
  height: 6.7rem;
  background-color: #f2f1f1;
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

export const MainImage = styled.img`
  height: 38vh;
  width: 100%;
  object-fit: cover;
  border-radius: 4rem;

  ${({ theme }) => theme.mobile`
   height:27rem;
  `}
`;

export const Content = styled.div`
  max-width: 62.8rem;
  margin-left: 7rem;
  margin-top: 3.2rem;

  ${({ theme }) => theme.mobile`
   margin: 0rem;
   padding: 0rem 7%;
`}
`;

export const Heading = styled.p`
  font-size: 2.4rem;
  line-height: 3.4rem;
  font-weight: 600;
  color: #13182b;
  margin-bottom: 2.7rem;

  ${({ theme }) => theme.mobile`
   font-size: 1.4rem;
   line-height: 2.2rem;
   margin-top: 1.6rem;
   
`}
`;

export const SubHeading = styled.p`
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 500;
  color: #13182b;
  margin-bottom: 3.2rem;

  ${({ theme }) => theme.mobile`
   font-size: 1.4rem;
   line-height: 2.2rem;
   margin-top: 1.6rem;
`}
`;

export const SmallImage = styled.img`
  height: 23.2rem;
  width: 100%;
  object-fit: cover;
  border-radius: 4rem;
  margin-bottom: 3.2rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 400;
  color: #13182b;
  margin-bottom: 2.7rem;

  ${({ theme }) => theme.mobile`
   font-size: 1.4rem;
   line-height: 2.2rem;
   margin-top: 1.6rem;
`}
`;

export const TextMarked = styled.p`
  font-size: 3.2rem;
  line-height: 4.5rem;
  font-weight: 500;
  color: #13182b;
  margin-bottom: 3.2rem;
  text-align: center;

  & span {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-color: #ffca0f;
    padding: 0rem 1rem;
  }

  ${({ theme }) => theme.mobile`
   font-size: 1.8rem;
   line-height: 3.1rem;
   margin: 2rem 0rem;
`}
`;

export const BulletTextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2.7rem 0rem;
`;

export const GreenDot = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: #55aa79;
  border-radius: 50%;
  margin-right: 2.5rem;
  margin-top: 0.4rem;
`;

export const BulletText = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 400;
  color: #13182b;
  max-width: 52rem;

  ${({ theme }) => theme.mobile`
   font-size: 1.4rem;
   line-height: 2rem;
   margin: 2rem 0rem;
   max-width: 33rem;
   margin: unset;
`}
`;

export const ShareWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  right: 12%;
  top: 58rem;

  ${({ theme }) => theme.mobile`
    position: absolute;
    top: 10rem;
    right: 4rem;
    z-index: 9;
  `}
`;

export const ShareIcon = styled.img`
  margin-right: 1.4rem;
  width: 4.2rem;
  height: 4.2rem;
  cursor: pointer;

  ${({ theme }) => theme.mobile`
    margin-right: unset;
    margin-bottom: 1rem;
  `}
`;

export const ShareText = styled.p`
  ${({ theme }) => theme.mobile`
   display: none;
`}
`;

export const IconsWrapper = styled.div`
  display: flex;
  margin-top: 1.1rem;

  ${({ theme }) => theme.mobile`
    flex-direction: column;
  `}
`;

export const IconsMobileWrapper = styled.div``;
