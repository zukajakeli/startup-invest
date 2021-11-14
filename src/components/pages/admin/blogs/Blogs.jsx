import * as S from './components';
import { getAllStories } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import AddNewBlog from './AddNewBlog';
import useColumns from './useColumns';

const Blogs = () => {
  const { columns } = useColumns();
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllStories().then((res) => setAllData(res.data));
  }, []);

  console.log(allData);

  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>Blogs</S.UserTitle>
        <CustomModal text={'Add New Story'} body={<AddNewBlog />} />
      </S.Header>

      <Table dataSource={allData} columns={columns} />
    </S.Wrapper>
  );
};

export default Blogs;
