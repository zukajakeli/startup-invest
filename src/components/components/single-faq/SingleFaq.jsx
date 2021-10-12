import dropdownIcon from 'assets/icons/dropdown-icon.svg';
import { useState } from 'react';

import * as S from './single-faq-components';

const SingleFaq = ({ question, answer }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggler = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <S.SingleFaq>
      <S.TitleAndDropdown>
        <S.FaqTitle>{question}</S.FaqTitle>
        <S.DropdownIcon
          src={dropdownIcon}
          alt="dropdown"
          onClick={toggler}
          isDropdownOpen={isDropdownOpen}
        />
      </S.TitleAndDropdown>
      {isDropdownOpen && <S.FaqAnswer>{answer}</S.FaqAnswer>}
    </S.SingleFaq>
  );
};

export default SingleFaq;
