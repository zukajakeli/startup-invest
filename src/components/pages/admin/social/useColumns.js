import React from 'react';
import { useState } from 'react';

import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { deleteFaq, updateFaq } from 'config/API';
import CustomModal from 'components/modal/CustomModal';
import EditFaq from './EditSocials';
import EditSocials from './EditSocials';

const useColumns = () => {
  const [deleteResponse, setDeleteResponse] = useState(null);

  const deleteFaqFunc = (id) => {
    deleteFaq(id).then((res) => {
      setDeleteResponse(res);
    });
  };

  const columns = [
    {
      title: 'Facebook Link',
      dataIndex: 'fbLink',
      key: 'fbLink',
      width: 200,
      ellipsis: true,
    },
    {
      title: 'Instagram Link',
      dataIndex: 'igLink',
      key: 'igLink',
      width: 200,
      ellipsis: true,
    },

    {
      title: 'Linkedin Link',
      dataIndex: 'linkedinLink',
      key: 'linkedinLink',
      width: 200,
      ellipsis: true,
    },

    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <CustomModal
              text={'Edit Socials'}
              body={
                <EditSocials id={record._id} setResponse={setDeleteResponse} />
              }
            />
          </div>
        </div>
      ),
    },
  ];
  return { columns, deleteResponse };
};

export default useColumns;
