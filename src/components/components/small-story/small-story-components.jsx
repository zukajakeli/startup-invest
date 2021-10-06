import styled from "styled-components";

export const SmallStory = styled.div`
  display: flex;
  border-radius: 3rem;
  box-shadow: 0.3rem 1rem 8rem #00000029;
  background-color: #ffffff;
  height: 20.8rem;
  width: 100%;
  min-width: 35rem;
`;

export const SmallStoryImage = styled.img`
  object-fit: cover;
  width: 50%;
  border-radius: 3rem 0 0 3rem;
`;

export const StoryTextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 0.8rem;
  padding: 1.8rem 1.6rem;
`;

export const StoryTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ white }) => (white ? "#ffffff" : "##13182B")};
`;

export const ReadingTime = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ white }) => (white ? "#ffffff" : "#767C8B")};
`;

export const StoryPreview = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${({ white }) => (white ? "#ffffff" : "#767C8B")};
  text-overflow: ellipsis;
  max-height: 9rem;
  overflow-y: hidden;
`;
