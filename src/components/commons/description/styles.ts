import styled from "styled-components/native";

export const DescriptionTitleContainer = styled.View`
  border: 1px solid ${(color: string) => color};
  background: #313131;
  border-radius: 999px;
  width: 110px;
  margin-bottom: 10px;
  padding: 5px 10px;
  align-items: center;
  display: flex;
`;

export const DescriptionTitle = styled.Text`
  color: #FFF;
  font-weight: bold;
`;
