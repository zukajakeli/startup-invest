import * as S from "./choose-service-card-components";

const ChooseServiceCard = ({ title, info, buttonText, forInvestors }) => {
  return (
    <S.Wrapper>
      <S.Title forInvestors={forInvestors}>{title}</S.Title>
      <S.Info>{info}</S.Info>
      <S.Button>{buttonText} </S.Button>
    </S.Wrapper>
  );
};

export default ChooseServiceCard;
