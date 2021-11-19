import * as S from './components';
import {
  addNewStory,
  getSingleStory,
  updateStory,
  uploadImage,
} from 'config/API';
import { useState } from 'react';
import { VideoCameraTwoTone, CameraTwoTone } from '@ant-design/icons';

import { Input, Upload, Button, Checkbox, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TinyEditor from 'components/editor/TinyEditor';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './border.css';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import BASE_URL from 'config/BaseUrl';

const { TextArea } = Input;

const AddNewBlog = ({ setAddResponse }) => {
  const [mainPhoto, setMainPhoto] = useState('');
  const [image, setImage] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');
  const [outsideText, setOutsideText] = useState('');
  const [category, setCategory] = useState('');
  const [readingTime, setReadingTime] = useState('');
  const [isMainStory, setIsMainStory] = useState(false);
  const [isSecondaryStory, setIsSecondaryStory] = useState(false);
  const [imageArray, setImageArray] = useState([]);
  const { id } = useParams();
  const history = useHistory();

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
          title,
          _id,
        } = res.data.story;
        setMainPhoto(mainPhoto);
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

  const upload = () => {
    const formData = new FormData();
    formData.append('image', image);
    // e.preventDefault();
    uploadImage(formData).then((res) => {
      console.log(res.data.url);
      setImageArray((prev) => {
        return [res.data.url, ...prev];
      });
      setImage(null);
    });
  };

  const send = (e) => {
    const key = 'updatable';

    const formData = {
      title,
      mainText,
      mainPhoto,
      previewPhoto,
      readingTime,
      outsideText,
      category,
      isMainStory,
      isSecondaryStory,
    };
    e.preventDefault();
    if (
      mainPhoto === '' ||
      previewPhoto === '' ||
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
        updateStory(id, formData).then((res) => {
          console.log(res);
          message.success({ content: 'Blog Updated!', key, duration: 2 });
          setTimeout(() => {
            history.replace('/admin/blogs');
          }, 1500);
        });
      } else {
        addNewStory(formData).then((res) => {
          console.log(res);
          message.success({ content: 'Blog Added!', key, duration: 2 });
          setTimeout(() => {
            history.replace('/admin/blogs');
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
      <Input
        prefix="Main Photo URL:"
        suffix={<CameraTwoTone />}
        value={mainPhoto}
        onChange={(e) => {
          setMainPhoto(e.target.value);
        }}
      />
      <Input
        prefix="Preview Photo URL:"
        suffix={<CameraTwoTone />}
        value={previewPhoto}
        onChange={(e) => {
          setPreviewPhoto(e.target.value);
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
      <TinyEditor contentEditor={mainText} setContentEditor={setMainText} />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 16,
          borderRadius: 8,
          border: '1px solid black',
          padding: 10,
        }}
      >
        <input
          type="file"
          // value={image}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <Button type="primary" onClick={upload}>
          Upload Image
        </Button>
      </div>
      {imageArray &&
        imageArray.map((url) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                borderRadius: 8,
                border: '1px solid black',
                padding: 10,
              }}
            >
              <img
                style={{ width: 120, height: 80, borderRadius: 8 }}
                src={`${BASE_URL}/${url}`}
                alt="server image"
              />
              <Input value={`${BASE_URL}/${url}`} />
            </div>
          );
        })}
      <Button type="primary" onClick={send}>
        {id ? 'Update Blog' : 'Add Blog'}
      </Button>
    </S.Form>
  );
};

export default AddNewBlog;
