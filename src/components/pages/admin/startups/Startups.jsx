import * as S from './components';
import { getAllStartups } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomModal from 'components/modal/CustomModal';
import 'antd/dist/antd.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
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

      {!!allData.length && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant={'h4'}>Title</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Share</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Preview Text</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Main Text</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Main Photo</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'h4'}>Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map(
                (
                  {
                    title,
                    price,
                    share,
                    previewText,
                    mainText,
                    mainPhoto,
                    previewPhoto,
                    logoPhoto,
                    video,
                  },
                  index,
                ) => (
                  <TableRow
                    key={`startup${index}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <Typography variant={'h5'}>{title}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant={'h5'}>{price}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant={'h5'}>{share}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant={'h5'}>{previewText}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant={'h5'}>{mainText}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant={'h5'}>{mainPhoto}</Typography>
                    </TableCell>
                    <TableCell>
                      <button>Edit</button>
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </S.Wrapper>
  );
};

export default Startups;
