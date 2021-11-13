import React from 'react';
import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

const useColumns = () => {
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return { columns };
};

export default useColumns;
