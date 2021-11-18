import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import CustomModal from 'components/modal/CustomModal';
import { deleteStartup } from 'config/API';
import { useState } from 'react';
import EditStartup from './EditStartup';
import { Checkbox, Popconfirm, message, Button } from 'antd';
import { useHistory } from 'react-router';

const useColumns = () => {
  const history = useHistory();
  const [deleteResponse, setDeleteResponse] = useState(null);

  const deleteStartupFunc = (id) => {
    deleteStartup(id).then((res) => {
      setDeleteResponse(res.data);
      message.success('Startup Deleted');
    });
  };

  const openEdit = (id) => {
    history.push(`/admin/add-new-startup/${id}`);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Outside Text',
      dataIndex: 'outsideText',
      key: 'outsideText',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },

    {
      title: 'Main Page Startup',
      dataIndex: 'isMainPage',
      key: 'isMainPage',
      render: (text, record) => <Checkbox checked={record.isMainPage} />,
    },

    {
      title: 'Visible For Everyone',
      dataIndex: 'isVisible',
      key: 'isVisible',
      render: (text, record) => <Checkbox checked={record.isVisible} />,
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
              Edit Startup{' '}
            </Button>
            {/* <CustomModal
              text={'Edit Startup'}
              body={
                <EditStartup id={record._id} setResponse={setDeleteResponse} />
              }
            /> */}
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Popconfirm
              title="Delete this Blog?"
              onConfirm={() => {
                deleteStartupFunc(record._id);
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
