import { useState } from 'react';
import { Modal } from '@hanuuny/react-modal';
import {
  Check,
  BCCard,
  HanaCard,
  HyundaiCard,
  KakaoCard,
  KBCard,
  LotteCard,
  ShinhanCard,
  WooriCard,
} from '../../assets';
import type { CardCompany } from '../../domain/Card.type';

import * as S from './ModalExamplePage.style';

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

const ModalExamplePage = () => {
  const [isCardCompanyModalOpen, setIsCardCompanyModalOpen] = useState(false);
  const [isAgreeTermsModalOpen, setIsAgreeTermsModalOpen] = useState(false);

  return (
    <>
      <S.ModalExampleLayout>
        <S.ModalExampleButton type="button" onClick={() => setIsCardCompanyModalOpen(true)}>
          카드사 선택 모달
        </S.ModalExampleButton>
        <S.ModalExampleButton type="button" onClick={() => setIsAgreeTermsModalOpen(true)}>
          약관 동의 모달
        </S.ModalExampleButton>
      </S.ModalExampleLayout>
      <div>
        <Modal isOpen={isCardCompanyModalOpen} close={() => setIsCardCompanyModalOpen(false)} size="md">
          <Modal.Header>
            <Modal.Title>카드사 선택</Modal.Title>
            <Modal.CloseButton close={() => setIsCardCompanyModalOpen(false)} />
          </Modal.Header>
          <Modal.Body>
            <S.CardCompanyOptionContainer>
              {Object.entries(CARD_COMPANY_LIST).map((option) => (
                <S.CardCompanyOptionLabel htmlFor={option[0]}>
                  <img src={option[1]} alt={option[0]} />
                  {option[0]}
                </S.CardCompanyOptionLabel>
              ))}
            </S.CardCompanyOptionContainer>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <Modal isOpen={isAgreeTermsModalOpen} close={() => setIsAgreeTermsModalOpen(false)} position="bottom">
          <Modal.Header>
            <Modal.Title>약관에 동의해 주세요</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <S.AgreeTermsContainer>
              <S.CheckBoxContainer>
                <S.CheckBox>
                  <img src={Check} alt="체크" />
                </S.CheckBox>
                <p>[필수] 개인정보 수집 이용 동의</p>
              </S.CheckBoxContainer>
              <S.CheckBoxContainer>
                <S.CheckBox>
                  <img src={Check} alt="체크" />
                </S.CheckBox>
                <p>[필수] 고객정보 제 3자 제공 동의</p>
              </S.CheckBoxContainer>
            </S.AgreeTermsContainer>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button mode="primary" text="동의하고 저장하기" onClick={() => setIsAgreeTermsModalOpen(false)} />
            <Modal.Button mode="secondary" text="닫기" onClick={() => setIsAgreeTermsModalOpen(false)} />
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalExamplePage;
