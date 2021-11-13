import * as S from './components';
import { getAllUsers } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import EditUser from './EditUser';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import useColumns from './useColumns';

const Users = () => {
  const { columns, deleteResponse } = useColumns();
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => setAllData(res.data));
  }, [deleteResponse]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>Users</S.UserTitle>
        {/* <CustomModal text={'Add New User'} body={<EditUser />} /> */}
      </S.Header>

      <Table
        dataSource={allData}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </S.Wrapper>
  );
};

export default Users;
