import Header from 'components/components/header/Header';
import * as S from './single-startup-components';

const SingleStartup = () => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.Body></S.Body>
    </S.Wrapper>
  );
};

export default SingleStartup;
