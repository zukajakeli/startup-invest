import * as S from './components';
import { getAllFaqs } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'antd';
import CustomModal from 'components/modal/CustomModal';
import AddNewFaq from './AddNewFaq';
import useColumns from './useColumns';

const FAQs = () => {
  const { deleteResponse, columns } = useColumns();
  const [addResponse, setAddResponse] = useState(null);

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllFaqs().then((res) => setAllData(res.data));
  }, [addResponse, deleteResponse]);

  console.log(allData);
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>FAQs</S.UserTitle>
        <CustomModal
          text={'Add New FAQ'}
          body={<AddNewFaq setAddResponse={setAddResponse} />}
        />
      </S.Header>

      <Table columns={columns} dataSource={allData} />
    </S.Wrapper>
  );
};

export default FAQs;
