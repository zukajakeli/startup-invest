import * as S from './components';
import { addNewStartup } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button, Checkbox, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import WYSIWYGEditor from 'components/editor/editor';
import BASE_URL from 'config/BaseUrl';

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
  const [video, setVideo] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [isMainPage, setIsMainPage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [outsideText, setOutsideText] = useState('');
  const key = 'updatable';

  const [isLoading, setIsLoading] = useState(true);

  const send = (e) => {
    const formData = new FormData();
    formData.append('mainPhoto', mainPhoto);
    formData.append('logoPhoto', logoPhoto);
    formData.append('previewPhoto', previewPhoto);
    formData.append('title', title);
    formData.append('outsideText', outsideText);
    formData.append('video', video);
    formData.append('videoDescription', videoDescription);
    formData.append('previewText', previewText);
    formData.append('mainText', mainText);
    formData.append('category', category);
    formData.append('share', share);
    formData.append('sharePrice', sharePrice);
    formData.append('isMainPage', isMainPage);
    formData.append('isVisible', isVisible);
    e.preventDefault();
    console.log(formData);
    addNewStartup(formData).then((res) => {
      message.success({ content: 'Blog Added!', key, duration: 2 });
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    });
  };

  const mainPhotoPreview = [
    {
      uid: '-1',
      status: 'done',
      url: `${BASE_URL}/${mainPhoto}`,
      thumbUrl: `${BASE_URL}/${mainPhoto}`,
    },
  ];

  const logoPhotoPreview = [
    {
      uid: '-1',
      status: 'done',
      url: `${BASE_URL}/${logoPhoto}`,
      thumbUrl: `${BASE_URL}/${logoPhoto}`,
    },
  ];

  const previewPhotoPreview = [
    {
      uid: '-1',
      status: 'done',
      url: `${BASE_URL}/${previewPhoto}`,
      thumbUrl: `${BASE_URL}/${previewPhoto}`,
    },
  ];

  const mainCheckboxChange = (e) => {
    setIsMainPage(e.target.checked);
  };

  const visibleCheckboxChange = (e) => {
    setIsVisible(e.target.checked);
  };
  console.log('isVisible', isVisible);

  return (
    <S.Form enctype="multipart/form-data" id="startup-form">
      <p style={{ fontSize: 24, marginBottom: 20 }}>Add Startup</p>
      <Input
        prefix="Title:"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextArea
        placeholder="Outside Text"
        value={outsideText}
        onChange={(e) => {
          setOutsideText(e.target.value);
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
        prefix="Video URL:"
        value={video}
        onChange={(e) => {
          setVideo(e.target.value);
        }}
      />
      <TextArea
        placeholder="Video Description"
        value={videoDescription}
        onChange={(e) => {
          setVideoDescription(e.target.value);
        }}
      />
      <Input
        prefix="Category:"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
        <Checkbox checked={isMainPage} onChange={mainCheckboxChange}>
          {' '}
          Main Page Startup{' '}
        </Checkbox>
        <Checkbox checked={isVisible} onChange={visibleCheckboxChange}>
          {' '}
          Visible for Everyone{' '}
        </Checkbox>
      </div>
      Preview Text
      <WYSIWYGEditor onChange={setPreviewText} value={previewText} />
      Main Text
      <WYSIWYGEditor onChange={setMainText} value={mainText} />
      <Upload
        name="mainPhoto"
        beforeUpload={false}
        listType="picture"
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
        listType="picture"
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
        listType="picture"
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
