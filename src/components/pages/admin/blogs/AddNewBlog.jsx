import TextareaInput from 'components/components/text-area/TextareaInput';
import TextInput from 'components/components/text-input/TextInput';
import { useFormik } from 'formik';
import { Input, Button } from 'antd';
import { useState, useRef } from 'react';
import * as S from './components';
import { addNewStory } from 'config/API';

const AddNewBlog = () => {
  //form states
  const [mainPhoto, setMainPhoto] = useState('');
  const [secondaryPhoto, setSecondaryPhoto] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [quote, setQuote] = useState('');
  const [content, setContent] = useState('');

  const submit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', mainPhoto);

    addNewStory(data).then((res) => console.log('response', res));

    console.log('data', data);
  };

  return (
    <>
      <S.Form id="add-blog-form" encType="multipart/form-data">
        {/* <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quote"
        name="quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content"
        name="conent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /> */}
      </S.Form>
      <div>
        <input
          type="file"
          name="file"
          onChange={(e) => setMainPhoto(e.target.files[0])}
        />
        <S.SubmitButton type="button" onClick={submit}>
          Add
        </S.SubmitButton>
      </div>
    </>
  );
};

export default AddNewBlog;
