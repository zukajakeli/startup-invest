import * as S from './components';
import { getAllContacts } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'antd';
import CustomModal from 'components/modal/CustomModal';
import { columns } from './columns';
import EditContactInfo from './EditContactInfo';

const Contacts = () => {
  const [addResponse, setAddResponse] = useState(null);

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllContacts().then((res) => setAllData(res.data));
  }, [addResponse]);

  console.log(allData);
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>Contact Info</S.UserTitle>
        <CustomModal text={'Edit Contact Details'} body={<EditContactInfo />} />
      </S.Header>

      {!!allData.length && <Table columns={columns} dataSource={allData} />}
    </S.Wrapper>
  );
};

export default Contacts;
