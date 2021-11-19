import BASE_URL from 'config/BaseUrl';
import { useHistory } from 'react-router';
import * as S from './main-story-components';

const MainStory = ({ image, readingTime, storyTitle, storyPreview, _id }) => {
  const history = useHistory();
  const openBolg = () => {
    history.push(`/blog/${_id}`);
  };
  return (
    <S.MainStory>
      <S.MainImage src={`${image}`} alt="blogImage" onClick={openBolg} />
      <S.TextsWrapper>
        <S.ReadingTime>
          წასაკითხი დრო: <strong>{readingTime}</strong>
        </S.ReadingTime>
        <S.StoryTitle onClick={openBolg}>{storyTitle}</S.StoryTitle>
        <S.StoryPreview>{storyPreview}</S.StoryPreview>
      </S.TextsWrapper>
    </S.MainStory>
  );
};

export default MainStory;
