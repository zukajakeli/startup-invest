import * as S from './components';
import { getAllContacts } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import AddNewFaq from './AddNewContact';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddNewContact from './AddNewContact';

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
                  <Typography variant={'h4'}>Phone</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Location</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map(({ email, phone, location }, index) => (
                <TableRow
                  key={`contact${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant={'h5'}>{email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'h5'}>{phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'h5'}>{location}</Typography>
                  </TableCell>
                  <TableCell>
                    <CustomModal
                      text={'Edit Info'}
                      body={<AddNewContact setAddResponse={setAddResponse} />}
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

export default Contacts;
