import styled from 'styled-components';

export const LargeStory = styled.div`
  height: 43.6rem;
  max-width: 53.6rem;
  flex: 1 35rem;
  position: relative;
  display: flex;
  align-items: flex-end;

  ${({ theme }) => theme.mobile`
   max-height: 27.8rem;
   max-width: 34.2rem;
  `}
`;

export const StoryTextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 0.8rem;
  padding: 3.5rem;

  ${({ theme }) => theme.mobile`
    padding: 2.6rem 2.2rem;

    & > * {
      margin-bottom: 0.6rem;
    }
  `}
`;

export const LargeStoryBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 4rem;
  box-shadow: 0.3rem 1rem 8rem #00000029;
  z-index: 0;
`;

export const StoryTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ white }) => (white ? '#ffffff' : '##13182B')};

  ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
  `}
`;

export const ReadingTime = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ white }) => (white ? '#ffffff' : '#767C8B')};

  ${({ theme }) => theme.mobile`
    font-size: 1.2rem;
  `}
`;

export const StoryPreview = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${({ white }) => (white ? '#ffffff' : '#767C8B')};
  max-height: 9rem;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ theme }) => theme.mobile`
    font-size: 1.2rem;
  `}
`;
