import requiredIcon from 'assets/icons/required-icon.svg';
import uploadIcon from 'assets/icons/upload-icon.svg';
import eyeIconHidden from 'assets/icons/eye-icon-hidden.svg';
import eyeIcon from 'assets/icons/eye-icon.svg';

import * as S from './text-input-components';
import { useState } from 'react';

const TextInput = ({
  fullWidth,
  required,
  placeholder,
  isUploadInput,
  isPasswordInput,
  inputName,
  handleChange,
  value,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const HideShowPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <S.Wrapper fullWidth={fullWidth}>
      <label htmlFor={inputName}> </label>
      <S.InputText
        id={inputName}
        name={inputName}
        isUploadInput={isUploadInput}
        type={
          isUploadInput
            ? 'file'
            : isPasswordInput && !isPasswordVisible
            ? 'password'
            : 'text'
        }
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {required && <S.RequiredIcon src={requiredIcon} alt="required" />}
      {isUploadInput && <S.UploadIcon src={uploadIcon} alt="upload" />}
      {isPasswordInput && (
        <S.EyeIcon
          src={isPasswordVisible ? eyeIconHidden : eyeIcon}
          alt="password"
          onClick={HideShowPassword}
        />
      )}
    </S.Wrapper>
  );
};

export default TextInput;
