import * as S from './components';
import { updateStartup, getSingleStartup } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import WYSIWYGEditor from 'components/editor/editor';

const { TextArea } = Input;

const EditStartup = ({ setResponse, id }) => {
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
  const [outsideText, setOutsideText] = useState('');

  const [isMainPage, setIsMainPage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const send = (e) => {
    const formData = new FormData();
    formData.append('mainPhoto', mainPhoto);
    formData.append('logoPhoto', logoPhoto);
    formData.append('previewPhoto', previewPhoto);
    formData.append('title', title);
    formData.append('previewText', previewText);
    formData.append('outsideText', outsideText);
    formData.append('mainText', mainText);
    formData.append('category', category);
    formData.append('share', share);
    formData.append('sharePrice', sharePrice);
    formData.append('video', video);
    formData.append('videoDescription', videoDescription);
    formData.append('isMainPage', isMainPage);
    formData.append('isVisible', isVisible);
    e.preventDefault();
    console.log(formData);
    updateStartup(id, formData).then((res) => {
      console.log(res);
      setResponse(res);
      setMainPhoto(null);
      setLogoPhoto(null);
      setPreviewPhoto(null);
      setTitle('');
      setPreviewText('');
      setMainText('');
      setShare('');
      setSharePrice('');
      setCategory('');
      setOutsideText('');
    });
  };

  useEffect(() => {
    getSingleStartup(id).then((res) => {
      const {
        title,
        mainText,
        previewText,
        share,
        sharePrice,
        mainPhoto,
        logoPhoto,
        previewPhoto,
        isMainPage,
        isVisible,
        video,
        videoDescription,
        outsideText,
        category,
      } = res.data.startup;

      setTitle(title);
      setMainText(mainText);
      setPreviewText(previewText);
      setShare(share);
      setSharePrice(sharePrice);
      setMainPhoto(mainPhoto);
      setLogoPhoto(logoPhoto);
      setPreviewPhoto(previewPhoto);
      setIsMainPage(isMainPage);
      setIsVisible(isVisible);
      setVideo(video);
      setVideoDescription(videoDescription);
      setIsLoading(false);
      setOutsideText(outsideText);
      setCategory(category);
    });
  }, []);

  const mainCheckboxChange = (e) => {
    setIsMainPage(e.target.checked);
  };

  const visibleCheckboxChange = (e) => {
    setIsVisible(e.target.checked);
  };

  return (
    <>
      {!isLoading && (
        <S.Form enctype="multipart/form-data">
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
          Preview text
          <WYSIWYGEditor onChange={setPreviewText} value={previewText} />
          Main Text
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
            Update Startup
          </Button>
        </S.Form>
      )}
    </>
  );
};

export default EditStartup;
