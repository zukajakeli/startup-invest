import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
  background-color: #f2f1f1;
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const BlueImage = styled.img`
  position: absolute;
`;

export const PinkImage = styled.img`
  position: absolute;
  top: -5rem;
  left: -5rem;
  z-index: 1;
`;
