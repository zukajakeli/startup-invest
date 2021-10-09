import * as S from './carrousel-story-component';

const CarousselStory = ({ readingTime, storyPreview }) => {
  return (
    <S.Wrapper>
      <S.ReadingTime>
        წასაკითხი დრო: <strong>{readingTime} </strong>
      </S.ReadingTime>
      <S.StoryPreview>{storyPreview}</S.StoryPreview>
    </S.Wrapper>
  );
};

export default CarousselStory;
