import TextareaInput from 'components/components/text-area/TextareaInput';
import TextInput from 'components/components/text-input/TextInput';
import { useFormik } from 'formik';
import * as S from './components';
import { addNewContact } from 'config/API';

const AddNewContact = ({ setAddResponse }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      location: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      addNewContact(values).then((res) => setAddResponse(res));
    },
  });
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <TextInput
        fullWidth
        placeholder="Email"
        inputName="email"
        handleChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextInput
        placeholder="Phone"
        fullWidth
        inputName="phone"
        handleChange={formik.handleChange}
        value={formik.values.phone}
      />
      <TextInput
        fullWidth
        placeholder="Location"
        inputName="location"
        handleChange={formik.handleChange}
        value={formik.values.location}
      />
      <S.SubmitButton type="submit">Add</S.SubmitButton>
    </S.Form>
  );
};

export default AddNewContact;
