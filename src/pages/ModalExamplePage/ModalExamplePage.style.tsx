import styled from 'styled-components';

export const ModalExampleLayout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ModalExampleButton = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.primary.main};
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease background;

  &:hover {
    background: ${({ theme }) => theme.color.primary.light};
  }
`;

export const CardCompanyOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  column-gap: 16px;
  width: 100%;
  background: #ffffff;
  margin-top: 15px;
`;

export const CardCompanyOptionLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  font-size: 12px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const AgreeTermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;

  p {
    color: ${({ theme }) => theme.color.primary.light};
  }
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary.main};

  img {
    width: 50%;
  }
`;
