import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
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

export const Body = styled.div`
  padding: 9.8rem 0rem 2rem 0rem;
  background-color: #f2f1f1;
`;

export const SubscriptionWrapper = styled.div`
  background: #fff;
  padding: 5rem 0rem;

  ${({ theme }) => theme.mobile`
    background-color: #F2F1F1;
  `}
`;

export const OvalPinkWrapper = styled.img`
  position: absolute;
  top: 9.7rem;
  right: 20%;
  z-index: 0;

  ${({ theme }) => theme.mobile`
    display: none;
`}
`;

export const ArchWrapper = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  top: 50%;
  right: 3%;
  z-index: 0;
`;

export const BlogsContent = styled.div`
  position: relative;
  background: #f2f1f1;
  padding: 0rem 10%;
  padding-top: 10rem;

  ${({ theme }) => theme.mobile`
      padding: 3.4rem 3.6rem;
  `}
`;

export const Heading = styled.h4`
  font-weight: 600;
  font-size: 2.6rem;
  color: #13182b;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mobile`
      font-size: 1.8rem;
  `}
`;

export const LargeStoriesWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  position: relative;
  margin-top: 13rem;
  padding-bottom: 10rem;
  justify-content: center;

  ${({ theme }) => theme.mobile`
    flex-direction: column;

    & > :first-child {
    margin-bottom: 1.4rem;
  }
`}
`;

export const ArchBlueWrapper = styled.div`
  position: absolute;
  transform: rotate(180deg);
  z-index: 0;
  top: -9rem;
  left: 40%;

  ${({ theme }) => theme.mobile`
    top: -5rem;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    transform: rotate(0deg);
  `}
`;

export const ZindexTop = styled.div`
  z-index: 1;
`;

export const AllStoriesWrapper = styled.div``;

export const SmallStoriesWrapper = styled.div`
  margin-top: 6.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  padding-bottom: 15rem;

  ${({ theme }) => theme.mobile`
     grid-template-columns: 1fr;
     margin-top: unset;
     padding-bottom: unset;
  `}
`;

export const CircleRedWrapper = styled.img`
  position: absolute;
  left: 40%;
  bottom: 1rem;
  z-index: 0;

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

export const ArchYellowWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 122rem;
  transform: rotate(-90deg);

  ${({ theme }) => theme.mobile`
     right: -4rem;
  `}
`;

export const SwiperWrapper = styled.div`
  max-width: 110rem;
  display: flex;
  justify-content: center;
`;
