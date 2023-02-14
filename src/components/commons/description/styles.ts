import styled from "styled-components/native";

export const DescriptionTitleContainer = styled.View<{ borderColor: string }>`
  display: flex;
  align-items: center;
  background: #313131;
  border-radius: 999px;
  width: 110px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid ${({ borderColor }) => borderColor};
`;

export const DescriptionTitle = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
`;
