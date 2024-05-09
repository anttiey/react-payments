import { Modal } from '@hanuuny/react-modal';
import TitleContainer from '../../common/TitleContainer/TitleContainer';

import { useState } from 'react';
import { BCCard, HanaCard, HyundaiCard, KakaoCard, KBCard, LotteCard, ShinhanCard, WooriCard } from '../../../assets';
import type { InputType } from '../../../hooks/useInput';
import type { CardCompany } from '../../../domain/Card.type';

import * as S from './CardCompanyInput.style';

interface CardCompanyInputProps {
  company: InputType<string>;
}

const CARD_COMPANY_LIST: Record<CardCompany, string> = {
  BC카드: BCCard,
  신한카드: ShinhanCard,
  카카오뱅크: KakaoCard,
  현대카드: HyundaiCard,
  우리카드: WooriCard,
  롯데카드: LotteCard,
  하나카드: HanaCard,
  국민카드: KBCard,
};

const CardCompanyInput = ({ company }: CardCompanyInputProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleOptionList = () => setIsOpenModal((prev) => !prev);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    company.handleValue(e.target.value);
    setIsOpenModal(false);
  };

  return (
    <div>
      <TitleContainer title="카드사를 선택해 주세요." subTitle="현재 국내 카드사만 가능합니다." />
      <S.SelectedCardCompanyButton $isDefault={!company.value} onClick={toggleOptionList}>
        <p>{company.value || '카드사를 선택해 주세요'}</p>
      </S.SelectedCardCompanyButton>
      <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)} size="md">
        <Modal.Header>
          <Modal.Title>카드사 선택</Modal.Title>
          <Modal.CloseButton close={() => setIsOpenModal(false)} />
        </Modal.Header>
        <Modal.Body>
          <S.CardCompanyOptionContainer>
            {Object.entries(CARD_COMPANY_LIST).map((option) => (
              <div>
                <input
                  type="radio"
                  id={option[0]}
                  value={option[0]}
                  checked={option[0] === company.value}
                  onChange={handleOptionChange}
                ></input>
                <S.CardCompanyOptionLabel htmlFor={option[0]}>
                  <img src={option[1]} alt={option[0]} />
                  {option[0]}
                </S.CardCompanyOptionLabel>
              </div>
            ))}
          </S.CardCompanyOptionContainer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardCompanyInput;
