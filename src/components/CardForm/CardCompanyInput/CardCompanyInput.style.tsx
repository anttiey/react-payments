import styled from 'styled-components';

export const CardCompanyInputContainer = styled.div`
  position: relative;
  padding-bottom: 22px;
`;

export const SelectedCardCompanyButton = styled.button<{ $isDefault: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.primary.light};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;

  p {
    color: ${(props) =>
      props.$isDefault ? ({ theme }) => theme.color.primary.light : ({ theme }) => theme.color.primary.dark};
  }
`;

export const CardCompanyOptionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background: #ffffff;
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
