import * as S from './components';
import { getAllAbouts } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import { Table } from 'antd';
import useColumns from './useColumns';

const Contacts = () => {
  const { columns } = useColumns();
  const [addResponse, setAddResponse] = useState(null);

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllAbouts().then((res) => setAllData(res.data));
  }, [addResponse]);

  console.log(allData);
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>About Info</S.UserTitle>
      </S.Header>

      <Table dataSource={allData} columns={columns} />
    </S.Wrapper>
  );
};

export default Contacts;
