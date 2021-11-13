import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import CustomModal from 'components/modal/CustomModal';
import { deleteStartup } from 'config/API';
import { useState } from 'react';
import EditStartup from './EditStartup';

const useColumns = () => {
  const [deleteResponse, setDeleteResponse] = useState(null);

  const deleteStartupFunc = (id) => {
    deleteStartup(id).then((res) => setDeleteResponse(res.data));
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Preview Text',
      dataIndex: 'previewText',
      key: 'previewText',
    },
    {
      title: 'Share',
      dataIndex: 'share',
      key: 'share',
    },
    {
      title: 'Share Price',
      dataIndex: 'sharePrice',
      key: 'sharePrice',
    },

    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <CustomModal
              text={'Edit Startup'}
              body={
                <EditStartup id={record._id} setResponse={setDeleteResponse} />
              }
            />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              deleteStartupFunc(record._id);
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
