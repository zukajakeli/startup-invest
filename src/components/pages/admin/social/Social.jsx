import * as S from './components';
import { getAllSocials } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'antd';
import CustomModal from 'components/modal/CustomModal';
import AddNewFaq from './AddNewFaq';
import useColumns from './useColumns';

const Social = () => {
  const { deleteResponse, columns } = useColumns();
  const [addResponse, setAddResponse] = useState(null);

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllSocials().then((res) => setAllData([res.data.social]));
  }, [addResponse, deleteResponse]);

  console.log(allData);
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>Social Link</S.UserTitle>
      </S.Header>

      <Table columns={columns} dataSource={allData} />
    </S.Wrapper>
  );
};

export default Social;
