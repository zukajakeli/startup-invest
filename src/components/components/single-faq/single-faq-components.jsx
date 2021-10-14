import styled from 'styled-components';

export const SingleFaq = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid #b5b9c2;
`;

export const TitleAndDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.35rem;
  margin-top: 2rem;
`;

export const FaqTitle = styled.h5`
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FaqAnswer = styled.p`
  color: #13182b;
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 400;
  margin-bottom: 2.35rem;
  transition: all 0.2s ease-in-out;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ isDropdownOpen }) => isDropdownOpen && 'transform: rotate(180deg)'};
`;
