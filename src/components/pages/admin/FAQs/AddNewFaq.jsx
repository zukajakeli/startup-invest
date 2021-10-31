import TextareaInput from 'components/components/text-area/TextareaInput';
import TextInput from 'components/components/text-input/TextInput';
import { useFormik } from 'formik';
import * as S from './components';
import { addNewFaq } from 'config/API';

const AddNewFaq = ({ setAddResponse }) => {
  const formik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      addNewFaq(values).then((res) => setAddResponse(res));
    },
  });
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <TextareaInput
        placeholder="Question"
        inputName="question"
        handleChange={formik.handleChange}
        value={formik.values.question}
      />
      <TextareaInput
        placeholder="Answer"
        inputName="answer"
        handleChange={formik.handleChange}
        value={formik.values.answer}
      />
      <S.SubmitButton type="submit">Add</S.SubmitButton>
    </S.Form>
  );
};

export default AddNewFaq;
