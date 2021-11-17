import * as S from './components';
import {
  getAllStartups,
  getStartupsCount,
  updateStartupsCount,
} from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import { Table, Checkbox, Select } from 'antd';
import 'antd/dist/antd.css';

import useColumns from './useColumns';

import AddNewStartup from './AddNewStratup';

const { Option } = Select;

const Startups = () => {
  const { columns, deleteResponse } = useColumns();
  const [addResponse, setAddResponse] = useState(null);

  const [startupsNumber, setStartupsNumber] = useState(1000);
  const [isBlurVisible, setIsBlurVisible] = useState(true);
  const [id, setId] = useState('');

  console.log('delete', deleteResponse);

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllStartups().then((res) => setAllData(res.data));
  }, [addResponse, deleteResponse]);

  console.log(allData);
  const onBlurredChange = (e) => {
    setIsBlurVisible(e.target.checked);
  };

  useEffect(() => {
    updateStartupsCount({ isBlurVisible, startupsNumber }).then((res) =>
      console.log(res.data),
    );
  }, [isBlurVisible, startupsNumber]);

  useEffect(() => {
    getStartupsCount().then((res) => {
      setIsBlurVisible(res.data.data[0].isBlurVisible);
      setStartupsNumber(res.data.data[0].startupsNumber);
      setId(res.data.data[0]._id);
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>Startups</S.UserTitle>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '2rem',
            flexDirection: 'column',
          }}
        >
          <div>
            <Checkbox checked={isBlurVisible} onChange={onBlurredChange}>
              Show Blurred startups?
            </Checkbox>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <p>Number of startups for Display</p>
            <Select
              onChange={(value) => setStartupsNumber(value)}
              value={startupsNumber}
            >
              <Option value={1000}>All</Option>
              <Option value={3}>3</Option>
              <Option value={6}>6</Option>
              <Option value={9}>9</Option>
              <Option value={12}>12</Option>
              <Option value={15}>15</Option>
              <Option value={18}>18</Option>
              <Option value={21}>21</Option>
              <Option value={24}>24</Option>
            </Select>
          </div>
        </div>
      </S.Header>

      {!!allData.length && <Table columns={columns} dataSource={allData} />}
    </S.Wrapper>
  );
};

export default Startups;
