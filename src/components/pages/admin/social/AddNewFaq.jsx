import * as S from './components';
import { addNewFaq } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AddNewStartup = ({ setAddResponse }) => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);

  const send = (e) => {
    e.preventDefault();
    addNewFaq({ question, answer }).then((res) => {
      console.log(res);
      setAddResponse(res);
      setQuestion('');
      setAnswer('');
    });
  };

  return (
    <S.Form>
      <TextArea
        placeholder="Question"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />

      <TextArea
        placeholder="Answer"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />

      <Button type="primary" onClick={send}>
        Add New FAQ
      </Button>
    </S.Form>
  );
};

export default AddNewStartup;
