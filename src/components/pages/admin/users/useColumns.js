import React from 'react';
import { useState } from 'react';

import { DeleteTwoTone } from '@ant-design/icons';
import { deleteUser } from 'config/API';
import CustomModal from 'components/modal/CustomModal';
import EditUser from './EditUser';

const useColumns = () => {
  const [deleteResponse, setDeleteResponse] = useState(null);

  const deleteUserFunc = (id) => {
    deleteUser(id).then((res) => {
      setDeleteResponse(res);
    });
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Facebook Name',
      dataIndex: 'facebookName',
      key: 'facebookName',
    },
    {
      title: 'Google Name',
      dataIndex: 'googleName',
      key: 'googleName',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },

    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <CustomModal
              text={'Edit User'}
              body={
                <EditUser id={record._id} setResponse={setDeleteResponse} />
              }
            />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              deleteUserFunc(record._id);
            }}
          >
            <DeleteTwoTone />
          </div>
        </div>
      ),
    },
  ];
  return { columns, deleteResponse };
};

export default useColumns;
