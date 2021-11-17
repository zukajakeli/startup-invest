import React from 'react';
import { useState } from 'react';

import { DeleteTwoTone } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import { deleteFaq, updateFaq } from 'config/API';
import CustomModal from 'components/modal/CustomModal';
import EditFaq from './EditFaq';

const useColumns = () => {
  const [deleteResponse, setDeleteResponse] = useState(null);

  const deleteFaqFunc = (id) => {
    deleteFaq(id).then((res) => {
      setDeleteResponse(res);
      message.success('FAQ Deleted');
    });
  };

  const columns = [
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question',
    },
    {
      title: 'Answer',
      dataIndex: 'answer',
      key: 'answer',
    },

    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <CustomModal
              text={'Edit FAQ'}
              body={<EditFaq id={record._id} setResponse={setDeleteResponse} />}
            />
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Popconfirm
              title="Delete this FAQ?"
              onConfirm={() => {
                deleteFaqFunc(record._id);
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
