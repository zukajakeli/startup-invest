import styled from 'styled-components';

export const MainStory = styled.div`
  display: flex;
  background: #fff;
  padding: 3.2rem 10%;
  margin-top: 1.6rem;
  gap: 1.6rem;
  justify-content: space-between;

  ${({ theme }) => theme.mobile`
    flex-direction: column;
    border-radius: 4.1rem;
    padding: 0rem;
    height: 48.4rem;
    justify-content: flex-start;
  `}
`;

export const MainImage = styled.img`
  height: 33.2rem;
  max-width: 62.8rem;
  border-radius: 4rem;
  cursor: pointer;

  ${({ theme }) => theme.mobile`
    width: 100%;
    height: 25.2rem;
    margin-bottom: 2rem;
  `}
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  max-width: 45rem;

  ${({ theme }) => theme.mobile`
      padding: 0rem 3.6rem 3.8rem 3.6rem;
  `}
`;

export const StoryTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 600;
  color: ${({ white }) => (white ? '#ffffff' : '##13182B')};
  margin-bottom: 1.8rem;
  cursor: pointer;

  ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
  `}
`;

export const ReadingTime = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ white }) => (white ? '#ffffff' : '#767C8B')};
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
  `}
`;

export const StoryPreview = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${({ white }) => (white ? '#ffffff' : '#767C8B')};
  /* max-height: 9rem; */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden
    ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
  `};
`;
