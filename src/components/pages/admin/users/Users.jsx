import * as S from './components';
import { getAllUsers } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import UserCard from './UserCard';
import EditUser from './EditUser';
import 'antd/dist/antd.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Users = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => setAllData(res.data));
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.UserTitle>Users</S.UserTitle>
        <CustomModal text={'Add New User'} body={<EditUser />} />
      </S.Header>

      {!!allData.length && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={'h4'}>Email</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Google Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Role</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map(({ _id, email, googleName, role }, index) => (
                <TableRow
                  key={`users${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant={'h5'}>{email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'h5'}>{googleName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'h5'}>{role}</Typography>
                  </TableCell>

                  <TableCell>
                    <CustomModal
                      text={'Edit Info'}
                      // body={<AddNewContact setAddResponse={setAddResponse} />}
                    />
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

export default Users;