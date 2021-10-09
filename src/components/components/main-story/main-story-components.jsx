import styled from 'styled-components';

export const MainStory = styled.div`
  display: flex;
  background: #fff;
  padding: 3.2rem 10%;
  margin-top: 1.6rem;
  gap: 1.6rem;
  justify-content: space-between;
`;

export const MainImage = styled.img`
  height: 33.2rem;
  max-width: 62.8rem;
  border-radius: 4rem;
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  max-width: 45rem;
`;

export const StoryTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 600;
  color: ${({ white }) => (white ? '#ffffff' : '##13182B')};
  margin-bottom: 1.8rem;
`;

export const ReadingTime = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ white }) => (white ? '#ffffff' : '#767C8B')};
  margin-bottom: 1.6rem;
`;

export const StoryPreview = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${({ white }) => (white ? '#ffffff' : '#767C8B')};
  max-height: 9rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;
