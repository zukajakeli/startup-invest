import * as S from './components';
import { getSingleFaq, updateFaq } from 'config/API';
import { useState } from 'react';

import { Input, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

const { TextArea } = Input;

const EditFaq = ({ setResponse, id }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const key = 'updatable';

  useEffect(() => {
    getSingleFaq(id).then((res) => {
      console.log(res);
      setQuestion(res.data.question);
      setAnswer(res.data.answer);
    });
  }, []);

  const send = (e) => {
    e.preventDefault();
    if (question === '' || answer === '') {
      alert('Complete all fields');
    } else {
      updateFaq({ question, answer }, id).then((res) => {
        console.log(res);
        setResponse(res);
        message.success({
          content: 'FAQ Updated!',
          key,
          duration: 2,
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      });
    }
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
        Edit FAQ
      </Button>
    </S.Form>
  );
};

export default EditFaq;
