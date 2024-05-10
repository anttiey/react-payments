import {
  useCardNumber,
  useCardExpirationDate,
  useCardCVC,
  useCardCompany,
  useCardOwnerName,
  useCardPassword,
} from '@hanuuny/react-card-hooks';

import SelectBox from '../../components/common/SelectBox/SelectBox';
import InputField from '../../components/common/InputField/InputField';
import Input from '../../components/common/Input/Input';

import * as S from './HookExamplePage.style';

const CARD_COMPANY_LIST = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

const HookExamplePage = () => {
  const cardNumber = useCardNumber();
  const cardDate = useCardExpirationDate();
  const cardCompany = useCardCompany(CARD_COMPANY_LIST);
  const cardCVC = useCardCVC();
  const cardOwnerName = useCardOwnerName();
  const cardPassword = useCardPassword();

  const ERROR_MESSAGES: Record<string, string> = {
    NOT_NUMBER: '숫자가 아닌 글자는 입력할 수 없습니다.',
    MAX_LENGTH: '글자 수가 부족합니다.',
    INVALID_MONTH: '유효하지 않은 달입니다.',
    INVALID_YEAR: '유효하지 않은 년도입니다.',
    EXPIRED_DATE: '유효하지 않은 카드입니다.',
    NOT_ENG: '영어가 아닌 글자는 입력할 수 없습니다.',
    EXCESSIVE_WHITE_SPACE: '공백은 하나 이상 입력할 수 없습니다.',
  };

  const renderCardNumberInput = () => {
    return (
      <InputField label="카드 번호" inputCount={1} errorMessage={ERROR_MESSAGES[cardNumber.cardNumberErrorMessage]}>
        <S.CardTypeContainer>
          <Input
            isError={!cardNumber.isValidCardNumber}
            value={cardNumber.cardNumber}
            onChange={(e) => cardNumber.handleCardNumberChange(e.target.value)}
          ></Input>
          <p>{cardNumber.cardType}</p>
        </S.CardTypeContainer>
      </InputField>
    );
  };

  const renderCardCompanyInput = () => {
    return (
      <SelectBox
        options={CARD_COMPANY_LIST}
        selectedOption={cardCompany.cardCompany}
        placeholder="카드사를 선택해 주세요."
        updateOption={(option: string) => cardCompany.handleCardCompanyChange(option)}
      />
    );
  };

  const renderCardDateInput = () => {
    return (
      <InputField
        label="유효기간"
        inputCount={2}
        errorMessage={ERROR_MESSAGES[cardDate.monthErrorMessages] || ERROR_MESSAGES[cardDate.yearErrorMessages]}
      >
        <Input
          isError={!cardDate.isValidMonth}
          type="text"
          placeholder="MM"
          value={cardDate.month}
          onChange={(e) => cardDate.handleMonthChange(e.target.value)}
        />
        <Input
          isError={!cardDate.isValidYear}
          type="text"
          placeholder="YY"
          value={cardDate.year}
          onChange={(e) => cardDate.handleYearChange(e.target.value)}
        />
      </InputField>
    );
  };

  const renderCardCVCInput = () => {
    return (
      <InputField label="CVC" inputCount={1} errorMessage={ERROR_MESSAGES[cardCVC.cvcNumberErrorMessage]}>
        <Input
          isError={!cardCVC.isValidCVCNumber}
          value={cardCVC.cvcNumber}
          onChange={(e) => cardCVC.handleCVCNumberChange(e.target.value)}
        ></Input>
      </InputField>
    );
  };

  const renderCardOwnerNameInput = () => {
    return (
      <InputField
        label="카드 소유자 이름"
        inputCount={1}
        errorMessage={ERROR_MESSAGES[cardOwnerName.ownerNameErrorMessage]}
      >
        <Input
          isError={!cardOwnerName.isValidOwnerName}
          value={cardOwnerName.ownerName}
          onChange={(e) => cardOwnerName.handleOwnerNameChange(e.target.value)}
        ></Input>
      </InputField>
    );
  };

  const renderCardPasswordInput = () => {
    return (
      <InputField label="카드 비밀번호" inputCount={1} errorMessage={ERROR_MESSAGES[cardPassword.passwordErrorMessage]}>
        <Input
          isError={!cardPassword.isValidPassword}
          value={cardPassword.password}
          onChange={(e) => cardPassword.handlePasswordChange(e.target.value)}
        ></Input>
      </InputField>
    );
  };

  return (
    <S.HookExampleLayout>
      {renderCardNumberInput()}
      {renderCardCompanyInput()}
      {renderCardDateInput()}
      {renderCardCVCInput()}
      {renderCardOwnerNameInput()}
      {renderCardPasswordInput()}
    </S.HookExampleLayout>
  );
};

export default HookExamplePage;
