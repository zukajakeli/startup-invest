import * as S from './components';
import { getAllFaqs } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import AddNewFaq from './AddNewFaq';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const FAQs = () => {
  const [addResponse, setAddResponse] = useState(null);

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getAllFaqs().then((res) => setAllData(res.data));
  }, [addResponse]);

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

      {!!allData.length && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={'h4'}>Question</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Answer</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map(({ question, answer }, index) => (
                <TableRow
                  key={`story${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant={'h5'}>{question}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'h5'}>{answer}</Typography>
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

export default FAQs;
