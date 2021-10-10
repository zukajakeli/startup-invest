import requiredIcon from 'assets/icons/required-icon.svg';
import uploadIcon from 'assets/icons/upload-icon.svg';

import * as S from './text-input-components';

const TextInput = ({
  fullWidth,
  required,
  placeholder,
  isUploadInput,
  inputName,
  handleChange,
  value,
}) => {
  return (
    <S.Wrapper fullWidth={fullWidth}>
      <label htmlFor={inputName}> </label>
      <S.InputText
        id={inputName}
        name={inputName}
        isUploadInput={isUploadInput}
        type={isUploadInput ? 'file' : 'text'}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {required && <S.RequiredIcon src={requiredIcon} alt="required" />}
      {isUploadInput && <S.UploadIcon src={uploadIcon} alt="upload" />}
    </S.Wrapper>
  );
};

export default TextInput;
