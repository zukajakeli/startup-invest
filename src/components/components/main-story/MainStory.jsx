import * as S from './main-story-components';

const MainStory = ({ image, readingTime, storyTitle, storyPreview }) => {
  return (
    <S.MainStory>
      <S.MainImage src={image} alt="blogImage" />
      <S.TextsWrapper>
        <S.ReadingTime>
          წასაკითხი დრო: <strong>{readingTime}</strong>
        </S.ReadingTime>
        <S.StoryTitle>{storyTitle}</S.StoryTitle>
        <S.StoryPreview>{storyPreview}</S.StoryPreview>
      </S.TextsWrapper>
    </S.MainStory>
  );
};

export default MainStory;
