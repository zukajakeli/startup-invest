import * as S from './components';

const UserCard = ({ id, email, googleName, role }) => {
  return (
    <S.Card>
      <S.InfoWrapper>
        <S.Flex>
          <S.Title>Name</S.Title>
          <S.Value>{email || googleName}</S.Value>
        </S.Flex>

        <S.Flex>
          <S.Title>Role</S.Title>
          <S.Value>{role}</S.Value>
        </S.Flex>
      </S.InfoWrapper>
      <S.Button>Edit</S.Button>
    </S.Card>
  );
};

export default UserCard;
