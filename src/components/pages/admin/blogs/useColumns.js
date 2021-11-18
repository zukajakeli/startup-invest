import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import CustomModal from 'components/modal/CustomModal';
import { deleteStory } from 'config/API';
import { useState } from 'react';
import { Checkbox, Popconfirm, message, Button } from 'antd';
import { useHistory } from 'react-router';
// import EditStartup from './EditStartup';

const useColumns = () => {
  const history = useHistory();
  const [deleteResponse, setDeleteResponse] = useState(null);

  const deleteStoryFunc = (id) => {
    deleteStory(id).then((res) => {
      setDeleteResponse(res.data);
      message.success('Blog Deleted');
    });
  };

  const openEdit = (id) => {
    history.push(`/admin/add-new-blog/${id}`);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
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
            <Button
              type="primary"
              onClick={() => {
                openEdit(record._id);
              }}
            >
              {' '}
              Edit Blog{' '}
            </Button>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Popconfirm
              title="Delete this Blog?"
              onConfirm={() => {
                deleteStoryFunc(record._id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <DeleteTwoTone />
            </Popconfirm>
          </div>
        </div>
      ),
    },
  ];
  return { columns, deleteResponse };
};

export default useColumns;
