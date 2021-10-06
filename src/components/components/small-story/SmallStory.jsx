import * as S from "./small-story-components";

const SmallStory = ({ image, readingTime, storyTitle, storyPreview }) => {
  return (
    <S.SmallStory>
      <S.SmallStoryImage src={image} />
      <S.StoryTextsWrapper>
        <S.ReadingTime>
          წასაკითხი დრო: <strong>{readingTime}</strong>
        </S.ReadingTime>
        <S.StoryTitle>{storyTitle} </S.StoryTitle>
        <S.StoryPreview>{storyPreview}</S.StoryPreview>
      </S.StoryTextsWrapper>
    </S.SmallStory>
  );
};

export default SmallStory;
