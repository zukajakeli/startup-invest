import { useHistory } from 'react-router';
import * as S from './carrousel-story-component';

const CarousselStory = ({ readingTime, storyPreview, _id }) => {
  const history = useHistory();
  console.log(_id);
  const openBolg = () => {
    history.push(`/blog/${_id}`);
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
