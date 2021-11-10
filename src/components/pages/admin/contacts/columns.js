import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columns = [
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
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (text, record) => (
      <div style={{ cursor: 'pointer' }}>
        <EditTwoTone />
      </div>
    ),
  },
];
