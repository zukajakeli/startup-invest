import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import CustomModal from 'components/modal/CustomModal';
import {
  deleteStory,
  updateIsMainStory,
  updateIsSecondaryStory,
} from 'config/API';
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

  const sendIsMain = (e, record) => {
    updateIsMainStory({
      isMainStory: e.target.checked,
      id: record._id,
    }).then((res) => {
      setDeleteResponse(res.data);
    });
  };

  const sendIsSecondary = (e, record) => {
    updateIsSecondaryStory({
      isSecondaryStory: e.target.checked,
      id: record._id,
    }).then((res) => {
      setDeleteResponse(res.data);
    });
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
      sorter: (a, b) => a.isMainStory - b.isMainStory,
      render: (text, record) => (
        <Checkbox
          checked={record.isMainStory}
          onChange={(e) => {
            sendIsMain(e, record);
          }}
        />
      ),
    },

    {
      title: 'Secondary Story (Small)',
      dataIndex: 'isSecondaryStory',
      key: 'isSecondaryStory',
      sorter: (a, b) => a.isSecondaryStory - b.isSecondaryStory,
      render: (text, record) => (
        <Checkbox
          checked={record.isSecondaryStory}
          onChange={(e) => {
            sendIsSecondary(e, record);
          }}
        />
      ),
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
