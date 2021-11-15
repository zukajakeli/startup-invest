import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import CustomModal from 'components/modal/CustomModal';
import { deleteStory } from 'config/API';
import { useState } from 'react';
import { Checkbox } from 'antd';
// import EditStartup from './EditStartup';

const useColumns = () => {
  const [deleteResponse, setDeleteResponse] = useState(null);

  const deleteStoryFunc = (id) => {
    deleteStory(id).then((res) => setDeleteResponse(res.data));
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },

    {
      title: 'Main Page Story',
      dataIndex: 'isMainPage',
      key: 'isMainPage',
      render: (text, record) => <Checkbox checked={record.isMainPage} />,
    },

    {
      title: 'Main Story (Large)',
      dataIndex: 'isMainStory',
      key: 'isMainStory',
      render: (text, record) => <Checkbox checked={record.isMainStory} />,
    },

    {
      title: 'Secondary Story (Small)',
      dataIndex: 'isSecondaryStory',
      key: 'isSecondaryStory',
      render: (text, record) => <Checkbox checked={record.isMainStory} />,
    },

    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <CustomModal
              text={'Edit Blog'}
              // body={
              //   <EditStartup id={record._id} setResponse={setDeleteResponse} />
              // }
            />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              deleteStoryFunc(record._id);
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
