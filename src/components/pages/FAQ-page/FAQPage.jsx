import Header from 'components/components/header/Header';
import * as S from './FAQ-page-components';

const FAQPage = () => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Body>
        <S.Heading>ხშირად დასმული კითხვები</S.Heading>
      </S.Body>
    </S.Wrapper>
  );
};

export default FAQPage;
