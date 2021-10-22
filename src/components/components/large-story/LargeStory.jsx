import { useHistory } from 'react-router';
import * as S from './large-story-components';

const LargeStory = ({
  backgroundImage,
  readingTime,
  storyTitle,
  storyPreview,
}) => {
  const history = useHistory();
  const openBolg = () => {
    history.push('/single-blog');
  };

  return (
    <S.LargeStory onClick={openBolg}>
      <S.LargeStoryBackground src={backgroundImage} />
      <S.StoryTextsWrapper>
        <S.ReadingTime white>
          წასაკითხი დრო: <strong>{readingTime} </strong>
        </S.ReadingTime>
        <S.StoryTitle white>{storyTitle} </S.StoryTitle>
        <S.StoryPreview white>{storyPreview}</S.StoryPreview>
      </S.StoryTextsWrapper>
    </S.LargeStory>
  );
};

export default LargeStory;
