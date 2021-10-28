import * as S from './components';
import { getAllUsers } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import UserCard from './UserCard';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => setAllUsers(res.data));
  }, []);

  console.log(allUsers);

  return (
    <S.Wrapper>
      {!!allUsers.length &&
        allUsers.map(({ _id, email, googleName, role }, index) => {
          return (
            <UserCard
              key={`user${index}`}
              id={_id}
              email={email}
              googleName={googleName}
              role={role}
            />
          );
        })}
    </S.Wrapper>
  );
};

export default Users;
