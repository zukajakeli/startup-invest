import { Modal, Button } from 'antd';
import { useState } from 'react';

const CustomModal = ({ text, body, closable = true }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {text}
      </Button>
      <Modal
        destroyOnClose={true}
        title={text}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        closable={closable}
      >
        {body}
      </Modal>
    </>
  );
};

export default CustomModal;
