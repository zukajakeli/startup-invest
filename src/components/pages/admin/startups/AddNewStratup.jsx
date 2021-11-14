import * as S from './components';
import { addNewStartup } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import WYSIWYGEditor from 'components/editor/editor';

const { TextArea } = Input;

const AddNewStartup = ({ setAddResponse }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [logoPhoto, setLogoPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [mainText, setMainText] = useState('');
  const [share, setShare] = useState('');
  const [sharePrice, setSharePrice] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const send = (e) => {
    const formData = new FormData();
    formData.append('mainPhoto', mainPhoto);
    formData.append('logoPhoto', logoPhoto);
    formData.append('previewPhoto', previewPhoto);
    formData.append('title', title);
    formData.append('previewText', previewText);
    formData.append('mainText', mainText);
    formData.append('category', category);
    formData.append('share', share);
    formData.append('sharePrice', sharePrice);
    e.preventDefault();
    console.log(formData);
    addNewStartup(formData).then((res) => {
      // setAddResponse(res);
      setMainPhoto(null);
      setLogoPhoto(null);
      setPreviewPhoto(null);
      setTitle('');
      setPreviewText('');
      setMainText('');
      setShare('');
      setSharePrice('');
      setCategory('');
    });
  };

  return (
    <S.Form enctype="multipart/form-data">
      <Input
        prefix="Title:"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextArea
        placeholder="PreviewText:"
        value={previewText}
        onChange={(e) => {
          setPreviewText(e.target.value);
        }}
      />
      <Input
        prefix="SharePrice:"
        value={sharePrice}
        onChange={(e) => {
          setSharePrice(e.target.value);
        }}
      />
      <Input
        prefix="Share:"
        value={share}
        onChange={(e) => {
          setShare(e.target.value);
        }}
      />
      <Input
        prefix="Category:"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <WYSIWYGEditor onChange={setMainText} value={mainText} />

      <Upload
        name="mainPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          setMainPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Main Photo</Button>
      </Upload>
      <Upload
        name="logoPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          setLogoPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Logo Photo</Button>
      </Upload>
      <Upload
        name="previewPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          console.log(e.file.originFileObj);
          setPreviewPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Preview Photo</Button>
      </Upload>
      <Button type="primary" onClick={send}>
        Add Startup
      </Button>
    </S.Form>
  );
};

export default AddNewStartup;
