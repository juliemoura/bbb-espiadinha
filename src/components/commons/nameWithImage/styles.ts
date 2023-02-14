import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

export const Name = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  padding-left: 20px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 9999px;
`;

export const NameWithImage = styled.View`
  border: 1px solid red;
`;