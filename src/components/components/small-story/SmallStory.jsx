import { useHistory } from 'react-router';
import * as S from './small-story-components';

const SmallStory = ({ image, readingTime, storyTitle, storyPreview }) => {
  const history = useHistory();
  const openBolg = () => {
    history.push('/single-blog');
  };

  return (
    <S.SmallStory onClick={openBolg}>
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
