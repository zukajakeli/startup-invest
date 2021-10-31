import * as S from './components';
import { getAllAbouts } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import AddNewFaq from './AddNewAbout';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddNewContact from './AddNewAbout';
import AddNewAbout from './AddNewAbout';

const Contacts = () => {
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
        <CustomModal
          text={'Add About Info'}
          body={<AddNewAbout setAddResponse={setAddResponse} />}
        />
      </S.Header>

      {!!allData.length && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={'h4'}>About Text</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map(({ text }, index) => (
                <TableRow
                  key={`contact${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant={'h5'}>{text}</Typography>
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
