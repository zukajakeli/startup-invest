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
`;

export const Body = styled.div`
  padding: 9.8rem 10% 4rem 10%;
  background-color: #f2f1f1;
`;

export const Heading = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #13182b;
  margin-bottom: 1.6rem;
`;

export const SubHeading = styled.h3`
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const HeadingsWrapper = styled.div`
  margin-top: 3.4rem;
  margin-bottom: 6.3rem;
`;

export const StartupsWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.6rem;
  row-gap: 3.2rem;
  margin-bottom: 4.5rem;
  z-index: 1;
  position: relative;
`;

export const OvalBlueWrapper = styled.img`
  position: absolute;
  top: 20.7rem;
  right: 42rem;
  z-index: 0;
`;

export const OvalPinkWrapper = styled.img`
  position: absolute;
  top: 65.7rem;
  left: 10%;
  z-index: 0;
`;

export const ArchWrapper = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  bottom: 120rem;
  right: 3%;
`;

export const BlurredWrapper = styled.div`
  z-index: 1;
  position: relative;
`;
