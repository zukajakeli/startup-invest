import * as S from './components';
import { addNewStory, getSingleStory } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button, Checkbox, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import WYSIWYGEditor from 'components/editor/editor';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './border.css';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const { TextArea } = Input;

const AddNewBlog = ({ setAddResponse }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [secondaryPhoto, setSecondaryPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');
  const [outsideText, setOutsideText] = useState('');
  const [category, setCategory] = useState('');
  const [readingTime, setReadingTime] = useState('');
  const [isMainStory, setIsMainStory] = useState(false);
  const [isSecondaryStory, setIsSecondaryStory] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleStory(id).then((res) => {
        console.log(res.data.story);
        const {
          category,
          isMainStory,
          isSecondaryStory,
          mainPhoto,
          mainText,
          outsideText,
          previewPhoto,
          readingTime,
          secondaryPhoto,
          title,
          _id,
        } = res.data.story;
        setMainPhoto(mainPhoto);
        setSecondaryPhoto(secondaryPhoto);
        setPreviewPhoto(previewPhoto);
        setTitle(title);
        setMainText(mainText);
        setOutsideText(outsideText);
        setCategory(category);
        setReadingTime(readingTime);
        setIsMainStory(isMainStory);
        setIsSecondaryStory(isSecondaryStory);
      });
    }
  }, []);

  const send = (e) => {
    const key = 'updatable';

    const formData = new FormData();
    formData.append('mainPhoto', mainPhoto);
    formData.append('secondaryPhoto', secondaryPhoto);
    formData.append('previewPhoto', previewPhoto);
    formData.append('title', title);
    formData.append('mainText', mainText);
    formData.append('outsideText', outsideText);
    formData.append('category', category);
    formData.append('readingTime', readingTime);
    formData.append('isMainStory', isMainStory);
    formData.append('isSecondaryStory', isSecondaryStory);
    e.preventDefault();
    if (
      mainPhoto === null ||
      previewPhoto === null ||
      secondaryPhoto === null ||
      title === '' ||
      mainText === '' ||
      outsideText === '' ||
      category === '' ||
      readingTime === ''
    ) {
      alert('Complete all fields');
    } else {
      message.loading({ content: 'Loading...', key });
      if (id) {
      } else {
        addNewStory(formData).then((res) => {
          console.log(res);
          message.success({ content: 'Blog Added!', key, duration: 2 });
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        });
      }
    }
  };

  const mainStoryCheckboxChange = (e) => {
    setIsMainStory(e.target.checked);
  };

  const secondaryStoryCheckboxChange = (e) => {
    setIsSecondaryStory(e.target.checked);
  };

  return (
    <S.Form enctype="multipart/form-data">
      <p style={{ fontSize: 24, marginBottom: 20 }}>
        {id ? 'Edit Blog' : 'Add Blog'}{' '}
      </p>
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
        prefix="Reading Time:"
        value={readingTime}
        onChange={(e) => {
          setReadingTime(e.target.value);
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
        <Checkbox checked={isMainStory} onChange={mainStoryCheckboxChange}>
          {' '}
          Main Story{' '}
        </Checkbox>
        <Checkbox
          checked={isSecondaryStory}
          onChange={secondaryStoryCheckboxChange}
        >
          {' '}
          Secondary story{' '}
        </Checkbox>
      </div>
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
        name="secondaryPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          setSecondaryPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Secondary Photo</Button>
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
        Add Blog
      </Button>
    </S.Form>
  );
};

export default AddNewBlog;
