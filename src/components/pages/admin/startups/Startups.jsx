import * as S from './components';
import { getAllStartups } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import { columns } from './useColumns';

import AddNewStartup from './AddNewStratup';

const Startups = () => {
  const [addResponse, setAddResponse] = useState(null);

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllStartups().then((res) => setAllData(res.data));
  }, [addResponse]);

  console.log(allData);
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>Startups</S.UserTitle>
        <CustomModal
          text={'Add New Startup'}
          body={<AddNewStartup setAddResponse={setAddResponse} />}
        />
      </S.Header>

      {!!allData.length && <Table columns={columns} dataSource={allData} />}
    </S.Wrapper>
  );
};

export default Startups;
