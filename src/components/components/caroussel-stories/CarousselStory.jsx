import { useHistory } from 'react-router';
import * as S from './carrousel-story-component';

const CarousselStory = ({ readingTime, storyPreview }) => {
  const history = useHistory();
  const openBolg = () => {
    history.push('/single-blog');
  };
  return (
    <S.Wrapper onClick={openBolg}>
      <S.ReadingTime>
        წასაკითხი დრო: <strong>{readingTime} </strong>
      </S.ReadingTime>
      <S.StoryPreview>{storyPreview}</S.StoryPreview>
    </S.Wrapper>
  );
};

export default CarousselStory;
