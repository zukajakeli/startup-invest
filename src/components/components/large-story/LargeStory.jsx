import BASE_URL from 'config/BaseUrl';
import { useHistory } from 'react-router';
import * as S from './large-story-components';

const LargeStory = ({
  backgroundImage,
  readingTime,
  storyTitle,
  storyPreview,
  forMainPage,
  _id,
}) => {
  const history = useHistory();
  const openBolg = () => {
    history.push(`/blog/${_id}`);
  };

  return (
    <S.LargeStory onClick={openBolg} forMainPage={forMainPage}>
      <S.LargeStoryBackground src={`${BASE_URL}/${backgroundImage}`} />
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
