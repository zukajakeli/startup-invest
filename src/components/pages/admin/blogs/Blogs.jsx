import * as S from './components';
import { getAllStories } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import 'antd/dist/antd.css';
import AddNewBlog from './AddNewBlog';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Blogs = () => {
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

      {!!allData.length && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={'h4'}>Title</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Content</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map(({ title, content }, index) => (
                <TableRow
                  key={`story${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant={'h5'}>{title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'h5'}>{content}</Typography>
                  </TableCell>
                  <TableCell>
                    <button>Edit</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </S.Wrapper>
  );
};

export default Blogs;
